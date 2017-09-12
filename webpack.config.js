const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].css');
const extractLESS = new ExtractTextPlugin('css/[name].css');

var plugins = [
    extractCSS,
    extractLESS,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin(
        [
            {
                from: path.resolve(__dirname, './src/mainscreen/'),
                to: path.resolve(__dirname, './dist/mainscreen')
            },
            {
                from: path.resolve(__dirname, './src/remotecontrol/'),
                to: path.resolve(__dirname, './dist/remotecontrol')
            }
        ],
        {
            ignore: [
                '*.js',
                '*.less',
                './templates'
            ]
        }),
    new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/config.js'),
                to: path.resolve(__dirname, './dist/')
            },
            {
                from: path.resolve(__dirname, './src/translations.js'),
                to: path.resolve(__dirname, './dist/')
            }
        ]),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
];

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        mainscreen: './mainscreen/css/style.less',
        remotecontrol: './remotecontrol/css/style.less'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8000,
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }))
            },
            {
                test: /\.less$/,
                use: ['css-hot-loader'].concat(extractLESS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '../'
                }))
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader?name=img/[name].[ext]',
            },
        ],
    },
    plugins: plugins

};
