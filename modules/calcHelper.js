'use strict';

exports.add = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total += x;
  }
}

exports.subtract = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total -= x;
  }
}

exports.multiply = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total *= x;
  }
}

exports.divide = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total /= x;
  }
}

exports.validate = function(x) {
    if(typeof x !== 'number') {
      throw new Error('Not a number!');
    }
}