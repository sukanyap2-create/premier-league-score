const FALLBACK = {"season":{"startDate":"2026-08-21","endDate":"2027-05-30","currentMatchday":6},"standings":[{"table":[{"position":1,"team":{"id":65,"name":"Manchester City FC","crest":"https://crests.football-data.org/65.png"},"playedGames":5,"won":5,"draw":0,"lost":0,"points":15,"goalsFor":13,"goalsAgainst":5,"goalDifference":8},{"position":2,"team":{"id":57,"name":"Arsenal FC","crest":"https://crests.football-data.org/57.png"},"playedGames":5,"won":4,"draw":0,"lost":1,"points":12,"goalsFor":8,"goalsAgainst":4,"goalDifference":4},{"position":3,"team":{"id":397,"name":"Brighton & Hove Albion FC","crest":"https://crests.football-data.org/397.png"},"playedGames":5,"won":3,"draw":1,"lost":1,"points":10,"goalsFor":16,"goalsAgainst":5,"goalDifference":11},{"position":4,"team":{"id":402,"name":"Brentford FC","crest":"https://crests.football-data.org/402.png"},"playedGames":5,"won":2,"draw":3,"lost":0,"points":9,"goalsFor":10,"goalsAgainst":4,"goalDifference":6},{"position":5,"team":{"id":341,"name":"Leeds United FC","crest":"https://crests.football-data.org/341.png"},"playedGames":5,"won":2,"draw":3,"lost":0,"points":9,"goalsFor":7,"goalsAgainst":3,"goalDifference":4},{"position":6,"team":{"id":64,"name":"Liverpool FC","crest":"https://crests.football-data.org/64.png"},"playedGames":5,"won":2,"draw":3,"lost":0,"points":9,"goalsFor":7,"goalsAgainst":4,"goalDifference":3},{"position":7,"team":{"id":62,"name":"Everton FC","crest":"https://crests.football-data.org/62.png"},"playedGames":5,"won":2,"draw":3,"lost":0,"points":9,"goalsFor":6,"goalsAgainst":3,"goalDifference":3},{"position":8,"team":{"id":322,"name":"Hull City AFC","crest":"https://crests.football-data.org/322.png"},"playedGames":5,"won":2,"draw":2,"lost":1,"points":8,"goalsFor":6,"goalsAgainst":4,"goalDifference":2},{"position":9,"team":{"id":67,"name":"Newcastle United FC","crest":"https://crests.football-data.org/67.png"},"playedGames":5,"won":2,"draw":2,"lost":1,"points":8,"goalsFor":9,"goalsAgainst":9,"goalDifference":0},{"position":10,"team":{"id":61,"name":"Chelsea FC","crest":"https://crests.football-data.org/61.png"},"playedGames":5,"won":2,"draw":1,"lost":2,"points":7,"goalsFor":10,"goalsAgainst":12,"goalDifference":-2},{"position":11,"team":{"id":349,"name":"Ipswich Town FC","crest":"https://crests.football-data.org/349.png"},"playedGames":5,"won":2,"draw":0,"lost":3,"points":6,"goalsFor":7,"goalsAgainst":11,"goalDifference":-4},{"position":12,"team":{"id":66,"name":"Manchester United FC","crest":"https://crests.football-data.org/66.png"},"playedGames":5,"won":1,"draw":2,"lost":2,"points":5,"goalsFor":8,"goalsAgainst":8,"goalDifference":0},{"position":13,"team":{"id":351,"name":"Nottingham Forest FC","crest":"https://crests.football-data.org/351.png"},"playedGames":5,"won":1,"draw":2,"lost":2,"points":5,"goalsFor":4,"goalsAgainst":5,"goalDifference":-1},{"position":14,"team":{"id":71,"name":"Sunderland AFC","crest":"https://crests.football-data.org/71.png"},"playedGames":5,"won":1,"draw":1,"lost":3,"points":4,"goalsFor":6,"goalsAgainst":10,"goalDifference":-4},{"position":15,"team":{"id":354,"name":"Crystal Palace FC","crest":"https://crests.football-data.org/354.png"},"playedGames":5,"won":1,"draw":1,"lost":3,"points":4,"goalsFor":6,"goalsAgainst":11,"goalDifference":-5},{"position":16,"team":{"id":58,"name":"Aston Villa FC","crest":"https://crests.football-data.org/58.png"},"playedGames":5,"won":1,"draw":1,"lost":3,"points":4,"goalsFor":4,"goalsAgainst":9,"goalDifference":-5},{"position":17,"team":{"id":1044,"name":"AFC Bournemouth","crest":"https://crests.football-data.org/bournemouth.png"},"playedGames":5,"won":0,"draw":3,"lost":2,"points":3,"goalsFor":6,"goalsAgainst":8,"goalDifference":-2},{"position":18,"team":{"id":1076,"name":"Coventry City FC","crest":"https://crests.football-data.org/1076.png"},"playedGames":5,"won":1,"draw":0,"lost":4,"points":3,"goalsFor":1,"goalsAgainst":10,"goalDifference":-9},{"position":19,"team":{"id":63,"name":"Fulham FC","crest":"https://crests.football-data.org/63.png"},"playedGames":5,"won":0,"draw":2,"lost":3,"points":2,"goalsFor":5,"goalsAgainst":8,"goalDifference":-3},{"position":20,"team":{"id":73,"name":"Tottenham Hotspur FC","crest":"https://crests.football-data.org/73.png"},"playedGames":5,"won":0,"draw":2,"lost":3,"points":2,"goalsFor":2,"goalsAgainst":8,"goalDifference":-6}]}]};

