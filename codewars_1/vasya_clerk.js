/*
Vasya - Clerk
295145287% of 6,27214,401 of 48,705AlexIsHappy5 Issues Reported
JavaScript

The new "Avengers" movie has just been released! There are a lot of people at
the cinema box office standing in a huge line. Each of them has a single 100,
50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every
single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has
no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with
the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money
to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills
to give 75 dollars of change (you can't make two bills of 25 from one of 50)

PEDAC
P-E-D
A - declare & save the values of available changes of $ 25, $50 and $100.
  - set if statement of any of changes received;
  - increment the received changes by 1.
  - decrement the 25 and 50 values based on the amount required changes
  - if

*/

function tickets(peopleInLine) {
  let bank = {100: 0, 50: 0, 25: 0};
  for (let person = 0; person < peopleInLine.length; person++) {
    if (peopleInLine[person] === 25) bank['25']++;
    if (peopleInLine[person] === 50) {
      bank['25']--;
      bank['50']++;
    } else if (peopleInLine[person] === 100) {
      bank['100']++;
      bank['25']--;
      if (bank['50'] > 0) {
        bank['50']--;
      } else {
        bank['25'] -= 2;
      }
    }
  }
  if (bank['25'] < 0 || bank['50'] < 0) return 'NO';
  return  'YES';
}

console.log(tickets([25,50,25,100,25,50,25,100,25,25,50,100,25,50,50,25]));
console.log(tickets([25, 25, 50, 50])); // => YES
console.log(tickets([25, 100]));  // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 5
