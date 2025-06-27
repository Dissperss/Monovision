const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {},
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: ({ filename }) => filename.replace('src/', ''), // Сохраняем структуру папок
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    watchFiles: ['src/**/*.{html,css}', 'src/{img,logo,icons,font}/**/*.{jpg,png,gif,svg,woff,woff2,eot,ttf,otf}'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};