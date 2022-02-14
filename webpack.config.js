const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['', '.webpack.js', '.ts', '.tsx', '.js', '.json','.scss'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },

            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    performance: {
        hints: false,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
        }),
        new MiniCssExtractPlugin({ filename: "styles_bundle.css" })

    ],
}