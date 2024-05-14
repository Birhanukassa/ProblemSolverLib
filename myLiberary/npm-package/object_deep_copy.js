/**
 * Performs a deep copy of the given object or array.
 * @param {any} original - The object or array to be copied.
 * @returns {any} - A deep copy of the original object or array.
 */
function deepCopy(original) {
  if (Array.isArray(original)) {
    return original.map(item => deepCopy(item));
  } else if (typeof original === 'object' && original !== null) {
    const copy = {};
    for (const [key, value] of Object.entries(original)) {
      copy[key] = deepCopy(value);
    }
    return copy;
  } else {
    return original; // No need of copy for primitive values
  }
}

