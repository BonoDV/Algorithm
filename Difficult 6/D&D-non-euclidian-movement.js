/*

Context
In Dungeons and Dragons, a tabletop roleplaying game, movement is limited in combat. Characters can only move a set amount of distance per turn, meaning the distance you travel is very important.

In the 5th edition of the rulebook, the board is commonly organized into a grid, but for ease of counting, movement is non-euclidian. Each square is 5 ft, and moving diagonally counts the same as moving in a cardinal direction.

+------------------------+
| 10 | 10 | 10 | 10 | 10 |
+------------------------+
| 10 |  5 |  5 |  5 | 10 |
+------------------------+
| 10 |  5 | :) |  5 | 10 |
+------------------------+
| 10 |  5 |  5 |  5 | 10 |
+------------------------+
| 10 | 10 | 10 | 10 | 10 |
+------------------------+
Distance of each grid cell from the player, in feet
Your task
Create an algorithm to calculate the distance of a movement path. You will be provided with the path as a series of absolute grid points (x, y, z). Take in to account both horizontal (x, y) as well as vertical (z) movement. Vertical movement is governed by the same rules, for the sake of simplicity.

https://www.codewars.com/kata/60ca2ce44875c5004cda5c74/javascript

*/

function calcDistance(path) {
  let total = 0;

  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];

    const dx = Math.abs(a[0] - b[0]);
    const dy = Math.abs(a[1] - b[1]);
    const dz = Math.abs(a[2] - b[2]);

    total += Math.max(dx, dy, dz) * 5;
  }

  return total;
}

console.log(
  calcDistance([
    [0, 0, 0],
    [4, 0, 0],
    [0, 2, 0],
    [0, 0, 0],
  ])
);
