const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports=()=>{
  return{
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
        {use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
      ],
          test:/\.s?css$/}
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ 
          filename: 'styles.css'
      })
  ],
    devtool:'source-map',
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
  }



 
