const wizard = {
  name: 'Merlin',
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: 'Bobcorn',
  health: 30,
};

console.log('1', archer);
wizard.heal.apply(archer, [100, 30]);
console.log('2', archer);
