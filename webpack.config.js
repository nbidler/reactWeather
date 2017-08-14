module.exports = {
    //point of entry for webpack to look for
    entry: './app/app.jsx',
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
            openWeatherMap: 'app/api/openWeatherMap.jsx'
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