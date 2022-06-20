//nullish coalescing operator
let pet_puppy = {
  bobby: {
    species: "German Shepherd",
    age: 2,
    height: 25,
    weight: 25,
  },
};

let pet_kitten = {
  cocoa: {
    species: "Siamese",
    age: 1,
    height: 10,
    weight: 8,
  },
};

let age01 = pet_puppy?.bobby?.age || "unknown";
console.log(age01);

let age02 = pet_kitten?.bobby?.age || "unknown";
console.log(age02);
