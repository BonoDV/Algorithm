/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

    https://www.codewars.com/kata/57ab3c09bb994429df000a4a/javascript

*/

function twoHighest(arr) {
  let highest = null;
  let secondHighest = null;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === highest || num === secondHighest) continue;

    if (highest === null || num > highest) {
      secondHighest = highest;
      highest = num;
    } else if (secondHighest === null || num > secondHighest) {
      secondHighest = num;
    }
  }

  const result = [];
  if (highest !== null) result.push(highest);
  if (secondHighest !== null) result.push(secondHighest);

  return result;
}
