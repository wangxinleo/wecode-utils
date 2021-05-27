const array_utils = require('../src/array-utils');
const browser_utils = require('../src/browser-utils');
const date_utils = require('../src/date-utils');
const func_utils = require('../src/func-utils');
const math_utils = require('../src/math-utils');
const doms_utils = require('../src/doms-utils');
const object_utils = require('../src/object_utils');
const string_utils = require('../src/string-utils');
const type_utils = require('../src/type-utils');
const regexp_utils = require('../src/regexp-utils');

module.exports = {
  ...array_utils,
  ...browser_utils,
  ...date_utils,
  ...func_utils,
  ...math_utils,
  ...doms_utils,
  ...object_utils,
  ...string_utils,
  ...type_utils,
  ...regexp_utils
};
