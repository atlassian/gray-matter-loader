// @flow
const grayMatter = require("gray-matter");
const getOptions = require("loader-utils").getOptions;
const validateOptions = require("schema-utils");

const grayMatterOptionsType = {
  excerpt: {
    anyOf: [{ type: "boolean" }, { instanceof: "Function" }]
  },
  excerpt_separator: {
    type: "string"
  },
  engines: {
    type: "object"
  },
  language: {
    type: "string"
  },
  delimiters: {
    type: "string"
  }
};

const optionsSchema = {
  type: "object",
  properties: grayMatterOptionsType
};

function purifyOptions(options) {
  let opts = {};
  const validOptions = Object.keys(grayMatterOptionsType);

  validOptions.forEach(validOption => {
    if (options.hasOwnProperty(validOption)) {
      opts[validOption] = options[validOption];
    }
  });
  return opts;
}

module.exports = function(source /*: string*/) /*: string*/ {
  const options = getOptions(this) || {};
  validateOptions(optionsSchema, options, "gray-matter Loader");

  let opts = purifyOptions(options);

  return `export default ${JSON.stringify(grayMatter(source, opts))}`;
};
