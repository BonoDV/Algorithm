/*

Check if the elements of an array form an arithmetic progression or if the array contains a sequence of elements that form an arithmetic progression.

If the entire array forms an arithmetic sequence, the function returns true. If it's not an arithmetic progression itself but it contains at least one, return the index of the element where the first arithmetic sequence starts. If it's not one itself and it doesn't contain any, return false.

An arithmetic sequence will always consist of at least 3 numbers. If this condition is not satisfied, the function will return undefined.

The function hasArithmProg takes a single parameter, arr, and can return a boolean, a number(the index) or undefined.

An arithmetic progression is a sequence of numbers such that the difference between two consecutive terms is a constant quantity.

e.g. 1, 2, 3, 4,... constant = 1 e.g. 9, 7, 5, 3,... constant = -2

https://en.wikipedia.org/wiki/Arithmetic_progression

https://www.codewars.com/kata/57bff6f6b5e2c99387000149/javascript

*/

function hasArithmProg(arr) {
  if (arr.length < 3) return undefined;

  let numberSuma = arr[1] - arr[0];
  let count = 2;
  let startIndex = 0;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === numberSuma) {
      count++;
      if (count === 3 && startIndex !== 0) return startIndex;
    } else {
      if (count >= 3) return startIndex;
      numberSuma = arr[i] - arr[i - 1];
      count = 2;
      startIndex = i - 1;
    }
  }

  if (count === arr.length) return true;
  if (count >= 3) return startIndex;
  return false;
}
