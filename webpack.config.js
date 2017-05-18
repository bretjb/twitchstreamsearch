const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false
    },
    entry: {
        app: './src/app.js'
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
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
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
        ])
    ]
};

module.exports = config;
