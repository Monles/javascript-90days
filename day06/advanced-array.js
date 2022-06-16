//Advanced Arrays
const array = [1, 2, 30, 50];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);

//-----------------------------------------------------

//map
const mapArray = array.map((num) => {
  return num * 2;
});

console.log("map", mapArray);

//-----------------------------------------------------

//filter
const filterArray = array.filter((num) => num > 5);
console.log("filter", filterArray);

//-----------------------------------------------------

//reduce - 01
const reduceArray = array.reduce((acc, num) => {
  return acc + num;
});
console.log("reduce", reduceArray);

//reduce - 02
const reduceArray02 = array.reduce((acc, num) => {
  return acc + num;
}, 5);
console.log("reduce", reduceArray02);
