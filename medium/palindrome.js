/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  const lowerStr = str.toLowerCase();

  // Compare the string with its reverse
  const reversedStr = lowerStr.split('').reverse().join('');

  return lowerStr === reversedStr;
}

module.exports = isPalindrome;


console.log(isPalindrome('Nan')); 
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello')); 
console.log(isPalindrome('Nitin'));
