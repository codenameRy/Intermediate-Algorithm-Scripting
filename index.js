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

//Solution 1 - Regex, Split, Join, and toLowerCase Methods
function spinalCase2(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase2("This Is 2020 Jumanji"));