class Person {
  constructor(name="unknown", location="unknown", age=0){
    this.name = name;
    this.location = location;
    this.age = age;
  }
  getGreetings(){
    return `Hi ${this.name}!`;
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getGreetings(){
    let greetings = super.getGreetings();
    return `${greetings}, you're a student!`
  }
}

class Traveler extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreetings(){
    let location ="";
    if(!!this.homeLocation){
      location = ` I'm visiting from ${this.homeLocation}.`;
    }
    return super.getGreetings() + location;
  }
}

const me = new Traveler("Michel Ferry", 27, "Marketing");
console.log(me, me.getGreetings());