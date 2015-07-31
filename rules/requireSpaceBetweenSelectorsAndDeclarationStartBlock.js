var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var betweenCount = rule.between.length
      if (betweenCount !== 1) {
        console.warn('need 1 space between selector and {')
      }
    })
  }
}
