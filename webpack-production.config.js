var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_module/,
    loader: WebpackStrip.loader('console.log') // This will remove all console.log statements
} 

devConfig.module.loaders.push(stripLoader);

// Duplicate code in webpack.config.js
module.exports = devConfig;