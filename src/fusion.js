const array_utils = require('./array-utils')
const browser_utils = require('./browser-utils')
const date_utils = require('./date-utils')
const func_utils = require('./func-utils')
const math_utils = require('./math-utils')

module.exports = {
  ...array_utils,
  ...browser_utils,
  ...date_utils,
  ...func_utils,
  ...math_utils
}