const FALLBACK_SQUADS = {"65": [{"name": "Gianluigi Donnarumma", "position": "GK", "nationality": "Italy"}, {"name": "Rúben Dias", "position": "DF", "nationality": "Portugal"}, {"name": "Joško Gvardiol", "position": "DF", "nationality": "Croatia"}, {"name": "Abdukodir Khusanov", "position": "DF", "nationality": "Uzbekistan"}, {"name": "John Stones", "position": "DF", "nationality": "England"}, {"name": "Nathan Aké", "position": "DF", "nationality": "Netherlands"}, {"name": "Rodri", "position": "MF", "nationality": "Spain"}, {"name": "Mateo Kovačić", "position": "MF", "nationality": "Croatia"}, {"name": "Tijjani Reijnders", "position": "MF", "nationality": "Netherlands"}, {"name": "Bernardo Silva", "position": "MF", "nationality": "Portugal"}, {"name": "Rayan Cherki", "position": "MF", "nationality": "France"}, {"name": "Erling Haaland", "position": "FW", "nationality": "Norway"}, {"name": "Jérémy Doku", "position": "FW", "nationality": "Belgium"}, {"name": "Omar Marmoush", "position": "FW", "nationality": "Egypt"}, {"name": "Phil Foden", "position": "FW", "nationality": "England"}], "57": [{"name": "David Raya", "position": "GK", "nationality": "Spain"}, {"name": "William Saliba", "position": "DF", "nationality": "France"}, {"name": "Gabriel Magalhães", "position": "DF", "nationality": "Brazil"}, {"name": "Jurriën Timber", "position": "DF", "nationality": "Netherlands"}, {"name": "Riccardo Calafiori", "position": "DF", "nationality": "Italy"}, {"name": "Piero Hincapié", "position": "DF", "nationality": "Ecuador"}, {"name": "Martin Ødegaard (C)", "position": "MF", "nationality": "Norway"}, {"name": "Declan Rice", "position": "MF", "nationality": "England"}, {"name": "Martín Zubimendi", "position": "MF", "nationality": "Spain"}, {"name": "Eberechi Eze", "position": "MF", "nationality": "England"}, {"name": "Bukayo Saka", "position": "FW", "nationality": "England"}, {"name": "Viktor Gyökeres", "position": "FW", "nationality": "Sweden"}, {"name": "Kai Havertz", "position": "FW", "nationality": "Germany"}, {"name": "Noni Madueke", "position": "FW", "nationality": "England"}], "397": [{"name": "Bart Verbruggen", "position": "GK", "nationality": "Netherlands"}, {"name": "Lewis Dunk", "position": "DF", "nationality": "England"}, {"name": "Jan Paul van Hecke", "position": "DF", "nationality": "Netherlands"}, {"name": "Maxim De Cuyper", "position": "DF", "nationality": "Belgium"}, {"name": "Ferdi Kadıoğlu", "position": "DF", "nationality": "Turkey"}, {"name": "Mats Wieffer", "position": "MF", "nationality": "Netherlands"}, {"name": "Matt O'Riley", "position": "MF", "nationality": "Denmark"}, {"name": "Yankuba Minteh", "position": "FW", "nationality": "Gambia"}, {"name": "Kaoru Mitoma", "position": "FW", "nationality": "Japan"}, {"name": "Georginio Rutter", "position": "FW", "nationality": "France"}, {"name": "Charalampos Kostoulas", "position": "FW", "nationality": "Greece"}, {"name": "Stefanos Tzimas", "position": "FW", "nationality": "Greece"}], "402": [{"name": "Caoimhín Kelleher", "position": "GK", "nationality": "Ireland"}, {"name": "Rico Henry", "position": "DF", "nationality": "England"}, {"name": "Sepp van den Berg", "position": "DF", "nationality": "Netherlands"}, {"name": "Ethan Pinnock", "position": "DF", "nationality": "Jamaica"}, {"name": "Nathan Collins", "position": "DF", "nationality": "Ireland"}, {"name": "Yehor Yarmoliuk", "position": "MF", "nationality": "Ukraine"}, {"name": "Mathias Jensen", "position": "MF", "nationality": "Denmark"}, {"name": "Mikkel Damsgaard", "position": "MF", "nationality": "Denmark"}, {"name": "Vitaly Janelt", "position": "MF", "nationality": "Germany"}, {"name": "Kevin Schade", "position": "FW", "nationality": "Germany"}, {"name": "Igor Thiago", "position": "FW", "nationality": "Brazil"}, {"name": "Dango Ouattara", "position": "FW", "nationality": "Burkina Faso"}], "341": [{"name": "James Trafford", "position": "GK", "nationality": "England"}, {"name": "Joe Rodon", "position": "DF", "nationality": "Wales"}, {"name": "Jaka Bijol", "position": "DF", "nationality": "Slovenia"}, {"name": "Tarik Muharemović", "position": "DF", "nationality": "Bosnia and Herzegovina"}, {"name": "Jayden Bogle", "position": "DF", "nationality": "England"}, {"name": "James Justin", "position": "DF", "nationality": "England"}, {"name": "Ethan Ampadu (C)", "position": "MF", "nationality": "Wales"}, {"name": "Anton Stach", "position": "MF", "nationality": "Germany"}, {"name": "Brenden Aaronson", "position": "MF", "nationality": "USA"}, {"name": "Harry Wilson", "position": "MF", "nationality": "Wales"}, {"name": "Dominic Calvert-Lewin", "position": "FW", "nationality": "England"}], "64": [{"name": "Alisson Becker", "position": "GK", "nationality": "Brazil"}, {"name": "Virgil van Dijk", "position": "DF", "nationality": "Netherlands"}, {"name": "Joe Gomez", "position": "DF", "nationality": "England"}, {"name": "Milos Kerkez", "position": "DF", "nationality": "Hungary"}, {"name": "Conor Bradley", "position": "DF", "nationality": "Northern Ireland"}, {"name": "Ronald Araújo", "position": "DF", "nationality": "Uruguay"}, {"name": "Alexis Mac Allister", "position": "MF", "nationality": "Argentina"}, {"name": "Dominik Szoboszlai", "position": "MF", "nationality": "Hungary"}, {"name": "Florian Wirtz", "position": "MF", "nationality": "Germany"}, {"name": "Cody Gakpo", "position": "FW", "nationality": "Netherlands"}, {"name": "Luis Díaz", "position": "FW", "nationality": "Colombia"}, {"name": "Darwin Núñez", "position": "FW", "nationality": "Uruguay"}], "62": [{"name": "Jordan Pickford", "position": "GK", "nationality": "England"}, {"name": "James Tarkowski (C)", "position": "DF", "nationality": "England"}, {"name": "Jarrad Branthwaite", "position": "DF", "nationality": "England"}, {"name": "Vitaliy Mykolenko", "position": "DF", "nationality": "Ukraine"}, {"name": "Michael Keane", "position": "DF", "nationality": "England"}, {"name": "Kiernan Dewsbury-Hall", "position": "MF", "nationality": "England"}, {"name": "Iliman Ndiaye", "position": "MF", "nationality": "Senegal"}, {"name": "James Garner", "position": "MF", "nationality": "England"}, {"name": "Harrison Armstrong", "position": "MF", "nationality": "England"}, {"name": "Jack Grealish", "position": "FW", "nationality": "England"}, {"name": "Thierno Barry", "position": "FW", "nationality": "France"}, {"name": "Beto", "position": "FW", "nationality": "Guinea-Bissau"}], "322": [{"name": "Konstantinos Tzolakis", "position": "GK", "nationality": "Greece"}, {"name": "John Egan", "position": "DF", "nationality": "Ireland"}, {"name": "Semi Ajayi", "position": "DF", "nationality": "Nigeria"}, {"name": "Ryan Giles", "position": "DF", "nationality": "England"}, {"name": "Lewie Coyle", "position": "DF", "nationality": "England"}, {"name": "Regan Slater", "position": "MF", "nationality": "England"}, {"name": "Lucas Gourna-Douath", "position": "MF", "nationality": "France"}, {"name": "Hidemasa Morita", "position": "MF", "nationality": "Japan"}, {"name": "Matt Crooks", "position": "MF", "nationality": "England"}, {"name": "Oliver McBurnie", "position": "FW", "nationality": "Scotland"}, {"name": "Kieran Dowell", "position": "FW", "nationality": "England"}], "67": [{"name": "Nick Pope", "position": "GK", "nationality": "England"}, {"name": "Tino Livramento", "position": "DF", "nationality": "England"}, {"name": "Sven Botman", "position": "DF", "nationality": "Netherlands"}, {"name": "Fabian Schär", "position": "DF", "nationality": "Switzerland"}, {"name": "Dan Burn", "position": "DF", "nationality": "England"}, {"name": "Joelinton", "position": "MF", "nationality": "Brazil"}, {"name": "Bruno Guimarães (C)", "position": "MF", "nationality": "Brazil"}, {"name": "Joe Willock", "position": "MF", "nationality": "England"}, {"name": "Yoane Wissa", "position": "FW", "nationality": "DR Congo"}, {"name": "Harvey Barnes", "position": "FW", "nationality": "England"}, {"name": "Anthony Elanga", "position": "FW", "nationality": "Sweden"}, {"name": "Nick Woltemade", "position": "FW", "nationality": "Germany"}], "61": [{"name": "Robert Sánchez", "position": "GK", "nationality": "Spain"}, {"name": "Levi Colwill", "position": "DF", "nationality": "England"}, {"name": "Wesley Fofana", "position": "DF", "nationality": "France"}, {"name": "Reece James (C)", "position": "DF", "nationality": "England"}, {"name": "Malo Gusto", "position": "DF", "nationality": "France"}, {"name": "Jorrel Hato", "position": "DF", "nationality": "Netherlands"}, {"name": "Enzo Fernández", "position": "MF", "nationality": "Argentina"}, {"name": "Moises Caicedo", "position": "MF", "nationality": "Ecuador"}, {"name": "Romeo Lavia", "position": "MF", "nationality": "Belgium"}, {"name": "Cole Palmer", "position": "MF", "nationality": "England"}, {"name": "João Pedro", "position": "FW", "nationality": "Brazil"}, {"name": "Pedro Neto", "position": "FW", "nationality": "Portugal"}, {"name": "Estêvão", "position": "FW", "nationality": "Brazil"}], "349": [{"name": "Kjell Scherpen", "position": "GK", "nationality": "Netherlands"}, {"name": "Issa Diop", "position": "DF", "nationality": "France"}, {"name": "Darnell Furlong", "position": "DF", "nationality": "England"}, {"name": "Florentino Luís", "position": "MF", "nationality": "Portugal"}, {"name": "Sasa Lukić", "position": "MF", "nationality": "Serbia"}, {"name": "Julio Enciso", "position": "MF", "nationality": "Paraguay"}, {"name": "Abdul Fatawu", "position": "FW", "nationality": "Ghana"}, {"name": "Wes Burns", "position": "FW", "nationality": "Wales"}, {"name": "Emersonn", "position": "FW", "nationality": "Brazil"}], "66": [{"name": "Senne Lammens", "position": "GK", "nationality": "Belgium"}, {"name": "Matthijs de Ligt", "position": "DF", "nationality": "Netherlands"}, {"name": "Harry Maguire (C)", "position": "DF", "nationality": "England"}, {"name": "Lisandro Martínez", "position": "DF", "nationality": "Argentina"}, {"name": "Diogo Dalot", "position": "DF", "nationality": "Portugal"}, {"name": "Luke Shaw", "position": "DF", "nationality": "England"}, {"name": "Bruno Fernandes", "position": "MF", "nationality": "Portugal"}, {"name": "Kobbie Mainoo", "position": "MF", "nationality": "England"}, {"name": "Carlos Baleba", "position": "MF", "nationality": "Cameroon"}, {"name": "Bryan Mbeumo", "position": "FW", "nationality": "Cameroon"}, {"name": "Matheus Cunha", "position": "FW", "nationality": "Brazil"}, {"name": "Benjamin Šeško", "position": "FW", "nationality": "Slovenia"}], "351": [{"name": "Matz Sels", "position": "GK", "nationality": "Belgium"}, {"name": "Neco Williams", "position": "DF", "nationality": "Wales"}, {"name": "Nikola Milenković", "position": "DF", "nationality": "Serbia"}, {"name": "Morato", "position": "DF", "nationality": "Brazil"}, {"name": "Oleksandr Zinchenko", "position": "DF", "nationality": "Ukraine"}, {"name": "Nicolás Domínguez", "position": "MF", "nationality": "Argentina"}, {"name": "Elliot Anderson", "position": "MF", "nationality": "England"}, {"name": "James McAtee", "position": "MF", "nationality": "England"}, {"name": "Dilane Bakwa", "position": "FW", "nationality": "France"}, {"name": "Dan Ndoye", "position": "FW", "nationality": "Switzerland"}, {"name": "Chris Wood", "position": "FW", "nationality": "New Zealand"}], "71": [{"name": "Robin Roefs", "position": "GK", "nationality": "Netherlands"}, {"name": "Trai Hume", "position": "DF", "nationality": "Northern Ireland"}, {"name": "Nordi Mukiele", "position": "DF", "nationality": "France"}, {"name": "Omar Alderete", "position": "DF", "nationality": "Paraguay"}, {"name": "Arthur Masuaku", "position": "DF", "nationality": "DR Congo"}, {"name": "Granit Xhaka (C)", "position": "MF", "nationality": "Switzerland"}, {"name": "Noah Sadiki", "position": "MF", "nationality": "Belgium"}, {"name": "Chris Rigg", "position": "MF", "nationality": "England"}, {"name": "Chemsdine Talbi", "position": "FW", "nationality": "Morocco"}, {"name": "Enzo Le Fée", "position": "FW", "nationality": "France"}, {"name": "Wilson Isidor", "position": "FW", "nationality": "France"}], "354": [{"name": "Dean Henderson", "position": "GK", "nationality": "England"}, {"name": "Chris Richards", "position": "DF", "nationality": "USA"}, {"name": "Daniel Muñoz", "position": "DF", "nationality": "Colombia"}, {"name": "Tyrick Mitchell", "position": "DF", "nationality": "England"}, {"name": "Chadi Riad", "position": "DF", "nationality": "Morocco"}, {"name": "Adam Wharton", "position": "MF", "nationality": "England"}, {"name": "Daichi Kamada", "position": "MF", "nationality": "Japan"}, {"name": "Dwight McNeil", "position": "FW", "nationality": "England"}, {"name": "Jean-Philippe Mateta", "position": "FW", "nationality": "France"}, {"name": "Eddie Nketiah", "position": "FW", "nationality": "England"}], "58": [{"name": "Emiliano Martínez (C)", "position": "GK", "nationality": "Argentina"}, {"name": "Ezri Konsa", "position": "DF", "nationality": "England"}, {"name": "Matty Cash", "position": "DF", "nationality": "Poland"}, {"name": "Pau Torres", "position": "DF", "nationality": "Spain"}, {"name": "Lucas Digne", "position": "DF", "nationality": "France"}, {"name": "John McGinn", "position": "MF", "nationality": "Scotland"}, {"name": "Amadou Onana", "position": "MF", "nationality": "Belgium"}, {"name": "Boubacar Kamara", "position": "MF", "nationality": "France"}, {"name": "Emiliano Buendía", "position": "MF", "nationality": "Argentina"}, {"name": "Ollie Watkins", "position": "FW", "nationality": "England"}], "1044": [{"name": "Djordje Petrović", "position": "GK", "nationality": "Serbia"}, {"name": "António Silva", "position": "DF", "nationality": "Portugal"}, {"name": "James Hill", "position": "DF", "nationality": "England"}, {"name": "Adrien Truffert", "position": "DF", "nationality": "France"}, {"name": "Marcus Tavernier", "position": "MF", "nationality": "England"}, {"name": "Alex Scott", "position": "MF", "nationality": "England"}, {"name": "Lewis Cook (C)", "position": "MF", "nationality": "England"}, {"name": "Tyler Adams", "position": "MF", "nationality": "USA"}, {"name": "Justin Kluivert", "position": "FW", "nationality": "Netherlands"}, {"name": "Evanilson", "position": "FW", "nationality": "Brazil"}, {"name": "Antoine Semenyo", "position": "FW", "nationality": "Ghana"}], "1076": [{"name": "Oliver Dovin", "position": "GK", "nationality": "Sweden"}, {"name": "Liam Kitching", "position": "DF", "nationality": "England"}, {"name": "Bobby Thomas", "position": "DF", "nationality": "England"}, {"name": "Joel Latibeaudière", "position": "DF", "nationality": "Jamaica"}, {"name": "Milan van Ewijk", "position": "DF", "nationality": "Netherlands"}, {"name": "Jack Rudoni", "position": "MF", "nationality": "England"}, {"name": "Victor Torp", "position": "MF", "nationality": "Denmark"}, {"name": "Tatsuhiro Sakamoto", "position": "FW", "nationality": "Japan"}, {"name": "Haji Wright", "position": "FW", "nationality": "USA"}, {"name": "Ellis Simms", "position": "FW", "nationality": "England"}, {"name": "Ephron Mason-Clark", "position": "FW", "nationality": "Jamaica"}], "63": [{"name": "Bernd Leno", "position": "GK", "nationality": "Germany"}, {"name": "Calvin Bassey", "position": "DF", "nationality": "Nigeria"}, {"name": "Joachim Andersen", "position": "DF", "nationality": "Denmark"}, {"name": "Kenny Tete", "position": "DF", "nationality": "Netherlands"}, {"name": "Timothy Castagne", "position": "DF", "nationality": "Belgium"}, {"name": "Tom Cairney (C)", "position": "MF", "nationality": "Scotland"}, {"name": "Sander Berge", "position": "MF", "nationality": "Norway"}, {"name": "Alex Iwobi", "position": "MF", "nationality": "Nigeria"}, {"name": "Emile Smith Rowe", "position": "FW", "nationality": "England"}, {"name": "Rodrigo Muniz", "position": "FW", "nationality": "Brazil"}, {"name": "Raúl Jiménez", "position": "FW", "nationality": "Mexico"}], "73": [{"name": "Antonin Kinsky", "position": "GK", "nationality": "Czech Republic"}, {"name": "Micky van de Ven", "position": "DF", "nationality": "Netherlands"}, {"name": "Destiny Udogie", "position": "DF", "nationality": "Italy"}, {"name": "Pedro Porro", "position": "DF", "nationality": "Spain"}, {"name": "Kevin Danso", "position": "DF", "nationality": "Austria"}, {"name": "James Maddison (C)", "position": "MF", "nationality": "England"}, {"name": "Rodrigo Bentancur", "position": "MF", "nationality": "Uruguay"}, {"name": "Sandro Tonali", "position": "MF", "nationality": "Italy"}, {"name": "Dejan Kulusevski", "position": "MF", "nationality": "Sweden"}, {"name": "Dominic Solanke", "position": "FW", "nationality": "England"}, {"name": "Richarlison", "position": "FW", "nationality": "Brazil"}, {"name": "Mohammed Kudus", "position": "FW", "nationality": "Ghana"}]};
const API_URL = "/api/standings";
const SCORERS_URL = "/api/scorers";
const MATCHES_URL = "/api/matches";
const CACHE_PREFIX = 'pl-cache-v1:';
const BACKUP_DATA = window.PL_BACKUP || null;
let standingsRows = [];
let teamSearchIndex = null;
const SQUAD_POSITION_LABELS = {
  Goalkeepers: 'ผู้รักษาประตู', Goalkeeper: 'ผู้รักษาประตู', GK: 'ผู้รักษาประตู',
  Defenders: 'กองหลัง', Defender: 'กองหลัง', Defence: 'กองหลัง', DF: 'กองหลัง',
  Midfielders: 'กองกลาง', Midfielder: 'กองกลาง', Midfield: 'กองกลาง', MF: 'กองกลาง',
  Forwards: 'กองหน้า', Forward: 'กองหน้า', Offence: 'กองหน้า', Offense: 'กองหน้า', Attack: 'กองหน้า', Attacker: 'กองหน้า', FW: 'กองหน้า'
};

