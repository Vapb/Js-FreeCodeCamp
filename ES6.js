// Compare Scopes of the var and let Keywords
/*  When you declare a variable with the let keyword inside a block, statement, or expression,
its scope is limited to that block, statement, or expression. */

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
// Mutate an Array Declared with const
/* it is important to understand that objects (including arrays and functions)
assigned to a variable using const are still mutable.
Using the const declaration only prevents reassignment of the variable identifier. */

const s = [5, 7, 2];
function editInPlace(s) {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s
}
console.log(editInPlace(s));

// Prevent Object Mutation
// JavaScript provides a function Object.freeze to prevent data mutation.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
      MATH_CONSTANTS.PI = 99;
    }
    catch(ex) {
      console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions

//const myFunc = function() {
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
  
// Write Arrow Functions with Parameters
  
/*  var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
    }; */

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
  
// Set Default Parameters for Your Functions

const increment = function(number, value = 1) {
    return number + value;
}

// Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  // reduce (acumulador, valorAtual, index, array), 0
  return args.reduce((a, b) => a + b, 0);
}

// Use the Spread Operator to Evaluate Arrays In-Place 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects

const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday2, high: highToday2}} = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
[a,b] = [b,a];

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}*/

const profileUpdate = ({ name, age, nationality, location }) => {}

// Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  return failureItems;
}
const failuresList = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand

/*
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
*/

const createPerson = (name, age, gender) => {
  return{name, age, gender}
};

// Write Concise Declarative Functions with ES6

/*
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
    return "HEY"
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

*/

const bicycle = {
  gear : 2,
  setGear(newGear) {
    this.gear = newGear; 
  }
}

// Use class Syntax to Define a Constructor Function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


// Use export to Share a Code Block

const add = (x, y) => {
  return x + y;
}

export { add };

// Reuse JavaScript Code Using import

import {add} from "./math_functions.js";
console.log(add(2,3));

// Use * to Import Everything from a File

import * as myMathModule from "./math_functions.js";
myMathModule.add(2,3);

// Create an Export Fallback with export default

export default function subtract(x, y) {
  return x - y;
}

// Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});

// Handle a Fulfilled Promise with then

makeServerRequest.then(result => {
  console.log(result)
});

// Handle a Rejected Promise with catch

makeServerRequest.catch(error => {
  console.log(error)
});