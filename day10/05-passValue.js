const obj1 = { name: 'Bobcorn', password: '456' };
const obj2 = obj1;

obj2.password = '123';

console.log(obj1);
console.log(obj2);
