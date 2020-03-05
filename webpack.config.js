const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`],
    alias: {
      "@components": path.resolve(__dirname, `./src/components/`),
      "@consts": path.resolve(__dirname, `./src/consts/`),
      "@hocs": path.resolve(__dirname, `./src/hocs/`),
      "@utils": path.resolve(__dirname, `./src/utils/`),
      "@store": path.resolve(__dirname, `./src/store/`),
      "@api": path.resolve(__dirname, `./src/api/api`),
    "@models": path.resolve(__dirname, `./src/models/`),
      "@mocks": path.resolve(__dirname, `./src/mocks/`)
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'PropTypes': `prop-types`
    })
  ]
};
