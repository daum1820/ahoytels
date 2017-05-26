const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

const plugins = [
    HTMLWebpackPluginConfig,
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/), // To load only en|pt-br in momentjs
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
        sourceMap: true,
        minimize: false,
    }),
];

const loaders = [
    { test: /.js?$/, loader: 'babel-loader', include: [path.resolve('src')] },
    {
        test: /\.s?css$/,
        loaders: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader',
        }),
    },
    { test: /\.json$/, loader: 'json-loader' },
    { test: /\.html$/, loader: 'html-loader', query: { minimize: true } },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
    { test: /\.(mp3)$/i, loader: 'file-loader' },
];

module.exports = {
    entry: './src/index.js',
    output: { path: `${__dirname}/dist`, filename: 'build.js' },
    devtool: 'source-map',
    devServer: {
        clientLogLevel: 'info',
        historyApiFallback: true,
        inline: true,
    },
    resolve: {
        extensions: [
            '.js',
        ],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ]
    },
    module: {
        rules: loaders,
    },
    plugins,
};