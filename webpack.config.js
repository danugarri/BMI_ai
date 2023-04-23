/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            // Babel
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // typescript
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // files
            {
                test: /\.(png|jpe?g|gif|zip)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
