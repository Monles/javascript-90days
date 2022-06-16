//reference type
var obj1 = { value: 20 };
var obj2 = obj1;
var obj3 = { value: 20 };

//-----------------------------------------------------

//context

//-----------------------------------------------------

//instantiation
class player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`${this.name} is a  ${this.type}`);
  }
}

class assassin extends player {
  constructor(name, type) {
    super(name, type);
    console.log("assassin", this);
  }
  play() {
    console.log(`${this.name}  is a  ${this.type}  "and is playing`);
  }
}
const assassin01 = new assassin("bobcorn", "KindaAssassin");
const assassin02 = new assassin("newbie", "WannaBeAssassin");
