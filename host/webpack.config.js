const { withBaseWebpack } = require("@dream.mf/bundlers");

module.exports = withBaseWebpack({
    devServer: { port: 3000 },
    federationConfig: { name: 'container' },
}, true);