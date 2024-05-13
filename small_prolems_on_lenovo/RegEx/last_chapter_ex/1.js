// Exercises
// Write a method that returns true if its argument looks like a URL,
// false if it does not.
function isUrl(text) {
  return console.log(!!text.match(/^https?:\/\/\S+$/));
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false