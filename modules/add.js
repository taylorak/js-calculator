'use strict';
var validate = require("./validate.js");

var add = function(calculatorState) {
  var _calculatorState = calculatorState;
  return function(x) {
    validate(x);
    _calculatorState.total += x;
  }
}

module.exports = add;