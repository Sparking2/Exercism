//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function updateValue(map, team, matchResult){
 
  if(map === undefined) throw new Error('Forgot to send map');
  if(team === undefined) throw new Error('Forgot to send team');
  if(matchResult === undefined) throw new Error('Forgot to send points');
  
  if(!map.has(team)){
    map.set(team,{matchsPlayed: 0, wins: 0, loses: 0, draws: 0, points: 0});
  }

  const current = map.get(team);

  switch(matchResult){
    case 'win':
      current.wins += 1;
      current.points += 3;
      break;
    case 'loss':
      current.loses += 1;
      break;
    case 'draw':
      current.draws += 1;
      current.points += 1;
      break;
    default:
      throw new Error('Invalid match result');
  }
  current.matchsPlayed += 1;
  
  map.set(team, current);
}

export const tournamentTally = (input) => {
    let result = 'Team                           | MP |  W |  D |  L |  P';
  
    if(input === '') return result;
  
    const teams = new Map();

    const matches = input.split('\n');

    for(let i = 0; i < matches.length; ++i){
      const m = matches[i];

      const data = m.split(';');

      const team1 = data[0];
      const team2 = data[1];
      const matchResult = data[2];

      if(matchResult === 'win'){
        updateValue(teams, team1, 'win');
        updateValue(teams, team2, 'loss');
      } else if(matchResult === 'draw'){
        updateValue(teams, team1, 'draw');
        updateValue(teams, team2, 'draw');
      } else if(matchResult === 'loss'){
        updateValue(teams, team1, 'loss');
        updateValue(teams, team2, 'win');
      }
    
    }

    const teamsArray = [...teams].sort( (a,b) => {

      if(a[1].points !== b[1].points){
        return b[1].points - a[1].points;
      }

      return a[0].localeCompare(b[0]);
    });

    for(let i = 0; i < teamsArray.length; i++){
      const t = teamsArray[i];
      const teamName = t[0];
      const teamData = t[1];
      const name = teamName.padEnd(30);
      const mp = String(teamData.matchsPlayed).padStart(2);
      const w = String(teamData.wins).padStart(2);
      const d = String(teamData.draws).padStart(2);
      const l = String(teamData.loses).padStart(2);
      const p = String(teamData.points).padStart(2);

      result += `\n${name} | ${mp} | ${w} | ${d} | ${l} | ${p}`;
    }
  
    return result;
};
