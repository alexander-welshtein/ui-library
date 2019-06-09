// noinspection JSUnresolvedFunction, NodeJsCodingAssistanceForCoreModules
const path = require('path');

// noinspection JSUnresolvedVariable
module.exports = {
    entry: './source/main.ts',
    mode: "development",
    devtool: "inline-source-map",

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'generated/[name].[ext]',
                },
                exclude: /node_modules/
            },
            {
                test: /\.(svg)$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    output: {
        filename: 'generated/bundle.js',
        path: path.resolve(__dirname, './')
    }
};
