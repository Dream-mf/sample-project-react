const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack({
		devServer: { port: 3000 },
		federationConfig: { name: "container" },
	},
	true
);

module.exports = config;
