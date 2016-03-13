var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
				],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
				],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				},
			},
			{
				loader: 'file',
				test: /\.(eot|svg|ttf|woff2?)$/,
			},
			{
				loader: 'style!css',
				test: /\.css$/,
			},
			{
				// Use CSS Modules for React components
				loader: 'style!css?modules!less',
				include: [
					path.resolve(__dirname, 'src/components'),
				],
				test: /\.less$/,
			},
			{
				// Regular LESS loader for general styles
				loader: 'style!css!less',
				include: [
					path.resolve(__dirname, 'src/styles'),
				],
				test: /\.less$/,
			},
		],
	},
};
