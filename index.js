// @flow
const grayMatter = require("gray-matter");
const loaderUtils = require("loader-utils");
module.exports = function(source /*: string*/) /*: string*/ {
  const opts = loaderUtils.getOptions(this) || {};

  return `export default ${JSON.stringify(
    grayMatter(source, opts)
  )}`;
};
