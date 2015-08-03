var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var betweenCount = rule.between.length
      if (betweenCount > 1) {
        console.warn('disallow multi spaces between selector and {')
      }
    })
  }
}
