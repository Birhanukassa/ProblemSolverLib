# Utility Library

This is a collection of general-purpose utility functions that can be used across various projects

## isUrl

The `isUrl` function checks whether a given string looks like a valid URL.

### API
```js
 * Checks if a given string looks like a valid URL.
 *
 * @param {string} text - The input string to be checked.
 * @returns {boolean} - `true` if the input string looks like a valid URL, `false` otherwise.
 */
function isUrl(text) {
  return !!text.match(/^https?:\/\/\S+(?:\?\S*)?(?:#\S*)?$/);
}
```

The `isUrl` function uses a regular expression to match the input string against a pattern that represents a valid URL. The regular expression checks for the following:

    - The string must start with either "http://" or "https://".

    - The string must contain at least one non-whitespace character after the protocol.

    - The string may optionally contain a query string (starting with "?") and/or a fragment (starting with "#").

# Usage

You can use the `isUrl` function to validate if a given string looks like a URL:
```js
isUrl('http://example.com');        // true
isUrl('https://www.example.com');   // true
isUrl('https://example.com/path');  // true
isUrl('https://example.com?param=value'); // true
isUrl('https://example.com#fragment'); // true
isUrl('example.com');               // false
isUrl('http://example');            // false
isUrl('https://example .com');      // false
```
# Customization

If you need to modify the URL validation logic, you can update the regular expression used in the `isUrl`function. For example, you might want to allow additional characters in the URL path, or enforce stricter validation rules.

Feel free to further customize the isUrl function to fit your specific needs.

```JS
function isUrl(text) {
  return !!text.match(/^https?:\/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/);
}
```

# Other Utilities

This library may be expanded in the future to include other utility functions, such as string manipulation, date/time operations, or data validation. If you have any suggestions or requests, please feel free to contribute.
