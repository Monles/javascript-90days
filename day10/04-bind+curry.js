function multiply(a, b) {
  return a * b;
}

let multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(5));

let multipleByTen = multiply.bind(this, 10);
console.log(multipleByTen(5));
