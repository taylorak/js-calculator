'use strict';
var validate = require("./validate.js");

var add = function(calculatorState) {
  return function(x) {
    validate(x);
    calculatorState.total += x;
  }
}

module.exports = add;