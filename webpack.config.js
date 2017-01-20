var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js', 
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js'), // This is a virtual path
        publicPath: '/public/assets/js/', // Physical path for the bundle.js stated in the index.html
        filename: '[name].js' // This [name] is a placeholder for the name specified in the entry object
    },

    plugins: [commonsPlugin],

    devServer: {
        contentBase: 'public'
    },

    module: {
        preloaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    watch: true
}