const members = ["John", "Jane", "Mary", "Mark", "Bob"];

//Loop 1
for (let i = 0; i < members.length; i++) {
  console.log(members[i]);
}

//Loop 2
members.forEach((person) => {
  console.log(person);
});

//for of
//Iterating - arrays, strings
for (person of members) {
  console.log(person);
}

//for in
//enumerating - objects
for (person in members) {
  console.log(person);
}
