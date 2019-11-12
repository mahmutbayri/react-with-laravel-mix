const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

// mix.config.resourceRoot = 'src';

mix.config.webpackConfig.plugins = [
    new Dotenv()
];

mix.config.webpackConfig.watchOptions = {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/
};



mix.config.babelConfig = {
    plugins: [
        '@babel/plugin-proposal-class-properties',
    ]
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('src/js/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css')
    .sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/css');



/*
 |--------------------------------------------------------------------------
 | Examples
 |--------------------------------------------------------------------------
 */
mix.react('src/examples/clock.js', 'public/examples/js');
mix.react('src/examples/functional_component.js', 'public/examples/js');
mix.react('src/examples/rendering.js', 'public/examples/js');
mix.react('src/examples/events.js', 'public/examples/js');
mix.react('src/examples/filter-sort-table-ajax-data.js', 'public/examples/js');
mix.react('src/examples/generate_table.js', 'public/examples/js');
mix.react('src/examples/websocket.js', 'public/examples/js');



mix.react('src/examples/example-todo-list.js', 'public/examples/js');
mix.react('src/examples/drag_and_drop_example.js', 'public/examples/js');
mix.react('src/examples/example_movie_list.js', 'public/examples/js');
mix.react('src/js/javascriptsample.js', 'public/examples/js');
