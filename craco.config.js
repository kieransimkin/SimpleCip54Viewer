var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
var path = require('path');
var minimist =require('minimist');
const webpack = require('webpack');
var argv = minimist(process.argv.slice(2));
const isTemplate = argv?.template ? true:false
module.exports = {
    webpack: {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash:8].js',
            sourceMapFilename: '[name].[hash:8].map',
            chunkFilename: '[id].[hash:8].js'
          },
          
        plugins: [
        new webpack.NormalModuleReplacementPlugin(
          /(.*)smartImport.json$/,
          function (resource) {
            resource.request = resource.request.replace(
              /smartImport.json/,
              isTemplate?`smartImportTemplate.json`:'smartImport.json'
            );
          }
        ),
        new webpack.NormalModuleReplacementPlugin(
          /(.*)metadata.json$/,
          function (resource) {
            resource.request = resource.request.replace(
              /metadata.json/,
              isTemplate?`metadataTemplate.json`:'metadata.json'
            );
          }
        ),
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js$/]),
        
            // ...
          ],
      configure: (webpackConfig, { env, paths }) => {
        paths.appBuild = webpackConfig.output.path = path.resolve(isTemplate?'template':'build');
        return webpackConfig;
      },
    },
  };