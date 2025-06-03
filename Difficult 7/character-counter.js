/*

You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.

https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

*/

function validateWord(s) {
  s = s.toLowerCase();
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i])+1);
    }  
  }
  
  let values = Array.from(map.values());
  for (let i = 1; i < values.length; i++) {
    if (values[i] !== values[0]) {
      return false;
    }
  }
  return true;
  
}