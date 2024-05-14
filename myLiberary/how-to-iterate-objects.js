
//  How to iterate over properties 
// The proper (and safe) way to iterate over properties is via a tool function. 

const obj = { first: 'Jane', last: 'Doe' };

for (const [key,value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

// Output:
// first: Jane
// last: Doe


