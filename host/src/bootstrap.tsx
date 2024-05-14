import App from "./_app";
import * as ReactDOMClient from "react-dom/client";
import { init, preloadRemote } from "@module-federation/enhanced/runtime";

init({
	name: "container",
	remotes: [
		{
			name: "remote_sample",
			entry: "http://localhost:3002/mf-manifest.json",
		},
	],
});

preloadRemote([
	{
		nameOrAlias: "remote_sample",
	},
]);

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(<App />);
