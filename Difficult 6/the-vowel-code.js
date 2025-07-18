/*

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

https://www.codewars.com/kata/53697be005f803751e0015aa/javascript

*/


function encode(string) {
  let result = "";
  const map = new Map([
    ["a", 1],
    ["e", 2],
    ["i", 3],
    ["o", 4],
    ["u", 5],
  ]);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      result += "1";
    } else if (string[i] === "e") {
      result += "2";
    } else if (string[i] === "i") {
      result += "3";
    } else if (string[i] === "o") {
      result += "4";
    } else if (string[i] === "u") {
      result += "5";
    } else {
      result += string[i];
    }
  }
  return result;
}

function decode(string) {
  let result = "";
  const map = new Map([
    ["a", 1],
    ["e", 2],
    ["i", 3],
    ["o", 4],
    ["u", 5],
  ]);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      result += "a";
    } else if (string[i] === "2") {
      result += "e";
    } else if (string[i] === "3") {
      result += "i";
    } else if (string[i] === "4") {
      result += "o";
    } else if (string[i] === "5") {
      result += "u";
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(encode("This is an encoding test."));
console.log(decode("This is an encoding test."));
