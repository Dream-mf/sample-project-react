const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack(
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
