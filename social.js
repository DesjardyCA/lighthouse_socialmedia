var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them
function listAll() {
  for (const elem in data) {
    var person = data[elem];

    console.log("Name: ", person.name, "\n  Follows: ");

    for (const elem in person.follows) {
      var follows = find(person.follows[elem]);
      console.log("    -", follows.name, "\n    Who are followed by: ");

      for (const elem in follows.follows) {
        var follower = find(follows.follows[elem]);
        console.log("      *", follower.name);
      }
    }
  }
}

listAll();

// function to find via uid
function find(id) {
  return data[id];
}
// Identify who follows the most people
function whoFollowsMost() {}
// Identify who has the most followers
function whoIsFollowedMost() {}
// Identify who has the most followers over 30
function over30MostFollowers() {}
// Identify who follows the most people over 30
function whoFollowsMostOver30() {}
// List those who follow someone that doesn't follow them back
function noFollowBack() {}
// List everyone and their reach (sum of # of followers and # of followers of followers)
function listReach() {}