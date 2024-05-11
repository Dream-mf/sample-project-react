// @ts-check

const { defineConfig } = require("@rspack/cli");
const { withBaseRSPack } = require("../.rspack/config");

const config = defineConfig(
	withBaseRSPack(
		{
			devServer: { port: 3000 },
			federationConfig: { name: "container" },
		},
		true
	)
);
module.exports = config;
