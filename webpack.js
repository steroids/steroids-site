const webpackNodeExternals = require('webpack-node-externals');

require('@steroidsjs/webpack').config({
    port: process.env.APP_SSR_PORT || 9991,
    inlineSvg: true,
    ssr: {
        externals: [
            webpackNodeExternals({
                allowlist: [/\.(?!(?:tsx?|jsx?|json)$).{1,5}$/i, /^lodash/, /^@steroidsjs/],
            }),
        ],
        module: {
            rules: {
                ts: {
                    exclude: /\.\/node_modules\/(?!steroidsjs\/core\/).*/,
                },
            },
        },
    },
    languages: ['ru', 'en'],
});
