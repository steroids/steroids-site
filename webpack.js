const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const PATH_TO_DOCS_RU = 'public/docs/ru';
const PATH_TO_DOCS_EN = 'public/docs/en';

const getWebpackConfig = (isSSR = false) => ({
    resolve: {
        alias: {
            '@docsRu': path.resolve(__dirname, PATH_TO_DOCS_RU),
            '@docsEn': path.resolve(__dirname, PATH_TO_DOCS_EN),
        },
    },
    externals: [
        isSSR && webpackNodeExternals({
            allowlist: [/\.(?!(?:tsx?|jsx?|json)$).{1,5}$/i, /^lodash/, /^@steroidsjs/],
        }),
    ].filter(Boolean),
    module: {
        rules: {
            ts: {
                exclude: /\.\/node_modules\/(?!steroidsjs\/core\/).*/,
            },
        },
    },
});

require('@steroidsjs/webpack').config({
    port: process.env.APP_SSR_PORT || 9991,
    inlineSvg: true,
    ssr: getWebpackConfig(true),
    languages: ['ru', 'en'],
    webpack: getWebpackConfig(),
});
