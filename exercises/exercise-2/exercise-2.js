let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// 1. Find all students in Gryffindor
//write a program that will take the `hogwarts` array as input 
//and return an array of objects that only contain the firstName, lastName, and house of each student.
// Use array destructuring to extract the values you need out of the array.
// Use the `map` method to iterate over the array and return an array of objects.
// Use the `if` statement to check if the student is in Gryffindor.
// Use the `console.log` statement to print the firstName, lastName, and house of each student.
function studentInfo(array) {
  array.map((info) => {
    const { firstName, lastName, house } = info;
    if (house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}


// 2. write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
// Use the `map` method to iterate over the array and return an array of objects.
// Use the `console.log` statement to print the firstName, lastName, and pet of each student.
function findTeachersWithPets(array) {
  array.map((info) => {
    const { firstName, lastName, pet, occupation } = info;
    if (pet !== null && occupation === "Teacher") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log(findTeachersWithPets(hogwarts));

