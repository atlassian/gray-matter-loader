// @flow
const grayMatter = require("gray-matter");
const getOptions = require("loader-utils").getOptions;
const validateOptions = require("schema-utils");

const optionsSchema = {
  type: "object",
  properties: {
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
  }
};

function purifyOptions(options) {
  let opts = {};
  const validOptions = Object.keys(optionsSchema.properties);

  validOptions.forEach(validOption => {
    if (options.hasOwnProperty(validOption)) {
      opts[validOption] = options[validOption];
    }
  });
  return opts;
}

module.exports = function(source /*: string*/) /*: string*/ {
  const options = getOptions(this);
  validateOptions(optionsSchema, options, "gray-matter Loader");

  let opts = purifyOptions(options);

  return `export default ${JSON.stringify(grayMatter(source, opts))}`;
};
