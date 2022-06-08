# BRANDON's AWESOME FINAL PROJECT

`yarn install` to install dependencies
For local env variables, add a `webpack.config.js` file to the root of this directory. Inside, add the following code snippet:

```js
const Dotenv = require("dotenv-webpack");
module.exports = {
  plugins: [new Dotenv()],
};
```

Don't forget to do `yarn add 'dotenv-webpack'`
