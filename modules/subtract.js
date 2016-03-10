'use strict';
var validate = require("./validate.js");

var subtract = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total -= x;
  }
}

module.exports = subtract;