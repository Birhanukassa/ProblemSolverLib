/*
5 kyu
Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be
included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
*/

const scramble = (text, word) => {
  let r = false;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (word[i] === text[j]) {
        let a = text.split('').pop();
        //text = text.join('');
        console.log(text);
      }
      r = true;
    }
  }
  //console.log(r);

  return r;
};
//Examples
//console.log(scramble('rkqodlw', 'world')); //==> True
//console.log(scramble('cedewaraaossoqqyt', 'codewars')); //==> True
console.log(scramble('katas', 'steak')); //==> False