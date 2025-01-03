const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack(
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
