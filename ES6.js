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