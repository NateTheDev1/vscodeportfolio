/* eslint-disable no-undef */
const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: ["babel-loader", "eslint-loader"] },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|gif|svg|pdf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(ico|json|txt)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.png$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
  mode: "development",
  plugins: [new htmlWebpackPlugin({ template: "app/public/index.html" })],
};
