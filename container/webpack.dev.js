const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const { dependencies } = require("./package.json");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //for host this never gets used but convention to use
      remotes: {
        //marketing in string matches up with name defined in wp in marketing...The key marketing whenever that is imported we are going to look at the url and look inside there for it
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8082/remoteEntry.js",
      },
      shared: dependencies,
    }),
  ],
});
