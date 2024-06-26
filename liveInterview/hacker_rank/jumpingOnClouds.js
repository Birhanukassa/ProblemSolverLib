/* eslint-disable max-len */
/*
There is a new mobile game that starts with consecutively numbered clouds. Some
of the clouds are thunderheads and others are cumulus. The player can jump on
any cumulus cloud having a number that is equal to the number of the current
cloud plus  or . The player must avoid the thunderheads. Determine the minimum
number of jumps it will take to jump from the starting position to the last cloud.
It is always possible to win the game.

For each game, you will get an array of clouds numbered  if they are safe or  if they
must be avoided.

* Example
c = [0,1,0,0,0,1,0]

Index the array from 0.... 6.
The number on each cloud is its index in the list so the player must avoid
the clouds at indices 1 and 5. They could follow these two paths:
0 -> 2 -> 4 -> 6 or . 0 -> 2 -> 3 -> 4 -> 6.
The first path takes 3 jumps
while the second takes 1. Return 3.

* Function Description

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):
 - int c[n]: an array of binary integers

* Returns
 - int: the minimum number of jumps required

* Input Format
The first line contains an integer n, the total number of clouds. The second line contains n space-separated
binary integers describing clouds c[i] where .
* 0 <= i < n
* Constraints
* - 2 <= n <= 100
* - c[i] E {0, 1}
* - c[0] = c[n - 1] = 0

* Output Format
Print the minimum number of jumps needed to win the game.

* Sample Input 0
* 7
* 0 0 1 0 0 1 0

* Sample Output 0
* 4

* Explanation 0:
 0 0 1 0 0 1 0 --> 4
The player must avoid c[2] and c[5] . The game can be won with a minimum of 4 jumps:

* Sample Input 1
6
0 0 0 0 1 0

* Sample Output 1
3

!PEDAC
* P
- there are clouds that represented as thunderheads(1) & cumulus (0)
- jumping from top of the cloud top down
- Rules:
  - the clouds can be skipped by 1 or 2
  - thunderheads must be avoided
  - it should play all possibles jumps & select the shortest path and return it
* E
-  0 0 1 0 0 1 0 --> 4
-  0 0 0 0 1 0   --> 3
-  0 1 0 0 0 0   --> 3
- [0,1,0,0,0,1,0] -> 3

* D
input:
 1. integer
 2. array
output:
1. integer

* A
#  Given the integer and array
1. declare jump variable and assign it by 0.
2. loop the ele and move to the next based on the next ele
   - if the next ele is 0, check if the next ele of current ele.
     - if the ele is 0 arrive there.
   - else arrive the next ele
3. increment the jump by 1
4. return num 1
 */

function jumpingOnClouds(c) {
  let jump = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] === 0) {
      jump++;
      i += 1;
    } else {
      jump++;
    }
  }
  return console.log(jump);
}

jumpingOnClouds([0,0,1,0,0,1,0]);  // 4
jumpingOnClouds([0,0,0,0,1,0]);    // 3
jumpingOnClouds([0,0,1,0,0,0,0]);  // 4
jumpingOnClouds( [0,1,0,0,0,1,0]); // 3