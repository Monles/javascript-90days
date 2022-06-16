//closure

const first = () => {
  const greet = "Hi";
  const second = () => {
    const name = "bobcorn";
    console.log(greet + " " + name);
  };
  return second;
};

const newFunc = first();
newFunc();

//-----------------------------------------------------

//curry
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//-----------------------------------------------------

//compose
const compose = (a, b) => (x) => a(b(x));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//-----------------------------------------------------

//avoiding side effects
