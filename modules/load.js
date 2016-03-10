'use strict';

exports.load = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _calculatorState.total = x;
    return _calculatorState.total;
  }
};