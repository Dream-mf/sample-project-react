import { BrowserRouter } from "react-router-dom";
import Routing from "./_routing";
import { useEffect } from "react";
import { LogClient, LogListener, logConfig } from "@shared/logging";
import { preloadRemote } from "@module-federation/enhanced/runtime";

const HostRouter = () => {
	preloadRemote([
		{
			nameOrAlias: "remote_sample",
			resourceCategory: "sync",
			exposes: ["./Application"],
		},
	]);

	const config = () => {
		return {
			...logConfig,
			logGeneral: (detail) => {
				console.log("general", detail);
			},
			logPageView: (detail) => {
				console.log("pageView", detail);
			},
			logFetch: (detail) => {
				console.log("fetch", detail);
			},
			debug: true,
		};
	};

	useEffect(() => {
		LogClient.logGeneral({ message: "App Loaded" });
	}, []);

	return (
		<>
			<LogListener config={config()} />
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</>
	);
};

export default HostRouter;
