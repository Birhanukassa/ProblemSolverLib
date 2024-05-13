
var myObject = function ( ) {
  var value = 0;
  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
      //value += inc;
    },
    getValue: function ( ) {
      return value;
    }
  };
}();

myObject.increment();
console.log(myObject.getValue()); // 1
myObject.increment();
console.log(myObject.getValue()); // 2
myObject.increment();
console.log(myObject.getValue()); // 3
myObject.increment();
console.log(myObject.getValue()); // 4

/*
Instead of initializing myObject with an object literal,
we will initialize myObject by calling a function that
returns an object literal. That function defines a value variable.
That variable is always available to the increment and getValue methods, but
the function’s scope keeps it hidden from the rest of the program:

We are not assigning a function to myObject. We are assigning the result
of invoking that function. Notice the () on the last line. The function
returns an object containing two methods, and those methods continue to
enjoy the privilege of access to the value variable.*/