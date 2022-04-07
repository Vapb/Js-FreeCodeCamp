// Basic JavaScript Object
let dog = {
    name : "Dog",
    numLegs : 4 
};

// Use Dot Notation to Access the Properties of an Object
console.log(dog.name, dog.numLegs)

// Create a Method on an Object
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayName : function() {
      return `This dogs name is ${dog.name}`;
    },
    sayLegs : function() {
      return `This dog has ${dog.numLegs} legs.`;
    }
};

// Make Code More Reusable with the this Keyword (Self -> this)
let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
// Define a Constructor Function
function Dog() {
    this.name = 'Name';
    this.color = 'Color';
    this.numLegs = 2;
}

// Use a Constructor to Create Objects
function Dog2() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
let hound = new Dog2();

