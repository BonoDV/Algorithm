/*

Consider having a cow that gives a child every year from her fourth year of life on and all her subsequent children do the same.

After n years how many cows will you have?

After n years	Cow count
0	1
1	1
3	2
4	3
10	28
Return null if n is not an integer.

Note: Assume all the cows are alive after n years.

https://www.codewars.com/kata/58311536e77f7d08de000085/train/javascript

*/


function countCows(n) {
  if (!Number.isInteger(n)) return null;
  if (n < 0) return 0;

  let ages = [1]; // One cow of age 0

  for (let year = 1; year <= n; year++) {
    let newCows = 0;

    // Cows that are 3 years old or older give birth
    for (let i = 2; i < ages.length; i++) {
      newCows += ages[i];
    }

    // Age all cows by adding the new ones at the beginning
    ages.unshift(newCows);
  }

  return ages.reduce((a, b) => a + b, 0);
}