var path = require('path');
var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: ['shared', 'manifest']
});

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js', 
        contact: './contact_page.js',
        shared: ['jquery', 'angular'] // Its best to keep vendor files into its own bundle to cache
    },
    output: {
        path: path.resolve('build/js'), // This is a virtual path
        publicPath: '/public/assets/js/', // Physical path for the bundle.js stated in the index.html
        filename: '[name].[chunkhash].js' // This [name] is a placeholder for the name specified in the entry object
    },

    plugins: [
        commonsPlugin,
        new ManifestPlugin(),
        
        new HtmlWebpackPlugin({
            template: 'test.template.ejs',
            inject: 'body',
            filename: 'test.html',
            chunks: ['shared']
        }),

        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })
    ],

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