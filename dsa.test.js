const test = require('node:test');
const assert = require('node:assert/strict');
const { mergeSort, HashTable, buildSubstringIndex } = require('./dsa');

test('mergeSort sorts stably without changing the original array', () => {
  const items = [{ score: 2, id: 'a' }, { score: 1, id: 'b' }, { score: 2, id: 'c' }];
  const sorted = mergeSort(items, (left, right) => left.score - right.score);

  assert.deepEqual(sorted.map(item => item.id), ['b', 'a', 'c']);
  assert.deepEqual(items.map(item => item.id), ['a', 'b', 'c']);
});

test('HashTable stores, updates, and retrieves colliding keys', () => {
  const table = new HashTable(1);
  table.set('arsenal', 57).set('city', 65).set('arsenal', 99);

  assert.equal(table.get('arsenal'), 99);
  assert.equal(table.get('city'), 65);
  assert.equal(table.get('missing'), undefined);
  assert.equal(table.size, 2);
});

test('substring index finds team names without scanning every row', () => {
  const teams = [{ name: 'Manchester City FC' }, { name: 'Arsenal FC' }];
  const index = buildSubstringIndex(teams, team => team.name);

  assert.deepEqual(index.get('chester'), [teams[0]]);
  assert.deepEqual(index.get('fc'), teams);
  assert.equal(index.get('unknown'), undefined);
});