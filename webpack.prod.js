const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "jsonviewer",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./JSONViewer": "./src/App",
      },
    }),
    new HtmlWebPackPlugin({
      template: "public/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