function bundledStandings(){
  if(!BACKUP_DATA) return FALLBACK;
  return {
    season: { currentMatchday: BACKUP_DATA.currentMatchday },
    standings: [{ table: BACKUP_DATA.teams.map(team=>({
      position:team[0], team:{id:team[1],name:team[2],crest:team[3]}, playedGames:team[4], won:team[5], draw:team[6], lost:team[7],
      goalsFor:team[8], goalsAgainst:team[9], goalDifference:team[10], points:team[11], form:team[12]
    })) }]
  };
}

function bundledScorers(){
  return { scorers: BACKUP_DATA.scorers.map(player=>({ player:{name:player[0]}, team:{name:player[1]}, goals:player[2], penalties:player[3], assists:player[4] })) };
}

function bundledMatches(matchday){
  const fixtureRows = window.PL_MATCHES_BACKUP?.weeks?.[matchday];
  if(fixtureRows){
    const teams = window.PL_MATCHES_BACKUP.teams;
    return { matches: fixtureRows.map(([utcDate, homeIndex, awayIndex, homeGoals, awayGoals])=>({
      utcDate,
      status: homeGoals != null && awayGoals != null ? 'FINISHED' : 'TIMED',
      homeTeam: { name: teams[homeIndex] },
      awayTeam: { name: teams[awayIndex] },
      score: { fullTime: { home: homeGoals, away: awayGoals } }
    })) };
  }
  const rows = BACKUP_DATA?.matches?.[matchday];
  if(!rows) return null;
  return { matches: rows.map(match=>({
    utcDate:match[0], status:match[1], homeTeam:{name:match[2]}, awayTeam:{name:match[3]},
    score:{fullTime:{home:match[4],away:match[5]}}
  })) };
}

