import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {BuildLoaders} from "./buildLoaders";
import {BuildResolvers} from "./buildResolvers";
import {BuildPlugins} from "./buildPlugins";
import {BuildDevServer} from "./buildDevServer";
export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        module: {
            rules: BuildLoaders(options),
        },
        resolve: BuildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true,
        },
        plugins: BuildPlugins(options.paths.html),
        devtool : options.isDev? "inline-source-map": undefined,
        devServer : options.isDev? BuildDevServer(options): undefined,
    }
}