/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
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


// I tried to implement it with word wrapping
const isRepeat = (block, width = 0) => {
//added number '2' on 'widthOfBlocks' var to make a space between the
//string & its blocks.the hight is displaying implicitly according to
//its current stack !
  let widthOfBlocks = width + 2,
    newBlock = '',
    counter = 0;
  while (counter < widthOfBlocks) {
    newBlock += block;
    counter++;
  }

  return newBlock;
};

const stringWrapper = (string, width = 0) => {
  let arrayOfString = string.split(''),
    sizedString = '',
    collectionOfSizedStrings = [];
  for (let index = 0; index < arrayOfString.length; index++) {
    let indexOfString = 0;
    if (indexOfString < width) {
      sizedString += arrayOfString[index];
      indexOfString++;
    }
    if (sizedString.length === width) sizedString = sizedString.trimLeft();
    if (sizedString.length === width) {
      collectionOfSizedStrings.push(`| ${sizedString} |\n`);
      sizedString = '';
      indexOfString = 0;
    }
    if (index === arrayOfString.length - 1) {
      let lastString = width - (sizedString.length);
      let fillGapLine = isRepeat(' ', lastString - 1);
      collectionOfSizedStrings.push(`| ${sizedString + fillGapLine}|`);
    }
  }
  return collectionOfSizedStrings.join('');
};

const logInBox = (message, width) => {
  console.log(`+${isRepeat('-', width)}+`);
  console.log(`|${isRepeat(' ', width)}|`);
  if (message.length !== 0) {
    console.log(`${stringWrapper(message, width)}`);
    console.log(`|${isRepeat(' ', width)}|`);
    console.log(`+${isRepeat('-', width)}+`);
  } else {
    console.log(`+${isRepeat('-', width)}+`);
  }
};

let string = 'One of the core values that sets Launch School apart from some other coding schools out there is our emphasis on Mastery-based Learning. If the key to becoming a competent and confident Software Engineer is deep understanding of first principles, then the key to acquiring that understanding is through Mastery-based Learning (MBL). ';
logInBox(string, 30);
logInBox('');
