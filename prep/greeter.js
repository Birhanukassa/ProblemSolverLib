let rlsync = require('readline-sync');

let greetFirstName = rlsync.question("What is your first name? ");
let greetLastName = rlsync.question("What is your last name? ");
console.log("Hello, " + greetFirstName + ' ' +  greetLastName + '!');
