const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const OccurrenceOrderPlugin = new webpack.optimize.OccurrenceOrderPlugin();
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const NoEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./client/index.js'
	],
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		OccurrenceOrderPlugin,
		HotModuleReplacementPlugin,
		NoEmitOnErrorsPlugin
	]
}
