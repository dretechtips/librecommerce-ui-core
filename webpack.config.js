const path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  entry: "./src/index.ts",
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "core",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  optimization: {},
  plugins: [],
  target: "web",
};
