/* eslint-disable no-undef */
var devPlugins = {},
    productionPlugins = {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    };

module.exports = {
    plugins: process.env.HUGO_ENVIRONMENT === 'production' ? productionPlugins : devPlugins
};
