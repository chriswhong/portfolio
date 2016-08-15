var webpack = require('webpack')

module.exports = {
  entry: [
    './main.jsx'
  ],
  output: {
    path: './js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {     
        test : /\.jsx?/,
        loader : 'babel?presets[]=es2015&presets[]=react'
      }
    ]
  }
};
