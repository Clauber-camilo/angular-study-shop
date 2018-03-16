const webpack       = require('webpack')
    , merge         = require('webpack-merge')
    , commonConfig  = require('./webpack.common.js')
    , FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(commonConfig, {
    plugins: [
        // new DashboardPlugin()
        new FriendlyErrorsWebpackPlugin()
    ]
})