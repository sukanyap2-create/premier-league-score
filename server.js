require('dotenv').config();

const express = require('express');
const path = require('node:path');

const app = express();
const API_BASE = 'https://api.football-data.org/v4';
const CACHE_TTL_MS = 90 * 1000;
const responseCache = new Map();

async function proxyFootballData(apiPath, res) {
  const token = process.env.FOOTBALL_DATA_TOKEN;
  if (!token) {
    res.set('Cache-Control', 'no-store');
    return res.status(503).json({ error: 'ยังไม่ได้ตั้งค่า FOOTBALL_DATA_TOKEN บนเซิร์ฟเวอร์' });
  }

  const cacheKey = apiPath;
  const cached = responseCache.get(cacheKey);
  if (cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
    res.set('X-Data-Source', 'cache');
    return res.json(cached.data);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const upstream = await fetch(`${API_BASE}${apiPath}`, {
      headers: { 'X-Auth-Token': token },
      signal: controller.signal
    });
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data.message || `football-data.org ตอบกลับ HTTP ${upstream.status}`
      });
    }

    responseCache.set(cacheKey, { data, savedAt: Date.now() });
    res.set('X-Data-Source', 'live');
    return res.json(data);
  } catch (error) {
    const status = error.name === 'AbortError' ? 504 : 502;
    return res.status(status).json({ error: 'เชื่อมต่อ football-data.org ไม่สำเร็จ' });
  } finally {
    clearTimeout(timeoutId);
  }
}

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/standings', (req, res) => proxyFootballData('/competitions/PL/standings', res));
app.get('/api/scorers', (req, res) => proxyFootballData('/competitions/PL/scorers', res));
app.get('/api/matches', (req, res) => {
  const allowed = new Set(['status', 'matchday', 'dateFrom', 'dateTo']);
  const params = new URLSearchParams();
  Object.entries(req.query).forEach(([key, value]) => {
    if (allowed.has(key) && typeof value === 'string') params.set(key, value);
  });
  const query = params.toString();
  return proxyFootballData(`/competitions/PL/matches${query ? `?${query}` : ''}`, res);
});
app.get('/api/teams/:teamId', (req, res) => {
  if (!/^\d+$/.test(req.params.teamId)) {
    return res.status(400).json({ error: 'รหัสทีมไม่ถูกต้อง' });
  }
  return proxyFootballData(`/teams/${req.params.teamId}`, res);
});

app.use(express.static(__dirname, { dotfiles: 'ignore', index: 'index.html' }));

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Premier League dashboard running at http://localhost:${port}`));
}

module.exports = app;