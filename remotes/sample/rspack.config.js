const { withBaseRspack } = require("@dream.mf/bundlers");
const { withZephyr } = require('zephyr-webpack-plugin');

const baseConfig = withBaseRspack({
	devServer: { port: 3002 },
	federationConfig: {
		name: "remote_sample",
		exposes: {
			"./Application": "./src/_app",
			"./Health": "./src/_health",
		},
	},
}, true);

const zephyrOptions = {
    app: {
        org: 'dream-mf',
        project: 'dream-mf-sample-application',
        name: 'dream-mf-sample-application',
        version: '3.0.0',
    },
    mfConfig: {
        name: 'dream-mf-remote-sample',
        filename: 'remote.js',
        exposes: ['_Application', '_Health'],
        remotes: null,
        shared: null
    }
};

module.exports = withZephyr(zephyrOptions)(baseConfig);
