/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

https://www.codewars.com/kata/56d9292cc11bcc3629000533/train/javascript

*/
function testit(s) {
  let result = "";
  for (let i = 0; i < s.length; i += 2) {
    if (i + 1 < s.length) {
      const avg = Math.floor((s.charCodeAt(i) + s.charCodeAt(i + 1)) / 2);
      result += String.fromCharCode(avg);
    } else {
      result += s[i];
    }
  }
  return result;
}
