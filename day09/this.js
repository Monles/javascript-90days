// 001

const obj = {
  name: "John",
  sing: function () {
    return "sing a song " + this.name;
  },
  singAgain: function () {
    return this.sing() + " !!!";
  },
};

obj.singAgain();

//002

function player() {
  console.log(this.name + "!");
}
const name = "bobcorn";
const obj1 = {
  name: "newbie",
  player: player,
};

const obj2 = {
  name: "newbie2",
  player: player,
};

obj2.player();
