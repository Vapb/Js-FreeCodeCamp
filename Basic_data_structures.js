// Use an Array to Store a Collection of Data

let yourArray = [1,'2',true,4,5];
console.log(yourArray.length);

// Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = 1;
console.log(myArray);

// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
console.log(mixedNumbers(['IV', 5, 'six']));

// Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()
// splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array

const arr2 = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr); // return [2,5,2,1]


// Add Items Using splice()

const numbers = [10, 11, 12, 12, 15];
numbers.splice(startIndex, amountToDelete, 13, 14); // return [ 10, 11, 12, 13, 14, 15 ]

// Copy Array Items Using slice()
// slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. 

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); 
// todaysWeather => ['snow', 'sleet'] but weatherConditions still the same.

// Copy an Array with the Spread Operator

let arr3 = [1,2,3];
let arr4 = [...arr3]; // arr4 === arr3

// Combine Arrays with the Spread Operator

let arr5 = [...arr3,4,5] // return [1,2,3,4,5]

// Check For The Presence of an Element With indexOf()
// indexOf(), that allows us to quickly and easily check for the presence of an element on an array. 

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // return -1
fruits.indexOf('oranges'); // return 2
fruits.indexOf('pears'); // return 1

// Iterate Through All an Array's Items Using For Loops
// Create complex multi-dimensional arrays
// Add Key-Value Pairs to JavaScript Objects

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
foods.bananas = 13;
foods.grapes = 35
foods.strawberries = 27
console.log(foods);

// Modify an Object Nested Within an Object

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
userActivity.data.online = 45;

//  Access Property Names with Bracket Notation

userActivity["data"]["online"] = 45;

// Use the delete Keyword to Remove Object Properties

delete userActivity["id"];

// Check if an Object has a Property

users.hasOwnProperty('id');

// Iterate Through the Keys of an Object with a for...in Statement

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

for (let user in users) { // This iterates through the keys of object. This works with arrays
    console.log(user); 
}

// Generate an Array of All Object Keys with Object.keys()

Object.keys(users) // returns all users 
