/* jshint node:true */
module.exports = function () {
  for (var i = 0, len = arguments.length; i < len; i++) {
    if (arguments[i] !== undefined) return arguments[i];
  }
};