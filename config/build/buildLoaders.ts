import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function BuildLoaders(options: BuildOptions) : webpack.RuleSetRule[] {

    const cssLoader = {
            test: /\.css$/i,
            use: [
                 options.isDev? "style-loader" : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ],
            exclude: /node_modules/,
        }

    // если не использовать TypeScript то будет нужен babel-loader
    const TypeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        cssLoader,
        TypeScriptLoader,
    ]
}