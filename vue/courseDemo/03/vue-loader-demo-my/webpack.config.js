//导出模块
//dirname 指当前路径
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    bable: {
        presets: ['es2015'],
        plugins: ['trnasfrom-runtime']
    }

}