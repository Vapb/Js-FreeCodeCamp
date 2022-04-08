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

//Extend Constructors to Receive Arguments
function Dog3(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog3('doggy','red');
terrier.name = "x"
console.log(terrier)

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);
console.log(myHouse instanceof House)

// Understand Own Properties
for (let property in House){
    console.log(property);
}

//Use Prototype Properties to Reduce Duplicate Code
// A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird.
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 1;

console.log(beagle.numLegs);

//Iterate Over All Properties
// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
let ownProps = [];
let prototypeProps = [];

for (let p in beagle){
  if (beagle.hasOwnProperty(p)){
    ownProps.push(p);
  } else {
    prototypeProps.push(p);
  }
}
console.log(ownProps)
console.log(prototypeProps)

//Understand the Constructor Property
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog){
      return true
    } else {
      return false
    }
  }

//Change the Prototype to a New Object
// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:
Dog.prototype = {
    numLegs : 4,
    eat : function() {console.log('EAT')},
    describe : function() {console.log('Describe')},
  };

//Remember to Set the Constructor Property when Changing the Prototype
// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
Dog.prototype = {
    constructor: Dog,
    numLegs : 4,
    eat : function() {console.log('EAT')},
    describe : function() {console.log('Describe')},
  };

//Understand Where an Object’s Prototype Comes From
Dog.prototype.isPrototypeOf(beagle);

//Understand the Prototype Chain

//Use Inheritance So You Don't Repeat Yourself

//Inherit Behaviors from a Supertype

//Set the Child's Prototype to an Instance of the Parent

//Reset an Inherited Constructor Property

//Add Methods After Inheritance

//Override Inherited Methods

//Use a Mixin to Add Common Behavior Between Unrelated Objects

//Use Closure to Protect Properties Within an Object from Being Modified Externally

//Understand the Immediately Invoked Function Expression (IIFE)

//Use an IIFE to Create a Module

