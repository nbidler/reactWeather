//Part 1 - how to make sure webpack understands '$' means 'jquery'
var webpack = require('webpack');

module.exports = {
    //point of entry for webpack to look for js files
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'],
    //key-value pairs where
    //  key - module name
    //  value - the variable name we want available in our 'external script' files
    externals: {
        jquery: 'jQuery'
    },
    //
    plugins: [
        //Part 2 - how to make sure webpack understands '$' means 'jquery'
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],

    //output to
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    //what to resolve
    resolve: {
        //where to look, i.e. HelloReactWebPack directory
        root: __dirname,
        //what 'require' calls are an alias for another file, functionally this is just shorthand for other files
        alias: {
            Main: 'app/components/main.jsx',
            Nav: 'app/components/nav.jsx',
            Weather: 'app/components/weather.jsx',
            WeatherForm: 'app/components/weatherForm.jsx',
            WeatherMessage: 'app/components/weatherMessage.jsx',
            About: 'app/components/about.jsx',
            Examples: 'app/components/examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            errorModal: 'app/components/errorModal.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extentions: ['', '.js', '.jsx']
    },
    //what to load, from what files, and what to exclude
    module: {
        loaders: [
            {
                //what to load
                loader: 'babel-loader',
                //presets tell babel what to compile our code for react in
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                //what files to apply this to
                test: /\.jsx?$/,
                //what to exclude
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};