function cacheSeasonMatches(matches){
  const coveredWeeks = new Set((matches || []).map(match=>Number(match.matchday)).filter(Boolean));
  if(!Array.isArray(matches) || matches.length < 380 || coveredWeeks.size !== 38) throw new Error('ข้อมูลการแข่งขันไม่ครบทั้งฤดูกาล');
  const matchdays = new Map();
  matches.forEach(match=>{
    if(!match.matchday) return;
    const weekMatches = matchdays.get(match.matchday) || [];
    weekMatches.push(match);
    matchdays.set(match.matchday, weekMatches);
  });
  matchdays.forEach((weekMatches, matchday)=>writeCache(`matches-${matchday}`, { matches: weekMatches }));
  writeCache('matches-all', { matches });
}

function bundledNotice(){
  const savedAt = new Date(BACKUP_DATA.savedAt).toLocaleString('th-TH', { dateStyle:'medium', timeStyle:'short' });
  return `⚠️ ออฟไลน์: ใช้ชุดข้อมูลสำรองในโปรเจกต์ (อัปเดต ${savedAt})`;
}

function readCache(key){
  try{
    const cached = JSON.parse(localStorage.getItem(CACHE_PREFIX + key));
    return cached?.data ? cached : null;
  }catch(err){
    return null;
  }
}

