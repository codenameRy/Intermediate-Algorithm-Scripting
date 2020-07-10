//Challenge 1 - Sum All Numbers in a Range
/* Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.*/

//Solution 1 - Using For Loop Math.max and Math.min functions
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}


console.log(sumAll([1, 4])); //10

//Solution 2 - Using For Loop and spread operator

function sumAll2(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll2([5, 10])); //45

//Challenge 2 - Diff Two Arrays

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

//Solution 1

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//Solution 2

function diffArray2(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray2([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

//Challenge 3 - Seek and Destroy

/* Remove all elements from the initial array that are of the same value as these arguments.

Use the arguments object.*/

//Solution 1 - Spread operator, filter, and includes

function destroyer(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(destroyer([1, 2, 3, 4, 2, 3], 2, 3));

//Solution 2 - Arguments, indexOf, filter

function destroyer2(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

console.log(destroyer2([1, 2, 3, 4, 2, 3], 1, 4));

//Solution 3 - Arguments, indexOf, filter

function seekAndDestroy3(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
}

console.log(seekAndDestroy3([2, 3, 4, 6, 6, 'hello'], 2, 6))

//Challenge 4 - Wherefore art thou

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.*/

//Solution 1 

function whatIsInAName(collection, source) {
 
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
));

//Solution 2 - Filter and Every methods

function whatIsInAName2(collection, source) {

  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
console.log(whatIsInAName2(
  [
    { first: "Romeo", last: "Capulet" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
));

//Challenge 5 - Spinal Tap Case
/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Example: spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".*/

//Solution 1 - Regex, Replace, toLowerCase, Split, and Join Methods

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
console.log(spinalCase("This Is Spinal Tap"));

//Solution 2 - Regex, Split, Join, and toLowerCase Methods
function spinalCase2(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase2("This Is 2020 Jumanji"));

//Challenge 6 - Pig Latin

/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

//Solution 1 - Mathc method, Regex, and ternary statement

function translatePigLatin(str) {
let consonantRegex = /^[^aeiou]+/;
let newConsonants = str.match(consonantRegex)
return newConsonants !== null
? str
.replace(consonantRegex,"")
.concat(newConsonants)
.concat("ay")
: str.concat("way")
}

console.log(translatePigLatin("consonant"))

//Solution 2 - Replace method and Regex

function translatePigLatin2(str) {
  return str
  .replace(/^[aeiou]\w*/, "$&way")
  .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin2("algorithm"))

//Challenge 6 - Search and Replace

/* 
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".*/

//Solution 1 - indexOf and Replace methods
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }
  // Now replace the original str with the edited one.
     str = str.replace(before, after)
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//Solution 2 - Regex and substring methods

function myReplace2(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    //change after letter to uppercase if before letter is uppercase
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    //change after letter to lowercase if before letter is lowercase
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

console.log(myReplace2("This has a spellngi error", "spellngi", "spelling"))

//Challenge 7 - DNA Pairing

//Solution 1
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
console.log(pairElement("GCG"));

//Solution 2

function pairElement2(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
console.log(pairElement2("TTGAG"));

//Challenge 8 - Missing Letters

/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

//Solution 1

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");