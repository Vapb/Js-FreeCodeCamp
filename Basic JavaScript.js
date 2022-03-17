// Line Coment

/*
Coments
Coments
*/


// Variables

var a = 1;
let b = 2;
const C = 3;

// Operations

a += 1;
b -= 2;
C *= 3;
a /= 2;

// String 

const myStr1 = "I am a \"double quoted\" string inside \"double quotes\"."; 
const myStr2 = 'I am a "double quoted" string inside "double quotes".'; 

const coolString = "Victor Burgardt"
let len = coolString.length; 
let firstLetter = coolString[0];
let lastLetter = coolString[coolString.length - 1];

// Array
// Strings dont work as arrays

const myArray = [18, 64, 99];
myArray[0] = 45;
myArray.push(["dog", 3]);
myArray.pop();
myArray.shift(); // remove to the start
myArray.unshift(["Paul", 35]); // Add to the start
myArray.concat(["vic"]);


// if , else if, else

// Functions
// Variables which are declared without the let or const keywords are automatically 
// created in the global scope.

function reusableFunction() {
    console.log("Hi World");
}

//or 

const reusableFunction = function() {
  console.log("Hi World");
}

//or 

const reusableFunction = () => console.log("Hi World");

reusableFunction()

function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1,2)

function timesFive(x) {
  return x * 5
}
console.log(timesFive(2))

// equality ==, strict equality ===
// != , !==
// &&  -> and , || -> or

console.log(typeof true)

// Switch

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    console.log("Default");
    break;
}

switch(val) {
  case "a1":
  case "a2":
    console.log("As");
    break;
  case "b":
    console.log("Bs");
    break;
}

function chainToSwitch(val) {
  let answer = "";

  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);

globalCount = 0;
court = ['J', 'Q', 'K', 'A'];
function countingCards(card) {
  if (card > 1 && card < 7) {
    count += 1;
  }
  else if (card == 10 || court.includes(card)) {
    count -= 1;
  }
  
  if (count > 0) {
    return count + " Bet"
  }
  else {
    return count + " Hold"
  }
}

// Object

const myDog = {
  "name": "dogName",
  "legs": 4,
  "friends": ["A","B","C"],
  "tails": 0
};

console.log(testObj.name);
console.log(testObj['name']);
myDog["name"] = "Hunter";
myDog["bark"] = "woof";
delete myDog.tails;
myDog.hasOwnProperty("name");


function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");


// Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }
  else if (prop == "tracks"){
    if (records[id][prop] == undefined) { 
      records[id][prop] = [];
    }

    if (value != "") {
      records[id][prop].push(value);
    }
  }
  if (value == "") {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Loops

let i = 5;
while (i >= 0){
  console.log(i);
  i--;
}

/*Syntax for (a; b; c) where
 a is initialization statement,
b is the condition statement,
c is final expression
 */

for (let i = 5; i >= 0; i--){
  console.log(i);
}

let j = 0;
do {
  myArray.push(j);
  j++;
} while (j <= 5);
 
// Recursion
function sum(arr, n) {
  if (n == 0){
    return 0
  }
  else{
    return arr[n - 1] + sum(arr, n-1);
  }
}
sum([2, 3, 4, 5], 3);

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}



function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

//random number
Math.random() // range 0-1
Math.floor() // Turn into int

// String to int
const a = parseInt("007");

// Conditional (Ternary) Operator
/* The syntax is a ? b : c, where 
a is the condition,
b is the code to run when the condition returns true,
c is the code to run when the condition returns false.
*/

function checkEqual(a, b) {
  /*
  if (a == b){
    return "Equal";
  }
  else {
    return "Not Equal"
  }
  */
  return a == b ? "Equal" : "Not Equal"; 
}

function checkSign(num) {
  /* if (num > 0) {
    return "postive";
  }
  else if (num < 0) {
    return "negative"
  }
  else {
    return "zero"
  } */

  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
}

