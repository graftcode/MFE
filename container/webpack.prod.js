const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const { dependencies } = require("./package.json");

const domain = process.env.PROD_DOMAIN;

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //for host this never gets used but convention to use
      remotes: {
        //marketing in string matches up with name defined in wp in marketing...The key marketing whenever that is imported we are going to look at the url and look inside there for it
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
});
