'use strict';
var validate = require("./validate.js");

var subtract = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total -= x;
  }
}

module.exports = subtract;