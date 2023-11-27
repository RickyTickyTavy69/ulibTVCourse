import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfigurations} from "webpack-dev-server";
export function BuildDevServer(options: BuildOptions) : DevServerConfigurations {
    return {
        port: options.port,
        // автоматически открывает сайт с приложением в браузере
        open: true,
        // для того чтобы работал роутинг реакта - проксирование запросов через index.html
        historyApiFallback: true,
    }
}