# gray-matter-loader

> Webpack loader for [gray-matter](https://www.npmjs.com/package/gray-matter)

## Benifits of using gray-matter-loader

1. **Smaller bundle**: With gray-matter-loader there is no need to bundle gray-matter in you application. Thus, saving you ~44kb of bundle size, see [bundlephobia: gray-matter](https://bundlephobia.com/result?p=gray-matter@latest)

2. **Faster**: The webpack loader runs at build time thus there is no run time impact in extracting front matter from file.

## Usage:

Add gray-matter-loader to your project:

```sh
yarn add --dev gray-matter-loader
```

Add a rule in the webpack config of the project to use gray-matter-loader for files from which we need to extract the front-matter

```js
module: {
  rules: [
    {
      test: /\.md$/,
      use: [{ loader: "gray-matter-loader" }],
    },
  ];
}
```

After this, when you import file in you application you will get the parsed file in the following format:

```js
  "content": "Sample page content\n---\n\nRest on content from page\n",
  "data": {
    "title": "Sample",
    "description": "this is sample description"
  },
  "isEmpty": false,
}
```

The **_data_** property of the object has the front-matter and the content of the file is the _content_ property.

For further read please read docs for [gray-matter](https://www.npmjs.com/package/gray-matter)

## Using example

We have added an example project in this repo for testing. To run follow the following steps:

```sh
git clone https://github.com/ajaymathur/gray-matter-loader.git
cd gray-matter-loader
yarn
cd example
yarn webpack --watch
```

Now open the _index.html_ file in the example folder in a browser to see the output. Go ahead and edit sample.md and/ or webapck.config.js to test different use cases.
