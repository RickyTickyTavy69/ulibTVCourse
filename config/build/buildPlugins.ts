import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function BuildPlugins (path: string): webpack.WebpackPluginInstance[] {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new HTMLWebpackPlugin({
            template: path,
        }),
        new webpack.ProgressPlugin(),
    ]
}