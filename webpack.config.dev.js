var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve('./dist'),
        filename: './[name].bundle.js'
    },
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
            },
            {
                test: /\.css$/,
                use: ['css-to-string-loader', 'css-loader']
                //use: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'global.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: function (a, b) {
                return b.names[0].length - a.names[0].length;
            }
        }),

        new ExtractTextPlugin('./styles.css'),
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            }
        ]),
    ],
    devServer: {
        // historyApiFallback:false By Default.
        //Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.
        historyApiFallback: true,
        stats: 'minimal'
    }
}