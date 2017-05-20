const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false
    },
    entry: {
        app: './src/app.js',
        styles: './src/styles/userstyles.scss'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/static/index.html' }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) =>
                // this assumes your vendor imports exist in the node_modules directory
                module.context && module.context.indexOf('node_modules') !== -1
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
};

module.exports = config;
