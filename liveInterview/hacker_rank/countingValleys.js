/*
An avid hiker keeps meticulous records of their hikes.
During the last hike that took exactly  steps, for every step it
was noted if it was an uphill, , or a downhill,  step. Hikes always
start and end at sea level, and each step up or down represents a
unit change in altitude. We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting
  with a step up from sea level and ending with a step down to sea level.

- A valley is a sequence of consecutive steps below sea level, starting with
  a step down from sea level and ending with a step up to sea level.
  Given the sequence of up and down steps during a hike, find and print the
  number of valleys walked through.

Example

steps = 8 path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. Then they climb out and up onto
a mountain 2 units high. Finally, the hiker returns to sea level and ends
the hike.

*Function Description

countingValleys has the following parameter(s):

int steps:    the number of steps on the hike
string path:  a string describing the path

Returns ->  int: the number of valleys traversed

*Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe
the path.


Sample Input:
 - 8
 - UDDDUDUU

Sample Output
 - 1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, the hike
can be drawn as:

_/\      _
   \    /
    \/\/

The hiker enters and leaves one valley.*/
/*
             *PEDAC*
P:  - all the steps are recorded
    - the steps are consecutive
      - uphill noted as 'U'. it represented a '/'
      - downhill noted as 'D' it represented a'\'
    - hicks always starts in see level. it represented as' _'
    - each step up or down represents a 1 unit change

    - a mountain is above see level
    - a valley is below see level
E:
 input -> number,  steps (string path)
 output: -> 1

 1. - input:  2, [U,D]
    - output: -> _/\_
2.  - input: 8, [D,D,U,U,U,U,D,D]
    - output: _/\      _
                 \    /
                  \/\/

D: input -> number and string
   output -> number

A: # Given the number and string
1. declare a variable for see level with a value of 0
2. declare a variable for uphill
3. declare a variable for downhill
4. declare the current level and assign it to the first char of th string
5. loop the string and
  - if current char is 'U' increment num 2 by 1
  - if current char is 'D' decrement num 2 by 1
6. compute see level against num 2 and num 3
7. return the see level
*/

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let obj = {seeLevel: 0, visitValleys: 0, belowSeeLevel: 0};
  if (steps === path.length) {
    for (let char = 0; char < steps - 1; char++ ) {
      if (path[char] === 'U') {
        obj.seeLevel++;
      } else if (path[char] === 'D') {
        obj.seeLevel--;
      }

      if ((obj.seeLevel === -1 && path[char + 1] === 'U')) {
        obj.visitValleys++;
      }
    }
  }

  return obj.visitValleys;
}
console.log(countingValleys(4, 'DDUU'));  // 1
console.log(countingValleys(8, 'UDDDUDUU'));    // 1
console.log(countingValleys(8,'DDUUUUDD'));  // 1 'D D / U U U U / D D'
console.log(countingValleys(10,'DUDDDUUDUU'));// 2 'D/ U/ D D D /U U /D /U U'
