const { withBaseRSPack } = require("@dream.mf/bundlers");
const { withZephyr } = require('zephyr-webpack-plugin');

const baseConfig = withBaseRSPack({
	devServer: { port: 3000 },
	federationConfig: { name: "container" },
}, true);

const zephyrOptions = {
    app: {
        org: 'dream-mf',
        project: 'Dream.mf Sample Project',
        name: 'Dream.mf Sample Project',
        version: '3.0.0',
    },
    mfConfig: {
        name: 'Dream.mf Sample Project Rspack Host',
        filename: null,
        exposes: null,
        remotes: null,
        shared: null
    }
};

module.exports = withZephyr(zephyrOptions)(baseConfig);
