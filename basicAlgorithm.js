// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = ((celsius * 9/5) + 32);
    return fahrenheit;
}
console.log(convertToF(30));

// Reverse a String
function reverseString(str) {
    let reversedString = "";
    for (let i=str.length-1; i != -1; i--) {
      reversedString += str[i];
    }
    return reversedString;
}
console.log(reverseString("hello"));
console.log("hello".split("").reverse().join(""))

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
  