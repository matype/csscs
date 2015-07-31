var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var afterCount = rule.after.length
      if (afterCount !== '\n') {
        console.warn('need new line between last declaration and }')
      }
    })
  }
}
