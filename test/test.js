// Assignment done by Raymond.Sabitti  and Grace.Nakazibwe.
const { assert } = require('chai');
const { describe, it } = require('mocha');
const factorial = require('../factorial');

describe('Factorial Tests', () => {
  // Test 1.
  it('Output of the Factorial is a number', () => {
    assert.typeOf(factorial(1), 'number');
  });
  // Test 2
  it('0! is 1 ', () => {
    assert.equal(factorial(0), 1);
  });

  // Test 3
  it('4! is 24', () => {
    assert.equal(factorial(4), 24);
  });
});
