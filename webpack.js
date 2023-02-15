const path = require('path')

const STEROIDS_PATH_CORE = '../steroids/core/src'
const STEROIDS_PATH_BOOTSTRAP = '../steroids/bootstrap/src'

require('@steroidsjs/webpack').config({
    port: 9991,
    baseUrl: 'frontend/',
    inlineSvg: true,
    webpack: {
        resolve: {
            alias: {
                '@steroidsjs/core': path.resolve(__dirname, STEROIDS_PATH_CORE),
                '@steroidsjs/bootstrap': path.resolve(__dirname, STEROIDS_PATH_BOOTSTRAP),
            },
        },
    },
});