var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new webpack.OldWatchingPlugin()
	]
};