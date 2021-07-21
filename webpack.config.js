const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        // TypeScript をコンパイルする
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    alias: {},
    extensions: [".vue", ".ts", ".js", ".json"],
  },
  externals: {
    uxp: "uxp",
    scenegraph: "scenegraph",
    commands: "commands",
  },
  watch: true,
  plugins: [new VueLoaderPlugin()],
};
