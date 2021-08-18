import { Configuration } from "webpack";
import { resolve } from "path";

const config: Configuration = {
    mode: "none",
    entry: {
        nodeHelloLambda: "./services/node-lambda/hello.ts",
    },
    target: "node",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.webpack.json",
                    },
                },
            },
        ],
    },
    externals: {
        "aws-sdk": "aws-sdk",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        libraryTarget: "commonjs2",
        path: resolve(__dirname, "build"),
        filename: "[name]/[name].js",
    },
};

export default config;
