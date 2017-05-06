var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
var cssDev = [ "style-loader","css-loader","sass-loader"];
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
const cssProd = ExtractTextPlugin.extract({
    fallback:"style-loader",
    loader:["css-loader","sass-loader"],
    publicPath:"/dist"
});
var loadCss = isProd? cssProd:cssDev;

var bootstrapConfig = isProd? bootstrapEntryPoints.prod:bootstrapEntryPoints.dev;

const extractLess = new ExtractTextPlugin({
    filename:"[name].[contenthash].css"
});

module.exports = {
    entry:/*['react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates*/
        {

        app:'./components/index.js',
        bootstrap:bootstrapConfig},
   // ],
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'[name].js',
        publicPath:'/'
        // necessary for HMR to know where to load the hot update chunks

    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,

        hot:true
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg)$/,
                use:["url-loader?limit=8000"]
            },
            {
                test:/\.less$/,
                use:extractLess.extract({
                    use: [{
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles less to CSS
                    }]
                })
            },
            {
                test:/\.scss$/,
                use:loadCss
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' },

        ]
    },
    plugins:[
        extractLess,
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
}