var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production' ;
var cssDev = ['style-loader', 'css-loader', 'less-loader'];
// var cssDev = ['css-hot-loader'].concat(ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     use: ['style-loader', 'css-loader', 'less-loader']
// }));
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'less-loader'],
    publicPath: '/dist'
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        mainscreen: './mainscreen/app.js',
        remotecontrol: './remotecontrol/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader?name=img/[name].[ext]',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        compress: true,
        hotOnly: true,
        inline: true
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin(
            [{
                from: path.resolve(__dirname, './src/mainscreen/'),
                to: path.resolve(__dirname, './dist/mainscreen')
            }, {
                from: path.resolve(__dirname, './src/remotecontrol/'),
                to: path.resolve(__dirname, './dist/remotecontrol')
            }],
            { ignore: ['*.js', '*.less']}
        )
    ]
};