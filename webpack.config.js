const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    watch: true,
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './src/[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // favicon: "./public/fav-icon.ico",
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),
            filename: './src/template.html', 
            favicon: './favicon.ico'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          root: __dirname,
          src: path.resolve(__dirname, 'src'),
        },
      },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        historyApiFallback: true,
        hot: true,
        port: 8080,
    },
}