function writeCache(key, data){
  try{
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ savedAt: new Date().toISOString(), data }));
  }catch(err){
    console.warn('บันทึกข้อมูลสำรองไม่สำเร็จ:', err);
  }
}

function cacheNotice(cached){
  const savedAt = new Date(cached.savedAt).toLocaleString('th-TH', { dateStyle:'medium', timeStyle:'short' });
  return `⚠️ ออฟไลน์: ใช้ข้อมูลสำรองที่บันทึกเมื่อ ${savedAt}`;
}

function initials(name){
  const clean = name.replace(/\b(FC|AFC|United|City|Hotspur)\b/gi,'').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  return (words[0]?.[0]||'') + (words[1]?.[0]||words[0]?.[1]||'');
}

function render(data, isLive, offlineMessage){
  const table = data.standings[0].table;
  standingsRows = table;
  teamSearchIndex = PLDSA.buildSubstringIndex(table, row => row.team.name);
  const md = data.season?.currentMatchday;
  document.getElementById('season-info').textContent = md ? `ฤดูกาล 2026/27 • นัดที่ ${md}` : 'ฤดูกาล 2026/27';
  if(md) document.getElementById('matchweek-select').value = String(md);
  document.getElementById('status').textContent = isLive ? '' : (offlineMessage || '⚠️ ใช้ข้อมูลสำรอง (ไม่สามารถเชื่อมต่อ API ได้)');
  renderStandings();
}

