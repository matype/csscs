var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      if (!rule.semicolon) {
        throw new Error('need semicolon')
      }
    })
  }
}

