/*


# Strings Mix | Codewars


Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the _lowercase_ letters (a to z). First let us count the frequency of each _lowercase_ letters in s1 and s2.

`s1 = "A aaaa bb c"`

`s2 = "& aaa bbb c d"`

`s1 has 4 'a', 2 'b', 1 'c'`

`s2 has 3 'a', 3 'b', 1 'c', 1 'd'`

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: `"1:aaaa/2:bbb"` where `1` in `1:aaaa` stands for string s1 and `aaaa` because the maximum for `a` is 4. In the same manner `2:bbb` stands for string s2 and `bbb` because the maximum for `b` is 3.

The task is to produce a string in which each _lowercase_ letters of s1 or s2 appears as many times as its maximum if this maximum is _strictly greater than 1_; these letters will be prefixed by the number of the string where they appear with their maximum value and `:`. If the maximum is in s1 as well as in s2 the prefix is `=:`.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

```
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
```

#### Note for Swift, R, PowerShell

The prefix `=:` is replaced by `E:`

```
s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
```
===========================================
===========================================

Rules
  - explicit
    - input: 2 strings 
    - output: 1 string 
    - return the frequencies of the repeated chars that are appeared 
      more than ones.
    - the formate of the return values starts form the location of 
      longest repeated char which is 1 or 2 and the actual longest 
      repeated char followed by ':' and ends with '/': example: '1:xxx/.
    - if the repeated char frequency is equally available use '=' instead of
      the argument order number
    - only lowercases will be counted.
  
  - DS: array, string 

# Given 2 strings 
- declare a variable called result and initialize it with empty string

- construct a object1 that record the first string argument char frequencies 
- construct a object2 that record the second string argument char frequencies 

- sort both maps based on their values in descending order 
- remove the chars and their frequencies, if they have only one frequency 
- remove the chars if they are not in small letters 

- declare a variable called index and initialize it with 0 

while the index is  object1 value size or the object2 value size 
  - check each key of the first and second object key has similar key and
    same frequency, 
    - if it does, increment the key repeated value times by prefixing the string with '/=: ...'
    - else if it does appear on map1 only, 
      increment the key repeated value times by prefixing the string 
      with '/1: ...'

- return result    

*/

function mix(s1, s2) {
  let result = '';
   
  let s1Frq = [...s1].reduce((obj, char) => {
    if (char === char.toLowerCase() && char !== ' ') {
      obj[char] = (obj[char] || 0) + 1 , obj
    }
      
    return obj;
  },{});
  
  let keyValues = Object.entries(s1Frq).filter(ar => ar[1] > 1).sort((a, b) => {
    a = ar[0];
    b = ar[1];
    return b - a;
  })


 return [keyValues, s1Frq]
}




 
console.log(mix("Are they here", "yes, they are here"));
// "2:eeeee/2:yy/=:hh/=:rr"

// console.log(mix("looping is fun but dangerous", "less dangerous than coding")); 
// // "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"

// console.log(mix(" In many languages", " there's a pair of functions")); 
// // "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

// console.log(mix("Lords of the Fallen", "gamekult"));
// // "1:ee/1:ll/1:oo"

// console.log(mix("codewars", "codewars"));
// //, ""
// console.log(mix("A generation must confront the looming ", "codewarrs"));
// // "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"

  