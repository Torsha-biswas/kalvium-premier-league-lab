
// Progression 1 - Create a Manager array and return it

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

// Write your function here

// Call the function to create a manager array
let managerDetails = createManager(managerName, managerAge, currentTeam, trophiesWon);

// Display the manager details array
console.log(managerDetails);


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

// Progression 2 - Create a formation object and return it
var formation = [4, 4, 3];

// Write your function here
function createFormation(formationArray) {
  return {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2],
  };
}
var formation = [];

// Write your function here
function createFormation(formationArray) {
  if (formationArray.length === 0) {
    return null;
  }

  return {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2],
  };
}
// Don't edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  // do nothing
}

// Progression 3 - Filter players that debuted in ___ year
// Progression 3 - Filter players that debuted in ___ year
// Sample array of player objects
function filterByDebut(year) {
  // Assuming 'players' array is already defined
  // You can replace it with the actual data if needed

  if (!year || isNaN(year)) {
    // If year is not provided or not a valid number, return an empty array
    return [];
  }

  // Filter players based on debut year
  let filteredPlayers = players.filter(player => player.debut === year);

  return filteredPlayers;
}

// Test case 1
expect(result.length).toBe(1);
expect(result[0]).toEqual({
  name: 'David Silva',
  age: 32,
  debutYear: 2005,
  team: 'Manchester City',
  position: 'Midfielder',
  country: 'Spain',
  url: 'https://media.guim.co.uk/cf0a8b9a85d5cab6f42e5a7172a056b2a2aff541/0_560_4618_2771/500.jpg',
  awards: [
    { name: 'PFA Premier League Team of the Year', year: 2014 }
  ]
});




// Progression 4 - Filter players that play at the position _______
// Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  // Assuming 'players' array is already defined
  // You can replace it with the actual data if needed

  if (!position || typeof position !== 'string') {
    // If position is not provided or not a valid string, return an empty array
    return [];
  }

  // Convert position to lowercase for case-insensitive comparison
  let lowercasePosition = position.toLowerCase();

  // Filter players based on position
  let filteredPlayers = players.filter(player => player.position.toLowerCase() === lowercasePosition);

  return filteredPlayers;
}




// Progression 5 - Filter players that have won ______ award
// Function to filter players based on a specific award
// Define the filterByAward function
function filterByAward(awardName) {
  if (!awardName) {
    // Return empty array if no awardName is provided
    return [];
  }

  // Filter players who have won the specified award
  const filteredPlayers = players.filter(player =>
    player.awards.some(award => award.name === awardName)
  );

  return filteredPlayers;
}




// Progression 6 - Filter players that won ______ award ____ times
// Assume players array is already defined

// Function to filter players based on a specific award and number of times
function filterByAwardxTimes(awardName, noOfTimes) {
  if (!awardName || !noOfTimes || isNaN(noOfTimes) || noOfTimes <= 0) {
    // Return empty array if invalid parameters are provided
    return [];
  }

  // Filter players who have won the specified award a given number of times
  const filteredPlayers = players.filter(player =>
    player.awards.filter(award => award.name === awardName).length === noOfTimes
  );

  return filteredPlayers;
}



// Progression 7 - Filter players that won ______ award and belong to ______ country
// Assume players array is already defined

// Function to filter players based on a specific award and country
function filterByAwardxCountry(awardName, country) {
  if (!awardName || !country) {
    // Return empty array if invalid parameters are provided
    return [];
  }

  // Filter players who have won the specified award and belong to the given country
  const filteredPlayers = players.filter(player =>
    player.awards.some(award => award.name === awardName) && player.country === country
  );

  return filteredPlayers;
}



// Progression 8 - Filter players that won at least ______ awards, belong to ______ team, and are younger than ____
// Assume players array is already defined

// Function to filter players based on the number of awards, team, and age
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  if (!noOfAwards || !team || !age) {
    // Return empty array if invalid parameters are provided
    return [];
  }

  // Filter players who have won at least the specified number of awards, belong to the given team, and are younger than the specified age
  const filteredPlayers = players.filter(player =>
    player.awards.filter(award => award.name).length >= noOfAwards &&
    player.team === team &&
    player.age < age
  );

  return filteredPlayers;
}

// Progression 9 - Sort players in descending order of their age
function sortPlayersByAgeDescending(players) {
  return players.sort((a, b) => b.age - a.age);
}

// Progression 10 - Sort players belonging to _____ team in descending order of awards won
function sortPlayersByTeamAndAwardsDescending(players, team) {
  return players.filter(player => player.team === team)
                .sort((a, b) => b.awards.length - a.awards.length);
}

// Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortPlayersByAwardCountAndCountry(players, award, count, country) {
  return players.filter(player => player.awards.filter(a => a === award).length === count && player.country === country)
                .sort((a, b) => a.name.localeCompare(b.name));
}

// Challenge 2 - Sort players that are older than _____ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortPlayersByAgeAndAwards(players, age) {
  return players.filter(player => player.age > age)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(player => {
                  player.awards.sort((x, y) => y.year - x.year);
                  return player;
                });
}
