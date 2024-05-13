/* eslint-disable max-len */

/**
 * *Practice Problem 17

A UUID is a type of identifier often used to uniquely identify items,
even when some of those items were created on a different server or by a
different application. That is, without any synchronization, two or more
computer systems can create new items and label them with a UUID with
no significant risk of stepping on each other's toes. It accomplishes
this feat through massive randomization. The number of possible UUID values
is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict
is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
represented as a string.
- The value is typically broken into 5 sections in an 8-4-4-4-12
- pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.*

**A**
- creat an object that has hexadecimal values
-
*/

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return console.log(uuid);
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
