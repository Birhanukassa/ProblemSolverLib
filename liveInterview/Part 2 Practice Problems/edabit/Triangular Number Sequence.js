
// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15

// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

// Examples
  // triangle(1) ➞ 1
  // triangle(6) ➞ 21
  // triangle(215) ➞ 23220

// Notes
// Check the Resources for info on triangular number sequence.


/*
rules
 - explicit:
   - input: number 
   - output: triangle pattern 
   - 
 - ds: string, number 

*/



// const triangle = n => n * (n + 1) / 2;

function triangle(n) {
	var count = 0;
	for(var num =0; num <= n; num++){
		count = count + num;
	}
	return count
}


console.log(triangle(6)); 

/*

0 
0 + 1
0 + 1 + 2 
0 + 1 + 2 + 3 
0 + 1 + 2 + 3 + 4
0 + 1 + 2 + 3 + 4 + 5
0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

*/