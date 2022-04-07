// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = ((celsius * 9/5) + 32);
    return fahrenheit;
}

// Reverse a String
function reverseString(str) {
    let reversedString = "";
    for (let i=str.length-1; i != -1; i--) {
      reversedString += str[i];
    }
    return reversedString;
}

// Factorialize a Number
function factorialize(num) {
    let result = 1;
    while (num >= 1) {
      result *= num;
      num -= 1;
    }
    return result;
}
console.log(factorialize(5));

function factorialize(num){
    if (num <= 1){
      return 1    
    }
    return num * factorialize(num - 1)
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
    let largestWord = 0;
    let wordCount = 0;
    for (let i=0;i<str.length ;i++){
      if (str[i] != " "){
        wordCount++;
      }
      else {
        if (largestWord < wordCount){
          largestWord = wordCount;
        }
        wordCount = 0;
      }
    }
    if (largestWord < wordCount){
          largestWord = wordCount;
    }
    return largestWord;
}

function findLongestWordLength(str){
    let wordsArray = str.split(" ");
    let longestWord = 0;
  
    for (let word of wordsArray){
      let wordLen = word.length;
      
      if (wordLen > longestWord) {
        longestWord = wordLen;
      }
    }
    return longestWord;
}

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let result = [];
    for (let ar of arr){
      result.push(Math.max(...ar));
    }
    return result;
}  

function largestOfFour(arr) {
    return arr.map(x => Math.max(...x));
}

// Confirm the Ending
function confirmEnding(str, target) {
    let targetLen = target.length - 1;
    let stopCondition = (str.length - 1) - target.length;
    
    for (let i = str.length-1; i != stopCondition; i--){
      if (str[i] != target[targetLen]){
        return false
      }
  
      targetLen--;
    }
    return true
}

function confirmEnding(str, target) {
  return str.slice(str.length-target.length) == target
}

function confirmEnding(str, target) {
    let regex = new RegExp(target + "$");
    return regex.test(str)
}

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let result = "";
    for (let i=num; i > 0; i--) {
      result += str;
    }
    return result;
}

// Truncate a String
function truncateString(str, num) {
    if (str.length > num){
      return str.slice(0,num) + '...';
    }
    return str;
}

// Finders Keepers
function findElement(arr, func) {
    for (let element of arr) {
        if (func(element)) {
            return element;
        }
    }
    return
}

function findElement(arr, func) {
    return arr.find(func);
}

function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

// Boo who
function booWho(bool) {
    return typeof bool == "boolean";
}

// Title Case a Sentence
function titleCase(str) {
    let lowerStr = str.toLowerCase();
    let result = [];
    for (let word of lowerStr.split(" ")){
      result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
}

function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val[0], val[0].toUpperCase()))
      .join(" ");
}

// Slice and Splice
function frankenSplice(arr2, arr1, n) {
    return arr1.slice(0,n).concat(arr2,arr1.slice(n));
}

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

// Falsy Bouncer
function bouncer(arr) {
    let result = [];
    for (let val of arr) {
      if (Boolean(val)){
        result.push(val)
      }
    }
    return result
}

function bouncer(arr) {
    return arr.filter(Boolean);
}

// Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num); 
}

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

// Mutations
function mutation(arr) {
  let test = arr[0].toLowerCase();
  let target = arr[1].toLowerCase();
  for (let i=0; i < target.length; i++){
    if (test.indexOf(target[i]) < 0){
      return false
    }
  }
  return true;
}
 
// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let result = [];
  let shard = []
  let helper = 1

  for (let i =0; i < arr.length; i++){
    if (helper == size){
      shard.push(arr[i])
      result.push(shard)
      shard = []
      helper = 1
    }
    else{
      shard.push(arr[i])
      helper ++;
    }
  }
  if (shard.length != 0){result.push(shard)}
  return result;
}


function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}