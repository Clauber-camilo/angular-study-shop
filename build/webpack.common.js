const webpack = require('webpack'),
    {
        resolve
    } = require('./utils'),
    path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcssConfig = require('./config/postcss.config')

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        // vendor: Object.keys(require('../package').dependencies)
        //     .filter(d => !(d in vendorIgnore)),

        app: './src/main.ts',
        polyfills: './src/polyfills.ts'
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 chunks: "initial",
    //                 test: path.resolve(__dirname, "node_modules"),
    //                 name: "vendor",
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: -10,
                    minChunks: 2,
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },

    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [
            '.js', '.ts', '.html'
        ],
        alias: {
            '_npm': resolve('node_modules'),
            '_components': resolve('src/components'),
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
                test: /\.(eot|otf|ttf|woff|woff2)(\?v=[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'imgs/[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),

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
    ]
};