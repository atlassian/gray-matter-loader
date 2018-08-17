const path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: require.resolve("../index.js"), options: { excerpt: true } }
        ]
      }
    ]
  }
};
