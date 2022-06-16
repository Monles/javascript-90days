const array01 = [1, [2, 3], [4, 5]];
array01.flat();

//---------------------------------------------

const array02 = [1, 2, 3, array01];
array02.flat();

//---------------------------------------------

const array03 = [1, 2, [3, 4, [5]]];
array03.flat();

//---------------------------------------------

const array04 = [1, 2, [3, 4, [5]]];
array04.flat(2);

//---------------------------------------------

const array05 = [
  ["🤖", "👾"],
  "👻",
  "🎃",
  [
    ["🎉", "🎊"],
    ["🎈", "🎄", [[[["🎆"]]]]],
  ],
];

array05.flat(50);

//---------------------------------------------

const array06 = ["comfrey", , , , , , , , "herbs", "garlic"];
array06.flat();

//---------------------------------------------

const array07 = [
  ["🤖", "👾"],
  "👻",
  "🎃",
  [
    ["🎉", "🎊"],
    ["🎈", "🎄", [[[["🎆"]]]]],
  ],
];

const realeseArray07 = array07.flatMap((emoji) => emoji + "❤️");

//---------------------------------------------

const forwardEmail = "           bobcorn@email.com";
const backwardEmail = "newbie@email.com      ";
console.log(forwardEmail.trimStart());
console.log(backwardEmail.trimEnd());

//---------------------------------------------

yourPlayer = [
  ["level", 100],
  ["health", 70],
  ["mana", 50],
];

const obj = Object.fromEntries(yourPlayer);
Object.entries(obj);

//---------------------------------------------

try {
  true + "hi";
} catch {
  console.log("What!?");
}

try {
  bobcorn + "hi";
} catch {
  console.log("What!?");
}

try {
  newbie + "hi";
} catch (error) {
  console.log("What!?" + error);
}
