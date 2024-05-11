import App from "./_app";
import * as ReactDOMClient from "react-dom/client";
import { init } from "@module-federation/enhanced/runtime";

init({
	name: "container",
	remotes: [],
});

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(<App />);
