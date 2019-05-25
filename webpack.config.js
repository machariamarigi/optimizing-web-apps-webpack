const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const babelLoader = require("./babel-loader");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const buildGen = require("./codegen");

module.exports = env => {
  const isDevelopment = env === "development";
  console.log(
    `This is a ${isDevelopment ? "development" : "production"} build`
  );

  const baseConfig = {
    entry: "./app/app.js",
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, "app/dist"),
      filename: "app.bundle.js",
      publicPath: "/dist/"
    },
    plugins: [
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopment,
        ENV_IS: JSON.stringify(env)
      })
    ]
  };

  if (isDevelopment) {
    return merge(baseConfig, buildGen, {
      plugins: [
        new cleanWebpackPlugin(['app/dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
      mode: "development",
      devServer: {
        contentBase: path.resolve(__dirname, "app"),
        publicPath: "/dist/",
        watchContentBase: false,
        hotOnly: true,
        overlay: true,
      }
    });
  } else {
    return merge(baseConfig, babelLoader)
  }

  return baseConfig;
};
