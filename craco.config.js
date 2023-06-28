var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
var path = require('path');
module.exports = {
    webpack: {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash:8].js',
            sourceMapFilename: '[name].[hash:8].map',
            chunkFilename: '[id].[hash:8].js'
          },
        plugins: [
            // Generates an `index.html` file with the <script> injected.
            
            // Inlines chunks with `runtime` in the name
        //new HTMLInlineCSSWebpackPlugin(),
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js$/]),
        
            // ...
          ],
          module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
              }
            ]
          },
      configure: (webpackConfig, { env, paths }) => {
        
        return webpackConfig;
      },
    },
  };