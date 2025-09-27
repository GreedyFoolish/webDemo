const { resolve } = require("node:path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        list: './src/list/index.js',
        detail: './src/detail/index.js'
    },
    output: {
        publicPath: '/',
        filename: 'js/[name]-[chunkhash:8].js',
        path: resolve(__dirname, 'dist')
    },
    stats: {
        modules: false,
        colors: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/list.html',
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({
            template: './public/detail.html',
            filename: 'detail.html',
            chunks: ['detail']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/*.html']
                    },
                    to: resolve(__dirname, 'dist')
                }
            ]
        })
    ]
}