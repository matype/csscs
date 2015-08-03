var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      if (after !== '\n') {
        console.warn('need new line between last declaration and }')
      }
    })
  }
}
