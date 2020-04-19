const path = require('path');
module.exports = {
  mode: 'development',
  entry: [path.join(__dirname, 'js', 'index'), path.join(__dirname, 'styles.scss')],
  watch: true,
  output: {
    path: path.join(__dirname),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'js')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
		},
		{
			test: /\.s[ac]ss$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
							name: '/css/[name].css',
					}
				},
				'extract-loader',

				'css-loader?-url',

				'sass-loader',
			],
		},]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};