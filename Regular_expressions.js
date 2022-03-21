// Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result); // return True

// Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Dog or cat or bird or fish
let result2 = petRegex.test(petString);
console.log(result2); // return True

// Ignore Case While Matching

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Accepts FreecodeCamp, FreeCodecamp, FreeCOdeCamp, FrEeCoDeCamp
let result3 = fccRegex.test(myString);

// Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex);
console.log(result4);

// Find More Than the First Match

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
let x = testStr.match(ourRegex);
console.log(x); //returns the value ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result5 = twinkleStar.match(starRegex); 
console.log(result5); // returns [Twinkle, twinkle]

// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // fun, run, gun. tun ...
let result6 = unRegex.test(exampleStr);
console.log(result6);

// Match Single Character with Multiple Possibilities

let bgRegex = /b[aiu]g/; // matches with bag, big, bug

// Match Letters of the Alphabet

let bgRegex2 = /[a-e]at/; // matches with the range a -> e + at = aat, bat, cat, dat, eat

// Match Numbers and Letters of the Alphabet

let bgRegex3 = /[h-s2-6]/; // matches with range h-s and 2-6.

// Match Single Characters Not Specified

let bgRegex4 = /[^aeiou0-9]/; // not matches with vowels or numbers

// Match Characters that Occur One or More Times

let bgRegex5 = /s+/; // matches with s, ss, sss ...

// Match Characters that Occur Zero or More Times

let bgRegex6 = /go*/; // matches gooo, goo , g  "o" has to appear zero or more times

// Find Characters with Lazy Matching
// a greedy match finds the longest possible part of a string 
// a lazy match, which finds the smallest possible part of the string 

let text = "<h1>Winter is coming</h1>";
let myRegex2 = /<[a-z0-9]*?>/;  // If not lazy (?) it would return whole string 
let result7 = text.match(myRegex); // return <h1>

// Match Beginning String Patterns

let bgRegex7 = /^go/; // matches strings that begin with "go"

// Match Ending String Patterns

let bgRegex8 = /go$/; // matches strings that ends with "go"

// Match All Letters and Numbers

let bgRegex9 = /\w/; // is equal to [A-Za-z0-9_]

// Match Everything But Letters and Numbers

let bgRegex10 = /\W/; // is equal to [^A-Za-z0-9_]

// Match All Numbers

let bgRegex11 = /\d/; // is equal to [0-9]

// Match All Non-Numbers

let bgRegex12 = /\D/ // is equal to [^0-9]

//Restrict Possible Usernames
/* 
- Usernames can only use alpha-numeric characters.
- The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
- Username letters can be lowercase and uppercase.
- Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters */

let userCheck = /^\D[a-z]+\d*$|^[a-z]\d\d$/i  ;

// Match Whitespace

let bgRegex13 = /\s/ // matches white spaces

// Match Non-Whitespace Characters

let bgRegex14 = /\S/ // matches non white spaces

// Specify Upper and Lower Number of Matches

let bgRegex15 = /Oh{3,5}\sno/ // matches with ohhh no, ohhhh no, ohhhhh no

// Specify Only the Lower Number of Matches

let bgRegex16 = /Haz{4,}ah/  // with no upper limit

// Specify Exact Number of Matches

let bgRegex17 = /Tim{4}ber/


