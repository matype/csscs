var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var afterCount = rule.after.length
      if (afterCount !== '\n') {
        throw new Error('whitespace')
      }
    })
  }
}
