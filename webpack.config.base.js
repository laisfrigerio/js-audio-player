const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'resources', 'styles', 'app.scss'),
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'resources', 'templates', 'pages', 'index.pug'),
            filename: 'index.html',
        }),
    ]
}