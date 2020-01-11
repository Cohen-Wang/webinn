// nodeJs�Դ�ģ��
const path = require('path');
// ������
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextWebpackPlugin({
    filename: 'assets/css/index.css',// index.css -> ����������ļ���
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
            filename: '../index.html',// ָ�����������html�ļ������֣�Ĭ�ϣ�index.html
            template: 'src/index.html',// ָ��һ��htmlģ�壬Ҳ����������Ҫ��html�ļ��������
            favicon: 'src/assets/favicon.ico'
        }),
        //new CleanWebpackPlugin(),
        //extractCSS,
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,// ƥ��.css�ļ�
            //     use: extractCSS.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader'],
            //     })
            // },
            {
                test: /\.(jpg|png|webp|gif|bmp|ico)$/,// ����ͼƬ��ʽ
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'res/images/[name].[hash:8].[ext]',// ext����ʾ��׺
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
        open: true,// ������npm start��ֱ�Ӵ򿪣��Զ��򿪣���Ҫ�ֶ�����localhost:8080��
        port: 8082,// �޸Ķ˿�
        //contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist',
        //compress: true,
        //historyApiFallback: true,
        //hot: true,

    }


};