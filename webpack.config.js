const path = require('path')
const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
  entry: "./app/src/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [],
  mode: "development",
  optimization: {
    minimize: false,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.join(__dirname, "docs"),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        include: [path.resolve(__dirname, "app/scss")],
        use: [
          "style-loader",
          "css-loader", "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
    ],
  },
};

if (currentTask == "build") {
  config.mode = "production"
  config.optimization.minimize = true
  config.devtool=false
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "style.css" }))
}


module.exports = config
