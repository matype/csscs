var postcss = require('postcss')

function Csscs (css, rules) {
  if (!this instanceof Csscs) {
    return new Csscs(css, processors)
  }

  if (!rules) {
    rules = []
  }

  this.css = css
  this.rules = rules
}

Csscs.prototype.check = function () {
  postcss(this.rules).process(this.css).css
}
