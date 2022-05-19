// forEach implementation
function forEach(array, cb) {
  // array is passsed as parameter to connect the array class with out attaching the method itself to the array class and also to stay in line with the test
  for (var i = 0; i < array.length; i++) {
    cb(array[i], i, array); // foreach works with array[i] value, the index, as well as a copy of the original array.
  }
}

// Map implementation
function map(array, cb) {
  // works just like forEach, but also returns a new array with the result of cb
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(cb(array[i], i, array));
  }
  return newArr;
}

// Filter implementation
function filter(array, cb) {
  // works just like map, but also returns a new array with selectively pushing array indecies that return true value.
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) newArr.push(array[i]);
  }
  return newArr;
}

// Reduce Implementation
function reduce(array, cb, initialValue) {
  // reduce function works with intialvalue and a accumulator and in the end returns a value
  let currentValue = initialValue;

  for (var i = 0; i < array.length; i++) {
    if (i == 0 && initialValue == null) currentValue = array[0];
    // of no initial value is provided, first index vlaue of array is chosen as initial value
    else currentValue = cb(currentValue, array[i], i, array); // here currentvalue accumulates the result
  }
  return currentValue;
}

// Some implementation
function some(array, cb) {
  // if any value of the array returns true with cb, some returns true.
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) return true;
  }
  return false;
}

// Every implementation
function every(array, cb) {
  // works like some but returns true when evry value of array return strue with cb, otherwise false
  for (var i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) return false;
  }
  return true;
}

// Flat Implementation
// converts [1,2, [4, 5, [4, 7, 8]]] --> [1, 2, 4 ,5, 4 ,7 ,8] (Falttens the array acc to depth passed)
function flat(array, depth = 1) {
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    // check for evry element whether the element is a nested list or not 
    if (Array.isArray(array[i]) && depth > 0) {
      // if yes we recursively call flat for that element with depth decreasing by 1.
      newArr.push(...flat(array[i], depth - 1));
    } else {
      // else we just push the element to the newArr
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Find Implementation
// works like some and every and returns the element for which cb returned true
function find(array, cb) {
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) return array[i];
  }
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find
};
