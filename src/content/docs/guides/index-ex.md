---
title: Range Utility Functions Documentation
---

## JavaScript Code

```js
'use strict';
module.exports = {
  wrap: wrapRange,
  limit: limitRange,
  validate: validateRange,
  test: testRange,
  curry: curry,
  name: name
};

function wrapRange(min, max, value) {
  var maxLessMin = max - min;
  return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}

function limitRange(min, max, value) {
  return Math.max(min, Math.min(max, value));
}

function validateRange(min, max, value, minExclusive, maxExclusive) {
  if (!testRange(min, max, value, minExclusive, maxExclusive)) {
    throw new Error(value + ' is outside of range [' + min + ',' + max + ')');
  }
  return value;
}

function testRange(min, max, value, minExclusive, maxExclusive) {
  return !(
       value < min ||
       value > max ||
       (maxExclusive && (value === max)) ||
       (minExclusive && (value === min))
  );
}

function name(min, max, minExcl, maxExcl) {
  return (minExcl ? '(' : '[') + min + ',' + max + (maxExcl ? ')' : ']');
}

function curry(min, max, minExclusive, maxExclusive) {
  var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
  return {
    wrap: wrapRange.bind(null, min, max),
    limit: limitRange.bind(null, min, max),
    validate: function(value) {
      return validateRange(min, max, value, minExclusive, maxExclusive);
    },
    test: function(value) {
      return testRange(min, max, value, minExclusive, maxExclusive);
    },
    toString: boundNameFn,
    name: boundNameFn
  };
}
```
## Code documentation

| Function | Code | Documentation |
|---|---|---|
| **wrapRange** | `function wrapRange(min, max, value) { var maxLessMin = max - min; return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min; }` | This function wraps a value within a specified range defined by `min` and `max`, ensuring that it stays within that range. |
| **limitRange** | `function limitRange(min, max, value) { return Math.max(min, Math.min(max, value)); }` | This function limits a value to be within a specified range defined by `min` and `max`. It returns the value if it's within the range; otherwise, it returns the closest boundary value. |
| **validateRange** | `function validateRange(min, max, value, minExclusive, maxExclusive) { if (!testRange(min, max, value, minExclusive, maxExclusive)) { throw new Error(value + ' is outside of range [' + min + ',' + max + ')'); } return value; }` | This function validates whether a value is within a specified range defined by `min` and `max`. If the value is outside the range and inclusive/exclusive flags are set accordingly, it throws an error. Otherwise, it returns the value. |
| **testRange** | `function testRange(min, max, value, minExclusive, maxExclusive) { return !(value < min || value > max || (maxExclusive && (value === max)) || (minExclusive && (value === min))); }` | This function tests whether a value is within a specified range defined by `min` and `max`. It returns `true` if the value is within the range; otherwise, it returns `false`. |
| **name** | `function name(min, max, minExcl, maxExcl) { return (minExcl ? '(' : '[') + min + ',' + max + (maxExcl ? ')' : ']'); }` | This function generates a string representation of the range, including the minimum and maximum values and whether they are exclusive or inclusive. |
| **curry** | `function curry(min, max, minExclusive, maxExclusive) { var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive); return { wrap: wrapRange.bind(null, min, max), limit: limitRange.bind(null, min, max), validate: function(value) { return validateRange(min, max, value, minExclusive, maxExclusive); }, test: function(value) { return testRange(min, max, value, minExclusive, maxExclusive); }, toString: boundNameFn, name: boundNameFn }; }` | This function curries the range utility functions, creating a partially applied version of each function with predefined minimum and maximum values, along with inclusive/exclusive flags. It returns an object containing the curried versions of `wrap`, `limit`, `validate`, and `test`, along with a `toString` method for generating the string representation of the range. |

## Explanation 

These utility functions provide functionality for working with ranges, including wrapping values within a range, limiting values to a range, validating values against a range, testing if values are within a range, generating string representations of ranges, and currying functions with predefined ranges.
