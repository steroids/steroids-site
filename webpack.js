const path = require('path');

const STEROIDS_PATH = '../../dev';

require('@steroidsjs/webpack').config({
    inlineSvg: true,
    port: 9991,
    inlineSvg: true,
    webpack: {
        resolve: {
            alias: {
                '@steroidsjs/core': path.resolve(__dirname, '../react/src'),
                '@steroidsjs/bootstrap': path.resolve(__dirname, '../react-bootstrap/src'),
            },
        },
    },
});
