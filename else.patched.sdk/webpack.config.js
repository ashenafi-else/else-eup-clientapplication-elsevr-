var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        patchedSdk: './patchedSdk.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'patchedSdk.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(ttf|eot|otf|TTF)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9001,
        compress: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
