const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/client/',
    entry: './client.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 
                {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }]
            }
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
    }
};