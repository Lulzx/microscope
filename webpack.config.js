module.exports = {
    entry: './app/microscope-react.jsx',

    output: {
        filename: 'microscope-react.js',
        path: __dirname + '/public/scripts'
    },

    module: {
        loaders: [
        //{
        //    test: /\.js$/,
        //    loader: ['babel'],
        //    exclude: /node_modules/,
        //    query: {
        //        presets: ['react']
        //    }
        //},
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
                //include: PATHS.app
            }
        ]
    },

    externals: {
        'react': 'React'
    }
};