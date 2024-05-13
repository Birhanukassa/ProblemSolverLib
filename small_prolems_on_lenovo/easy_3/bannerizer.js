

/*
 Bannerizer
 Write a function that will take a short line of text,
 and write it to the console log within a box.
 logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/


// with word wrapping
const repeatItems = (toRepeat, width = 0) => {
  let widthOfRepeat = width + 2,
    repeatedItems = '',
    counter = 0;
  while (counter < widthOfRepeat) {
    repeatedItems += toRepeat;
    counter++;
  }

  return repeatedItems;
};

const stringWrapper = (string, width = 0) => {
  let sizedString = '';
  let collectionOfSizedStrings = [];
  for (let index = 0; index < string.length; index++) {
    let indexOfString = 0;
    if (indexOfString < width) sizedString += string[index];
    indexOfString++;
    if (sizedString.length === width) sizedString = sizedString.trimLeft();
    if (sizedString.length === width) {
      collectionOfSizedStrings.push(`| ${sizedString} |\n`);
      sizedString = '';
      indexOfString = 0;
    } else if (index === string.length - 1) {
      //here we fill the last gap with ' ' character to rest of the string size!
      let fillGapLine = repeatItems(' ', width - ((sizedString.length) + 1));
      collectionOfSizedStrings.push(`| ${sizedString + fillGapLine}|`);
    }
  }
  return collectionOfSizedStrings.join('');
};

const logInBox = (string, width) => {
  let horizontal = `+${repeatItems('-', width)}+`;
  let emptyLine = `|${repeatItems(' ', width)}|`;
  console.log(horizontal);
  console.log(emptyLine);
  if (string.length !== 0) {
    console.log(`${stringWrapper(string, width)}`);
    console.log(emptyLine);
    console.log(horizontal);
  } else {
    console.log(horizontal);
  }
};

let message = 'One of the core values that sets Launch School apart from some other coding schools out there is our emphasis on Mastery-based Learning. If the key to becoming a competent and confident Software Engineer is deep understanding of first principles, then the key to acquiring that understanding is through Mastery-based Learning (MBL). ';
logInBox(message, 60);
logInBox('');
