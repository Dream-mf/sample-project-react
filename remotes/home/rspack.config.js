const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack(
	{
		devServer: { port: 3001 },
		federationConfig: {
			name: "remote_home",
			exposes: {
				"./Application": "./src/_app",
				"./Health": "./src/_health",
			},
		},
	},
	true
);

module.exports = config;
