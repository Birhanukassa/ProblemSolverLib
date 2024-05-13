 // https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html#deep-copying-in-javascript
 
 // The following function generically deep-copies a value original:
function deepCopy(original) {
  if (Array.isArray(original)) {
    const copy = [];
    for (const [index, value] of original.entries()) {
      copy[index] = deepCopy(value);
    }
    return copy;
  } else if (typeof original === 'object' && original !== null) {
    const copy = {};
    for (const [key, value] of Object.entries(original)) {
      copy[key] = deepCopy(value);
    }
    return copy;
  } else {
    // Primitive value: atomic, no need to copy
    return original;
  }
}


const original = {a: 1, b: {c: 2, d: {e: 3}}};
const copy = deepCopy(original);

// Are copy and original deeply equal?
assert.deepEqual(copy, original);

// Did we really copy all levels
// (equal content, but different objects)?
assert.ok(copy     !== original);
assert.ok(copy.b   !== original.b);
assert.ok(copy.b.d !== original.b.d);


// 6.3.3.1 A more concise version of deepCopy() 
// We can make our previous implementation of deepCopy() more concise if we use .map() and Object.fromEntries():

function deepCopy(original) {
  if (Array.isArray(original)) {
    return original.map(elem => deepCopy(elem));
  } else if (typeof original === 'object' && original !== null) {
    return Object.fromEntries(
      Object.entries(original).map(([k, v]) => [k, deepCopy(v)]));
  } else {
    // Primitive value: atomic, no need to copy
    return original;
  }
}

//===============================================//

// generic deep copying via JSON 
// This is a hack, but, in a pinch, it provides a quick solution: In order to deep-copy an object original, we first convert it to a JSON string and parse that JSON string:

function jsonDeepCopy(original) {
  return JSON.parse(JSON.stringify(original));
}

const original2 = {name: 'Jane', work: {employer: 'Acme'}};
const copy2 = jsonDeepCopy(original2);
assert.deepEqual(original2, copy2);

// The significant downside of this approach is that we can only copy properties with keys and values that are supported by JSON.