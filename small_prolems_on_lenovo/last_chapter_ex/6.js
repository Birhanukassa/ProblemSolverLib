/*
Challenge:
write a method that changes strings in the date format
2016-06-17 to the format 17.06.2016. You must use a regular expression
and should use methods described in this section.
*/

let formatDate = function (originalDate) {
  return originalDate.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
    .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
};

//Example:
formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)