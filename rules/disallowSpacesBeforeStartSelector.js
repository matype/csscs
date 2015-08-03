var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var beforeCount = rule.before.length
      if (betweenCount > 1) {
        console.warn('disallow spaces before selector')
      }
    })
  }
}

