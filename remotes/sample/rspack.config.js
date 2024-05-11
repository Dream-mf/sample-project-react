// @ts-check

const { withBaseRSPack } = require("../../.rspack/config");

const config = withBaseRSPack(
	{
		devServer: { port: 3002 },
		federationConfig: {
			name: "remote_sample",
			exposes: {
				"./Application": "./src/_app",
				"./Health": "./src/_health",
			},
		},
	},
	true
);
module.exports = config;
