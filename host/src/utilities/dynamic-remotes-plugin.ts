import { FederationRuntimePlugin } from "@module-federation/runtime/types";

const fetchRemoteConfiguration = async (
	baseUrl: string,
	remoteName: string
) => {
	try {
		if (!baseUrl.endsWith("/")) {
			baseUrl = baseUrl + "/";
		}
		const response = await fetch(`${baseUrl}${remoteName}`);
		const result = response.json();
		return result;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

export interface ConfigurationServiceOptions {
	baseUrl: string;
}

export default function DynamicRemotes(
	config: ConfigurationServiceOptions
): FederationRuntimePlugin {
	return {
		name: "dream-dynamic-remotes-plugin",
		async beforeRequest(request) {
			const { id, options, origin } = request;
			const [remoteScope] = id.split("/");

			const remote = origin.options.remotes.find(
				(r) => r.name === remoteScope
			);

			const remoteUrl = await fetchRemoteConfiguration(
				config.baseUrl,
				remote.alias
			);

			remote["entry"] = remoteUrl.value;
			return request;
		},
	};
}
