const mix = require('laravel-mix');

// mix.config.resourceRoot = 'src';

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
mix.react('src/js/javascriptsample.js', 'public/examples/js');
