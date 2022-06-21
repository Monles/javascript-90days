const wizard = {
  name: 'Merlin',
  health: 50,
  heal() {
    return (this.health = 50);
  },
};

const archer = {
  name: 'Bobcorn',
  health: 30,
};

console.log('1', archer);
wizard.heal.call(archer);
console.log('2', archer);
