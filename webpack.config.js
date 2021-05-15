import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
export default {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        app: './app.ts'
    },
    watchOptions: {
        ignored: [ 'test/**', '**/node_modules' ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: resolve( './', 'dist' ),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.ts', '.js', '.html' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } ),
        new CopyPlugin( {
            patterns: [
                { from: './src/greetings/', to: './greetings/' },
                { from: './src/helloworld/', to: './helloworld/' }

            ],
        } )
    ]
};
