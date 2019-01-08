/* const squareArrow = (n) => n*n;

console.log(squareArrow(4));

const fullName = "Michel Ferry";
const getFirstName = (name) => name.split(" ")[0];
const getFirstName2 = (name) => {
  return name.split(" ")[0];
}

console.log(getFirstName(fullName));
console.log(getFirstName2(fullName)); */

const user = {
  name: "Michel",
  cities: ["Auch", "Kourou", "Nancy"],
  printPlacesLived() {
    this.cities.map( (city) => console.log(`${this.name} has lived in ${city}.`) );
  }
}

user.printPlacesLived();


const multiplier = {
  numbers: [1,5,9,4],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map((n) => n*this.multiplyBy);
  } 
}

console.log(multiplier.multiply());