/*

Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!

parameter n is 1 to 10
newline terminates every line (including the last)
don't forget the blank lines between the verses

https://www.codewars.com/kata/5838e2978bbc04b7cd000008/train/javascript

*/

function tenGreenBottles(n) {
  let result = '';
  for (let i = n; i >= 1; i--) {
    if (i === 10) {
      result += "Ten green bottles hanging on the wall,\n" +
                "Ten green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be nine green bottles hanging on the wall.\n\n";
    } else if (i === 9) {
      result += "Nine green bottles hanging on the wall,\n" +
                "Nine green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be eight green bottles hanging on the wall.\n\n";
    } else if (i === 8) {
      result += "Eight green bottles hanging on the wall,\n" +
                "Eight green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be seven green bottles hanging on the wall.\n\n";
    } else if (i === 7) {
      result += "Seven green bottles hanging on the wall,\n" +
                "Seven green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be six green bottles hanging on the wall.\n\n";
    } else if (i === 6) {
      result += "Six green bottles hanging on the wall,\n" +
                "Six green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be five green bottles hanging on the wall.\n\n";
    } else if (i === 5) {
      result += "Five green bottles hanging on the wall,\n" +
                "Five green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be four green bottles hanging on the wall.\n\n";
    } else if (i === 4) {
      result += "Four green bottles hanging on the wall,\n" +
                "Four green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be three green bottles hanging on the wall.\n\n";
    } else if (i === 3) {
      result += "Three green bottles hanging on the wall,\n" +
                "Three green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be two green bottles hanging on the wall.\n\n";
    } else if (i === 2) {
      result += "Two green bottles hanging on the wall,\n" +
                "Two green bottles hanging on the wall,\n" +
                "And if one green bottle should accidentally fall,\n" +
                "There'll be one green bottle hanging on the wall.\n\n";
    } else if (i === 1) {
      result += "One green bottle hanging on the wall,\n" +
                "One green bottle hanging on the wall,\n" +
                "If that one green bottle should accidentally fall,\n" +
                "There'll be no green bottles hanging on the wall.\n";
    }
  }
  return result;
}