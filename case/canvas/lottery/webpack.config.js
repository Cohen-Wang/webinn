// nodeJs自带模块
const path = require('path');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextWebpackPlugin({
    filename: 'assets/css/index.css',// index.css -> 打包出来的文件名
});

module.exports = {

    mode: "development",

    devtool: "inline-source-map",

    entry: "./src/assets/js/index.ts",

    output: {
        path: path.resolve(__dirname + '/dist/assets'),
        filename: 'js/app.bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',// 指定打包出来的html文件的名字，默认：index.html
            template: 'src/index.html',// 指定一个html模板，也就是我们需要的html文件里的内容
            favicon: 'src/assets/favicon.ico'
        }),
        //new CleanWebpackPlugin(),
        //extractCSS,
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,// 匹配.css文件
            //     use: extractCSS.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader'],
            //     })
            // },
            {
                test: /\.(jpg|png|webp|gif|bmp|ico)$/,// 多种图片格式
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'res/images/[name].[hash:8].[ext]',// ext：表示后缀
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        open: true,// 当输入npm start后，直接打开（自动打开，不要手动复制localhost:8080）
        port: 8082,// 修改端口
        //contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist',
        //compress: true,
        //historyApiFallback: true,
        //hot: true,

    }


};