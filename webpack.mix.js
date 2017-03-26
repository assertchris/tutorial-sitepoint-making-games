let mix = require("laravel-mix")

// load babel presets for jsx files

mix.webpackConfig({
    "module": {
        "rules": [
            {
                "test": /jsx$/,
                "exclude": /(node_modules)/,
                "loader": "babel-loader" + mix.config.babelConfig(),
                "query": {
                    "presets": [
                        "react",
                        "es2015",
                    ],
                },
            },
        ],
    },
})

// set up front-end assets

mix.setPublicPath(__dirname + "/public")

mix.js(__dirname + "/assets/js/app.jsx", __dirname + "/public/js/app.js")
mix.sass(__dirname + "/assets/css/app.scss", __dirname + "/public/css/app.css")
mix.version()
