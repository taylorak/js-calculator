'use strict';

exports.add = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total += x;
  }
}

exports.subtract = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total -= x;
  }
}

exports.multiply = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total *= x;
  }
}

exports.divide = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total /= x;
  }
}

exports.validate = function(x) {
    if(typeof x !== 'number') {
      throw new Error('Not a number!');
    }
}