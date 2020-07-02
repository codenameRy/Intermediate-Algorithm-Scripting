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