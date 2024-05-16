import App from "./_app";
import * as ReactDOMClient from "react-dom/client";
import { init } from "@module-federation/enhanced/runtime";
import DynamicRemotes from "./utilities/dynamic-remotes-plugin";

const host = init({
	name: "container",
	remotes: [
		{
			name: "remote_sample",
			entry: "http://localhost:3002/mf-manifest.json",
		},
		{
			name: "remote_home",
			entry: "",
			alias: "Home",
		},
	],
});

host.registerPlugins([
	DynamicRemotes({
		baseUrl: process.env.CONFIG_API,
	}),
]);

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(<App />);
