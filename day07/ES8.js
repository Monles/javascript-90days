"Bobcorn".padStart(10);

"Bobcorn".padEnd(10);

//---------------------------------------------

let obj = {
  user1: "Bob",
  user2: "Corn",
  user3: "newbie",
};

//keys
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

//values
Object.values(obj).forEach((value) => {
  console.log(value);
});

//entries
Object.entries(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("user", "");
});

//---------------------------------------------
