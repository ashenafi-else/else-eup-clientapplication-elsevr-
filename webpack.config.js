const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/mainscreen/'),
                to: path.resolve(__dirname, './dist/mainscreen')
            },
            {
                from: path.resolve(__dirname, './src/remotecontrol/'),
                to: path.resolve(__dirname, './dist/remotecontrol')
            },
        ],
        {
            ignore: [
                '*.js',
                './templates',
            ],
        }),
    new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/config.js'),
                to: path.resolve(__dirname, './dist/')
            },
            {
                from: path.resolve(__dirname, './src/translations.js'),
                to: path.resolve(__dirname, './dist/')
            },
        ]),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
];

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.less/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
            {test: /\.html/, loader: 'vue-template-compiler'}
        ]
    },
    plugins: plugins

};
