# gray-matter-loader

> A webpack loader for [gray-matter](https://www.npmjs.com/package/gray-matter)

Usage:

add it to project

```sh
yarn add --dev npm i gray-matter-loader
```

Then in you webpack config add this as a rule:

```js
module: {
    rules: [
        {
            test: /\.md$/,
            use: [
                { loader: "gray-matter-loader" }
            ]
        }
    ]
}
```

Then simply import a markdown in you application, you will an object with

```js
  "content": "Sample page content\n---\n\nRest on content from page\n",
  "data": {
    "title": "Sample",
    "description": "this is sample description"
  },
  "isEmpty": false,
}
```

Now you can simply display your content the way you would do conventionally but here you also get `data` field which will gray matter of your markdown.

For further read please read docs for [gray-matter](https://www.npmjs.com/package/gray-matter)

### Example

There is a example folder if you want to try this package, do following to get it running:

```sh
git clone https://github.com/ajaymathur/gray-matter-loader.git
cd gray-matter-loader
yarn
cd example
yarn webpack --watch
```

Now open index.html in the example folder in any browset to see the output. Also, go ahead and edit sample.md and/ or webapck.config.js to see create use cases.
