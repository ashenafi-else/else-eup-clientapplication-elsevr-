var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production' ;

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        patchedSdk: './patchedSdk.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
        compress: true,
        hotOnly: true,
        inline: true,
        https: false,
        host: '0.0.0.0',
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin(
            [{
                from: path.resolve(__dirname, './src/'),
                to: path.resolve(__dirname, './dist/')
            }],
            { ignore: ['*.js']}
        ),
        new CaseSensitivePathsPlugin()
    ]
};
