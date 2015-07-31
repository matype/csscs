var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      if (!rule.semicolon) {
        console.warn('need semicolon in last declaration')
      }
    })
  }
}

