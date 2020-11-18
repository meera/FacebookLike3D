const path = require('path');

module.exports = {

  
    module: {
      rules: [
        { test: /\\.css$/, use: 'css-loader' },
        { test: /\\.ts$/, use: 'ts-loader' },
        { test: /\\.js$/, use: 'babel' },
        { test: /\.glsl$/, use: 'webpack-glsl-loader' },
        

      ]
    }
  };
  