// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/* function lookUpProfile(name, prop) {
  // Modifica il codice solo sotto questa riga
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {  
      console.log(contacts[i][prop]);
    }
    else if (contacts[i]["firstName"] !== name) {
      console.log("No such contact");
    }
    else if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop) === false) {
      console.log("No such property");
    }
  }
  // Modifica il codice solo sopra questa riga
} */

function lookUpProfile(name, prop) {
  // Modifica il codice solo sotto questa riga
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } return "No such property";
    }

  }
  return "No such contact";
  // Modifica il codice solo sopra questa riga
}

lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");
