const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.mkd$/,
        use: 'raw-loader'
      }
    ]
  }
};