






let rlsync = require('readline-sync');

let age = rlsync.question("How old are you ? ");

console.log(`You are ${age} years old.`);

// console.log(`In 10 years, you will be ${Number(10) + Number(age)}, years old.`);
// console.log(`In 20 years, you will be ${Number(20) + Number(age)} years old.`);
// console.log(`In 30 years, you will be ${Number(30) + Number(age)} years old.`);
// console.log(`In 40 years, you will be ${Number(40) + Number(age)} years old.`);

//let addedYears = Number(" ");
age = Number(age);
for (let index = 10; index < 40; index += 10) {
    console.log(`In ${index} years, you will be ${age + index} years old.`);

    
}


