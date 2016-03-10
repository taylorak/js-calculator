'use strict';
var validate = require("./validate.js");

var divide = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total /= x;
  }
}

module.exports = divide;