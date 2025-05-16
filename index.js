function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function teamNames() {
    const game = gameObject(); //game info data

    return  [game.home.teamName, game.away.teamName];
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey]; // access the teams(home and away)
        const players = team.players; // player info object
        if (players[playerName]) {
             return players[playerName].points; // return player points
        }
    }
    return null; // if player is not found
}
function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}

function teamColors(teamName) {
    const game = gameObject();
    
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null;
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            const numbers = [];
            for (let player in team.players) {
                numbers.push(team.players[player].number);
            }
            return numbers;
        }
    }

    return null;
}

function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if (players[playerName]) {
            return players[playerName];
        }
    }
    return null;
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0; //variable to find largest shoe
  let rebounds = 0;  //store rebounds

  for (let teamKey in game) {    //loop through each team
    const team = game[teamKey];
    const players = team.players;

    for (let playerName in players) {
      const player = players[playerName]; // player stats
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe; //update largest shoe size
        rebounds = player.rebounds; //save the player info rebounds
      }
    }
  }

  return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let topScorer = "";
    let mostPoints = 0;

    for (let teamKey in game) {
        const players = game[teamKey].players;
        for (let player in players) {
            if (players[player].points > mostPoints) {
                mostPoints = players[player].points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}

function winningTeam() {
    const game = gameObject();
    let highest = 0;
    let winner = "";

    for (let teamKey in game) {
        let total = 0;
        const team = game[teamKey];
        const players = team.players;

        for (let player in players) {
            total += players[player].points;
        }

        if (total > highest) {
            highest = total;
            winner = team.teamName;
        }
    }
    return winner;
}

function playerWithLongestName() {
    const game = gameObject();
    let longest = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;
        for (let player in players) {
            if (player.length > longest.length) {
                longest = player;
            }
        }
    }
    return longest;
}


module.exports = {
    gameObject,
    teamNames,
    numPointsScored,
    shoeSize,
    teamColors,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName
};