function renderStandings(){
  const sortKey = document.getElementById('sort-select').value;
  const rows = PLDSA.mergeSort(standingsRows, (left, right)=>{
    if(sortKey === 'position') return left.position - right.position;
    return (right[sortKey] - left[sortKey]) || (left.position - right.position);
  });
  const body = document.getElementById('table-body');
  body.innerHTML = rows.map(row=>{
    let zone = '';
    if(row.position<=4) zone='zone-ucl';
    else if(row.position>=18) zone='zone-rel';
    return `<tr class="${zone}" data-search="${row.team.name.toLowerCase()}">
      <td><span class="pos">${row.position}</span></td>
      <td><div class="team team-clickable" data-team-id="${row.team.id||''}" data-team-name="${row.team.name}">
        <span class="crest">
          <img src="${row.team.crest}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span class="crest-fallback" style="display:none;">${initials(row.team.name)}</span>
        </span>
        <span>${row.team.name}</span>
      </div></td>
      <td>${row.playedGames}</td><td>${row.won}</td><td>${row.draw}</td><td>${row.lost}</td>
      <td>${row.goalsFor}</td><td>${row.goalsAgainst}</td><td>${row.goalDifference}</td>
      <td class="pts">${row.points}</td>
      <td><div class="form-guide">${renderForm(row.form)}</div></td>
    </tr>`;
  }).join('');
  applySearchFilter();
}

function renderForm(form){
  if(!form) return '<span class="form-empty">—</span>';
  return String(form).split(',').slice(-5).map(result=>{
    const value = result.trim().toUpperCase();
    const labels = { W: 'ชนะ', D: 'เสมอ', L: 'แพ้' };
    const classes = { W: 'form-w', D: 'form-d', L: 'form-l' };
    return labels[value] ? `<span class="form-badge ${classes[value]}" title="${labels[value]}">${value}</span>` : '';
  }).join('');
}

async function load(){
  try{
    const res = await fetch(API_URL);
    if(!res.ok) throw new Error("HTTP "+res.status);
    const data = await res.json();
    const table = data.standings?.[0]?.table || [];
    if(table.length && table.some(row=>!row.form)){
      let matchesData;
      try{
        const matchesRes = await fetch(`${MATCHES_URL}?status=FINISHED`);
        if(matchesRes.ok){
          matchesData = await matchesRes.json();
          writeCache('finished-matches', matchesData);
        }
      }catch(formError){
        console.warn('คำนวณฟอร์มจากผลการแข่งขันไม่สำเร็จ:', formError);
      }
      matchesData ||= readCache('finished-matches')?.data;
      if(matchesData){
        const recentForm = formFromMatches(matchesData.matches || []);
        table.forEach(row=>{ if(!row.form) row.form = recentForm[row.team.id] || ''; });
      }
    }
    writeCache('standings', data);
    render(data, true);
  }catch(err){
    console.warn("ดึงข้อมูลสดไม่สำเร็จ, ใช้ข้อมูลสำรอง:", err);
    const cached = readCache('standings');
    render(cached?.data || bundledStandings(), false, cached ? cacheNotice(cached) : (BACKUP_DATA ? bundledNotice() : '⚠️ ใช้ข้อมูลสำรองในตัว (ยังไม่มีข้อมูลออนไลน์ที่บันทึกไว้)'));
  }
  applySearchFilter();
  updateRefreshInfo();
}

function formFromMatches(matches){
  const resultsByTeam = new Map();
  const recordResult = (teamId, result)=>{
    const results = resultsByTeam.get(teamId) || [];
    if(results.length < 5) results.push(result);
    resultsByTeam.set(teamId, results);
  };
  matches.filter(match=>match.status === 'FINISHED' && match.score?.fullTime?.home != null && match.score?.fullTime?.away != null)
    .sort((a,b)=>new Date(b.utcDate) - new Date(a.utcDate))
    .forEach(match=>{
      const homeGoals = match.score.fullTime.home;
      const awayGoals = match.score.fullTime.away;
      recordResult(match.homeTeam.id, homeGoals > awayGoals ? 'W' : homeGoals < awayGoals ? 'L' : 'D');
      recordResult(match.awayTeam.id, awayGoals > homeGoals ? 'W' : awayGoals < homeGoals ? 'L' : 'D');
    });
  return Object.fromEntries([...resultsByTeam].map(([teamId, results])=>[teamId, results.reverse().join(',')]));
}

