/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0];  // Initialize max with the first element of the array

    for (let i = 1; i < numbers.length; i++) { 
        if (numbers[i] > max) {  
            max = numbers[i];  
        }
    }

    return max;  
}

console.log(findLargestElement([3, 9, 2, 11, 1]));  

module.exports = findLargestElement;
