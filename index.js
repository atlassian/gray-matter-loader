// @flow
const grayMatter = require("gray-matter");
module.exports = function(source /*: string*/) /*: string*/ {
  return `export default ${JSON.stringify(
    grayMatter(source, { excerpt: true })
  )}`;
};
