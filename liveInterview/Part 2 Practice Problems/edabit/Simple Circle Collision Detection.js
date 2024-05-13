/*



# Simple Circle Collision Detection // Edabit

---
Create a function that returns `true` if the given circular areas are intersecting, otherwise return `false`. The circles are given as two arrays containing the values in the following order:

1.  Radius of the circle.
2.  Center position on the x-axis.
3.  Center position on the y-axis.

### Examples

```
isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
```

### Notes

-   You can expect useable input and positive radii.
-   The given coordinates are the centers of the circles.
-   We are looking for intersecting areas, not intersection outlines.
-   Check the **Resources** tab for help.

Rules
  - Explicit 
    - input: array 
    - output: boolean 
    - 








*/


function isCircleCollision(c1,c2){
  return (c1[0] + c2[0] > Math.hypot(c2[2] - c1[2], c2[1] - c1[1]));
}


console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]));   // ➞ false
console.log(isCircleCollision([10, 0, 0], [5, 0, 0]))     // true
console.log(isCircleCollision([1, 0, 0], [1, 0, 0]))      // true
console.log(isCircleCollision([5, 0, 0], [5, 10, 10]))    // false
