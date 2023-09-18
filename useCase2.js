/**
 * Use case 2
 * Need of a unique value
 * That's a way to eliminate some troubles for having a really strict code without any chance of bug cause of the unique caracacteristic of a Symbol
 */

const kSymFooBarA = Symbol();
const kSymFooBarB = Symbol();

function foobar(something) {
  return something ? kSymFooBarA : kSymFooBarB;
}

const value = foobar(true)
