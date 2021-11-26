const path = require('path');

module.exports = {
  mode:"production",
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {loader:"babel-loader",
        test: /\.js$/,
      exclude:/node_modules/},
      {use:["style-loader", "css-loader","sass-loader"],
        test:/\.s?css$/}
    ],
  },
  devtool:'eval-cheap-module-source-map',
  devServer:{
    historyApiFallback:true,
    static:{ 
     directory:path.join(__dirname, 'public'), 
  }
},
performance: {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
}
};
