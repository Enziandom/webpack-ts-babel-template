const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  output: { path: path.resolve(__dirname, "dist/dev"), filename: "bundle.js" },
  devtool: "source-map",
  resolve: { extensions: [ ".ts", ".tsx", ".js" ] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    "chrome": "58",
                    "ie": "11"
                  }
                }
              ], [ "@babel/preset-typescript" ]
            ],
            plugins: [ "@babel/transform-runtime" ]
          }
        },
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /(node_modules|bower_components)/ },
      { test: /\.js$/, loader: "source-map-loader", exclude: /(node_modules|bower_components)/ }
    ]
  }
};