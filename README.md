# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marcelloak/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: compares two arrays and outputs if they are equal 
* `assertEqual(actual, expected)`: compares two primitive values and outputs if they are equal
* `assertObjectsEqual(actual, expected)`: compares two objects and outputs if they are equal
* `countLetters(sentence)`: counts the appearances of unique letters within a sentence
* `countOnly(allItems, itemsToCount)`: counts items within a given array that are also within a given object
* `eqArrays(array1, array2)`: compares two arrays and returns if they are equal
* `eqObjects(object1, object2)`: compares two objects and returns if they are equal
* `findKey(object, callback)`: finds the first key within the given object that returns true when run through the given callback
* `findKeyByValue(object, value)`: finds the first key within the given object that matches the given value 
* `flatten(nestedArray)`: returns a flat array given an array with any amount of nesting
* `head(array)`: returns the first element within the given array
* `letterPositions(sentence)`: returns an object containing the index(es) of all unique letters within a given sentence
* `map(array, callback)`: returns an array with the given callback run on each element of the given array
* `middle(array)`: returns the middle element(s) of a given array
* `tail(array)`: returns the tail of a given array (all elements except the head)
* `takeUntil(array, callback)`: returns an array with all elements within a given array up to but not including the first element that returns true when run through the given callback
* `without(source, itemsToRemove)`: returns an array with all elements within a given array except those that are contained within the other given array