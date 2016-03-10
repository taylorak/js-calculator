'use strict';
var validate = require("./validate.js");

var multiply = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total *= x;
  }
}

module.exports = multiply;