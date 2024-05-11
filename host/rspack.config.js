// @ts-check

const { withBaseRSPack } = require("../.rspack/config");

const config = withBaseRSPack(
	{
		devServer: { port: 3000 },
		federationConfig: { name: "container" },
	},
	true
);
module.exports = config;
