const { withBaseRspack } = require("@dream.mf/bundlers");
const { withZephyr } = require('zephyr-webpack-plugin');

const baseConfig = withBaseRspack({
	devServer: { port: 3000 },
	federationConfig: { name: "container" },
}, true);

const zephyrOptions = {
    app: {
        org: 'dream-mf',
        project: 'dream-mf-sample-application',
        name: 'dream-mf-sample-application',
        version: '3.0.0',
    },
    mfConfig: {
        name: 'dream-mf-host-application',
        filename: null,
        exposes: null,
        remotes: ['Home', 'Profile', 'Sample'],
        shared: null
    }
};

module.exports = withZephyr(zephyrOptions)(baseConfig);
