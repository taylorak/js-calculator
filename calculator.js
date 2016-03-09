/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function() {
  var _memory = 0;
  var _total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  var load = function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _total = x;
    return _total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   var getTotal = function() {
    return _total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   var add = function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _total += x;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   var subtract = function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _total -= x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   var multiply = function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _total *= x;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   var divide = function(x) {
    if(typeof x !== 'number') throw new Error('Not a number!');
    _total /= x;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   var recallMemory = function() {
    return _memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */
   var saveMemory = function() {
    _memory = _total;
   }

  /**
   * Clear the value stored at `memory`
   */
   var clearMemory = function() {
    _memory = 0;
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