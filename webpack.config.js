module.exports = {
    entry: './app/microscope-react.jsx',

    output: {
        filename: 'microscope-react.js',
        path: __dirname + '/public/scripts'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },

    externals: {
        'react': 'React'
    }
};