const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist/pro"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [ "", ".webpack.js", ".web.js", ".ts", ".tsx", ".js" ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /(node_modules|bower_components)/ },
      {
        test: /\.ts$/,
        use: [
          {
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
          }
        ],
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};