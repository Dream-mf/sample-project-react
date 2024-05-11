// @ts-check

const { withBaseRSPack } = require("../../.rspack/config");

const config = withBaseRSPack(
	{
		devServer: { port: 3003 },
		federationConfig: {
			name: "remote_profile",
			exposes: {
				"./Application": "./src/_app",
				"./Health": "./src/_health",
			},
		},
	},
	true
);
module.exports = config;
