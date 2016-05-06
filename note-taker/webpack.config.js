var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: './public/build/',
		filename: 'index.js'
	},
	devServer: {
		// reload on the fly
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: 'style!css!sass' },
			{
				test: /\.jsx?$/,
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