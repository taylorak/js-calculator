var addModule = require("./modules/add.js");
var subtractModule = require("./modules/subtract.js");
var multiplyModule = require("./modules/multiply.js");
var divideModule = require("./modules/divide.js");
var validate = require("./modules/validate.js");
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function() {

  var _calculatorState = {
    memory : 0,
    total : 0
  }


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  var load = function(x) {
    validate(x);
    _calculatorState.total = x;
    return _calculatorState.total;
  }


  /**
   * Return the value of `total`
   * @return { Number }
   */
   var getTotal = function() {
    return _calculatorState.total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   var add = addModule(_calculatorState);


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   var subtract = subtractModule(_calculatorState);


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   var multiply = multiplyModule(_calculatorState);


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   var divide = divideModule(_calculatorState);


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   var recallMemory = function() {
    return _calculatorState.memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */
   var saveMemory = function() {
    _calculatorState.memory = _calculatorState.total;
   }

  /**
   * Clear the value stored at `memory`
   */
   var clearMemory = function() {
    _calculatorState.memory = 0;
   }

  /**
   * Validation
   */
   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,

   }

}

module.exports = calculatorModule;