const { withBaseRSPack } = require("../.rspack/config");
//const { withBaseRSPack } = require("@dream.mf/bundlers");

const config = withBaseRSPack({
		devServer: { port: 3000 },
		federationConfig: { name: "container" },
	},
	true
);

module.exports = config;
