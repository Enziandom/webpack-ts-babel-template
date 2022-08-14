const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  output: { path: path.resolve(__dirname, "dist/pro"), filename: "bundle.js" },
  resolve: { extensions: [ ".ts", ".tsx", ".js" ] },
  module: {
    rules: [
      { test: /\.ts$/, loader: "babel-loader", exclude: /(node_modules|bower_components)/ },
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /(node_modules|bower_components)/ }
    ]
  }
};