// ---- ค้นหาทีม ----
function applySearchFilter(){
  const term = (document.getElementById('search-input').value||'').trim().toLowerCase();
  const matches = term ? new Set(teamSearchIndex?.get(term)?.map(row=>row.team.name.toLowerCase()) || []) : null;
  document.querySelectorAll('#table-body tr').forEach(tr=>{
    const name = tr.getAttribute('data-search')||'';
    tr.classList.toggle('row-hidden', matches ? !matches.has(name) : false);
  });
}
document.getElementById('search-input').addEventListener('input', applySearchFilter);
document.getElementById('sort-select').addEventListener('change', renderStandings);

// ---- ธีมและแท็บข้อมูล ----
const themeToggle = document.getElementById('theme-toggle');
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('pl-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด');
}
setTheme(localStorage.getItem('pl-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
themeToggle.addEventListener('click', ()=>setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

let scorersLoaded = false;
let matchesRequestId = 0;
let matchesAbortController = null;
let matchesRetryAfter = 0;
document.querySelectorAll('.tab-button').forEach(button=>button.addEventListener('click', ()=>{
  document.querySelectorAll('.tab-button').forEach(tab=>{
    const active = tab === button;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.tab-panel').forEach(panel=>{
    const active = panel.id === button.dataset.tab;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
  if(button.dataset.tab === 'scorers-view' && !scorersLoaded) loadScorers();
  if(button.dataset.tab === 'matches-view') loadMatches(Number(document.getElementById('matchweek-select').value));
}));

async function loadScorers(){
  const status = document.getElementById('scorers-status');
  status.textContent = 'กำลังโหลดข้อมูล...';
  try{
    const res = await fetch(SCORERS_URL);
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data = await res.json();
    writeCache('scorers', data);
    renderScorers(data);
    status.textContent = data.scorers?.length ? '' : 'ยังไม่มีข้อมูลดาวซัลโว';
    scorersLoaded = true;
  }catch(err){
    console.warn('โหลดอันดับดาวซัลโวไม่สำเร็จ:', err);
    const cached = readCache('scorers');
    if(cached){
      renderScorers(cached.data);
      status.textContent = cacheNotice(cached);
      scorersLoaded = true;
    }else if(BACKUP_DATA){
      const data = bundledScorers();
      renderScorers(data);
      status.textContent = bundledNotice();
      scorersLoaded = true;
    }else{
      status.textContent = 'ไม่สามารถโหลดข้อมูลดาวซัลโวได้ และยังไม่มีข้อมูลสำรองที่บันทึกไว้';
    }
  }
}

function renderScorers(data){
  document.getElementById('scorers-body').innerHTML = (data.scorers || []).map((entry, index)=>`
      <tr><td>${index + 1}</td><td class="player-name">${entry.player?.name || '-'}</td>
      <td>${entry.team?.name || '-'}</td><td><strong>${entry.goals ?? 0}</strong> <span class="muted">(${entry.penalties ?? 0})</span></td>
      <td>${entry.assists ?? '—'}</td></tr>`).join('');
}

const matchweekSelect = document.getElementById('matchweek-select');
for(let week = 1; week <= 38; week++){
  matchweekSelect.add(new Option(`นัดที่ ${week}`, String(week)));
}
matchweekSelect.addEventListener('change', ()=>loadMatches(Number(matchweekSelect.value)));

function formatMatchDate(date){
  return date ? new Date(date).toLocaleString('th-TH', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' }) : 'ยังไม่กำหนดเวลา';
}
async function loadMatches(matchday){
  if(!matchday) return;
  const requestId = ++matchesRequestId;
  matchesAbortController?.abort();
  const controller = new AbortController();
  matchesAbortController = controller;
  const isCurrentRequest = ()=>requestId === matchesRequestId && Number(matchweekSelect.value) === matchday;
  const status = document.getElementById('matches-status');
  const list = document.getElementById('matches-list');
  const cached = readCache(`matches-${matchday}`);
  const fullSeasonCache = readCache('matches-all');
  const isFullSeasonCache = fullSeasonCache?.data?.matches?.length >= 380 &&
    new Set(fullSeasonCache.data.matches.map(match=>Number(match.matchday)).filter(Boolean)).size === 38;
  const bundled = BACKUP_DATA ? bundledMatches(matchday) : null;
  if(isFullSeasonCache && Date.now() - new Date(fullSeasonCache.savedAt).getTime() < 10*60*1000){
    const matches = fullSeasonCache.data.matches.filter(match=>Number(match.matchday) === matchday);
    renderMatches({ matches }, matchday);
    return;
  }
  if(cached){
    renderMatches(cached.data, matchday, cached);
  }else if(bundled){
    renderMatches(bundled, matchday, BACKUP_DATA);
  }else{
    list.innerHTML = '';
    status.textContent = 'กำลังโหลดข้อมูล...';
  }
  if((cached || bundled) && Date.now() < matchesRetryAfter) return;
  status.textContent = 'กำลังตรวจสอบผลล่าสุด...';
  try{
    const timeoutId = setTimeout(()=>controller.abort(), 10000);
    let res;
    try{
      res = await fetch(MATCHES_URL, { signal: controller.signal });
    }finally{
      clearTimeout(timeoutId);
      if(matchesAbortController === controller) matchesAbortController = null;
    }
    if(!isCurrentRequest()) return;
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data = await res.json();
    if(!isCurrentRequest()) return;
    if(!Array.isArray(data.matches)) throw new Error('รูปแบบข้อมูลการแข่งขันไม่ถูกต้อง');
    cacheSeasonMatches(data.matches);
    matchesRetryAfter = 0;
    const selectedMatches = data.matches.filter(match=>Number(match.matchday) === matchday);
    renderMatches({ matches: selectedMatches }, matchday);
  }catch(err){
    if(!isCurrentRequest()) return;
    matchesRetryAfter = Date.now() + 30000;
    console.warn('โหลดผลและโปรแกรมแข่งไม่สำเร็จ:', err);
    if(cached){
      renderMatches(cached.data, matchday, cached);
    }else if(bundled){
      renderMatches(bundled, matchday, BACKUP_DATA);
    }else{
      status.textContent = 'ไม่สามารถโหลดผลและโปรแกรมแข่งได้ และยังไม่มีข้อมูลสำรองของนัดนี้';
      list.innerHTML = '';
    }
  }
}

function renderMatches(data, matchday, cached){
  const matches = data.matches || [];
  document.getElementById('matches-list').innerHTML = matches.map(match=>{
      const finished = ['FINISHED', 'AWARD'].includes(match.status);
      const score = finished ? `${match.score?.fullTime?.home ?? 0} - ${match.score?.fullTime?.away ?? 0}` : 'vs';
      return `<article class="match-row">
        <time class="match-date">${formatMatchDate(match.utcDate)}</time>
        <span class="match-team home">${match.homeTeam?.name || 'เจ้าบ้าน'}</span>
        <strong class="match-score">${score}</strong>
        <span class="match-team away">${match.awayTeam?.name || 'ทีมเยือน'}</span>
        <span class="match-status">${finished ? 'จบการแข่งขัน' : (match.status === 'IN_PLAY' ? 'กำลังแข่ง' : 'รอแข่งขัน')}</span>
      </article>`;
    }).join('');
  const notice = cached === BACKUP_DATA ? bundledNotice() : (cached ? cacheNotice(cached) : '');
  document.getElementById('matches-status').textContent = notice || (matches.length ? '' : 'ไม่มีการแข่งขันในนัดนี้');
}

// ---- รีเฟรชอัตโนมัติทุก 2 นาที ----
const REFRESH_MS = 2*60*1000;
let lastLoadTime = null;
function updateRefreshInfo(){
  lastLoadTime = new Date();
  const el = document.getElementById('refresh-info');
  if(el) el.textContent = 'อัปเดตล่าสุด ' + lastLoadTime.toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'});
}
setInterval(load, REFRESH_MS);

// ---- คลิกชื่อทีม เปิดหน้ารายชื่อนักเตะ ----
const modal = document.getElementById('squad-modal');
const squadBody = document.getElementById('squad-body');
const squadTeamName = document.getElementById('squad-team-name');

document.getElementById('table-body').addEventListener('click', (e)=>{
  const cell = e.target.closest('.team-clickable');
  if(!cell) return;
  const id = cell.getAttribute('data-team-id');
  const name = cell.getAttribute('data-team-name');
  openSquad(id, name);
});

document.getElementById('squad-close').addEventListener('click', closeSquad);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeSquad(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeSquad(); });

function closeSquad(){ modal.style.display = 'none'; }

async function openSquad(teamId, teamName){
  squadTeamName.textContent = teamName;
  squadBody.innerHTML = '<div class="status">กำลังโหลดรายชื่อนักเตะ...</div>';
  modal.style.display = 'flex';

  if(!teamId){
    squadBody.innerHTML = '<div class="squad-error">ไม่พบรหัสทีมสำหรับดึงรายชื่อนักเตะ</div>';
    return;
  }
  try{
    const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`);
    if(!res.ok) throw new Error("HTTP "+res.status);
    const data = await res.json();
    writeCache(`squad-${teamId}`, data.squad || []);
    renderSquad(data.squad, false);
  }catch(err){
    console.warn("โหลดรายชื่อนักเตะสดไม่สำเร็จ, ใช้ข้อมูลสำรอง:", err);
    const cached = readCache(`squad-${teamId}`);
    if(cached){
      renderSquad(cached.data, true, cacheNotice(cached));
    } else if(BACKUP_DATA?.squads?.[teamId]){
      renderSquad(BACKUP_DATA.squads[teamId], true, bundledNotice());
    } else if(FALLBACK_SQUADS[String(teamId)]){
      renderSquad(FALLBACK_SQUADS[String(teamId)], true);
    } else {
      squadBody.innerHTML = '<div class="squad-error">ไม่สามารถโหลดรายชื่อนักเตะได้ และไม่มีข้อมูลสำรองสำหรับทีมนี้<br>ลองใหม่อีกครั้ง หรือเปิดผ่าน Live Server</div>';
    }
  }
}

function renderSquad(squad, isFallback, backupNote){
  squad = squad || [];
  if(squad.length === 0){
    squadBody.innerHTML = '<div class="squad-error">ไม่มีข้อมูลนักเตะสำหรับทีมนี้</div>';
    return;
  }
  const note = backupNote ? `<div class="squad-note">${backupNote}</div>` : (isFallback ? '<div class="squad-note">⚠️ ใช้ข้อมูลสำรอง (นักเตะหลักของทีม ไม่ใช่ทั้งสโมสร)</div>' : '');
  squadBody.innerHTML = note + squad.map(p => `
    <div class="player-row">
      <span class="player-name">${p.name||'-'}</span>
      <span class="player-meta">${[p.number ? '#'+p.number : '', SQUAD_POSITION_LABELS[p.position] || p.position || '', p.nationality || ''].filter(Boolean).join(' • ')}</span>
    </div>
  `).join('');
}

load().then(()=>{
  loadScorers();
  loadMatches(Number(matchweekSelect.value));
});
