const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        lib: './src/lib.ts'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json' ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'AppLib'
    }
}