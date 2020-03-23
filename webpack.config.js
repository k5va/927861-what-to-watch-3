const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.tsx`,
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
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    alias: {
      "@components": path.resolve(__dirname, `./src/components/`),
      "@consts": path.resolve(__dirname, `./src/consts/`),
      "@hocs": path.resolve(__dirname, `./src/hocs/`),
      "@utils": path.resolve(__dirname, `./src/utils/`),
      "@store": path.resolve(__dirname, `./src/store/`),
      "@api": path.resolve(__dirname, `./src/api/api`),
      "@models": path.resolve(__dirname, `./src/models/`),
      "@routes": path.resolve(__dirname, `./src/routes`),
      "@types": path.resolve(__dirname, `./src/types`)
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'ReactDOM': `react-dom`
    })
  ]
};
