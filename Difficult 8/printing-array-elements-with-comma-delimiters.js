/*

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

*/

function printArray(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i > 0) result += ",";
    result += array[i];
  }
  return result;
}
