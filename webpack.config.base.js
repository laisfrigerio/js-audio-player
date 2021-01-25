const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'resources', 'styles', 'app.scss'),
        index: path.resolve(__dirname, 'resources', 'scripts', 'index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'resources', 'templates', 'pages', 'index.pug'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'resources', 'static', 'images'),
                    to: 'images'
                },
                {
                    from: path.resolve(__dirname, 'resources', 'static', 'audios'),
                    to: 'audios'
                }
            ]
        })
    ]
}