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
                '*.less',
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
        filename: "[name]/style.js",
    },
    module: {
        loaders: [
            {test: /\.css/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.less/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.html/, loader: 'vue-template-compiler'},
            {test: /\.(jpe?g|png|gif|svg)$/, loader: 'file?name=img/[name].[ext]' },
        ]
    },
    plugins: plugins

};
