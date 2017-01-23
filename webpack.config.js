var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app'],
    output: {
        path: path.resolve('build/js'), // This is a virtual path
        publicPath: '/public/assets/js/', // Physical path for the bundle.js stated in the index.html
        filename: 'bundle.js' 
    },

    devServer: {
        contentBase: 'public'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    watch: true
}