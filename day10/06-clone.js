// let obj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// };

// let clone1 = Object.assign({}, obj);
// let clone2 = { ...obj };

// obj.c = 5;
// console.log(obj);
// console.log(clone1);
// console.log(clone2);

//------------------------------

// let obj = {
//   a: 'a',
//   b: 'b',
//   c: { deep: 'c' },
// };

// let clone1 = Object.assign({}, obj);
// let clone2 = { ...obj };

// obj.c.deep = 'meow!';
// console.log(obj);
// console.log(clone1);
// console.log(clone2);

//------------------------------
let obj = {
  a: 'a',
  b: 'b',
  c: { deep: 'c' },
};

let clone1 = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'meow!';
console.log(obj);
console.log(clone1);
console.log(clone2);
console.log(superClone);
