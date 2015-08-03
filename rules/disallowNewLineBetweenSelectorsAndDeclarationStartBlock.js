var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      if (rule.before.between('\n') === -1){
        console.warn('need new line between last declaration and }')
      }
    })
  }
}

