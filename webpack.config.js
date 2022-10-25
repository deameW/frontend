// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html的插件
var DeclarationBundlerPlugin = require("types-webpack-bundler"); //解析.d.ts插件

module.exports = {
  mode: "development",
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js", // 打包后的文件名称
    path: path.resolve("dist"), // 打包后的目录，必须是绝对路径
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  // 所有loader的配置都在 module.rules 中
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 对css文件的处理
      // use里的loader如果有多个的情况下，切记执行顺序是：从下到上（或者从右到左）
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 对less文件的处理
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 对ts|tsx文件的处理
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "dts-loader"],
      },
      // 对图片的处理
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  // 插件的处理
  plugins: [
    new HtmlWebpackPlugin({
      // title 配置
      title: "Webpack V5 + React",
      // 模板导入
      template: path.resolve("./public/index.html"),
      // 名称为
      filename: "index.html",
    }),
    new DeclarationBundlerPlugin({
      moduleName: "./src/index.js",
      out: "/bundle.d.ts",
    }),
  ],
};
