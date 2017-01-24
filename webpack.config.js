var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app'],
    output: {
        path: path.resolve('build/'), // This is a virtual path where the bundle files exist
        publicPath: '/public/assets/', // Physical path for the bundle.js stated in the index.html
        filename: 'bundle.js' 
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        contentBase: 'public'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    watch: true
}