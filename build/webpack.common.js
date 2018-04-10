const webpack = require('webpack')
const { resolve } = require('./utils')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcssConfig = require('./config/postcss.config')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        // vendor: Object.keys(require('../package').dependencies)
        //     .filter(d => !(d in vendorIgnore)),

        app: './src/main.ts',
        // polyfills: './src/polyfills.ts'
    },
    optimization: {
        runtimeChunk: true,
        concatenateModules: true,
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    reuseExistingChunk: true,
                },
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    priority: 10,
                    enforce: true,
                    minChunks: 2
                }
            }
        }
    },

    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: '[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },

    resolve: {
        extensions: [
            '.js', '.ts', '.html'
        ],
        alias: {
            '_npm': resolve('node_modules'),
            '_components': resolve('src/components'),
            '_src': resolve('src'),
            '_shared': resolve('src/shared'),
            '_scss': resolve('src/assets/sass'),
            '_img': resolve('src/assets/img'),
            '@env': resolve('src/environments')
        }
    },

    devServer: {
        contentBase: resolve('dist'),
        historyApiFallback: true,
        open: true
    },

    module: {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(ts|js)$/,
                loaders: [
                  'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                // loader: 'to-string-loader!css-loader!postcss-loader'
                use: [
                    'to-string-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => require('autoprefixer')
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                include: resolve('src/components'),
                use: [
                    'to-string-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: resolve('build/config/postcss.config.js')
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: resolve('src/assets'),
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: resolve('build/config/postcss.config.js')
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'imgs/[name].[ext]?[hash]'
                }
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'fonts/',    // where the fonts will go
                    }
                }]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.ProgressPlugin(),

        // new config.optimization.splitChunks({
        //     names: ['vendor', 'polyfills'],
        //     minChunks: Infinity
        // }),
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
            filename: 'index.html',
            showErrors: true,
            path: resolve('dist'),
            hash: true
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            path.resolve(__dirname, '../src')
        )
    ],
    recordsOutputPath: path.join(__dirname, "dist", "records.json")
};