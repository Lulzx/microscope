module.exports = {
    entry: './app/microscope-react.js',

    output: {
        filename: 'microscope-react.js',
        path: __dirname + '/public/scripts'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel'],
            exclude: /node_modules/,
            query: {
                presets: ['react']
            }
        }]
    },

    externals: {
        'react': 'React'
    }
};