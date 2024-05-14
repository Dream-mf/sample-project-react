import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import importRemote from "../../utilities/dynamic-remotes";
import Layout from "../../layout";

// @ts-ignore
const SampleRemote = React.lazy(() =>
	importRemote({
		configApiUrl: process.env.CONFIG_API!,
		remoteName: "Sample",
		scope: "remote_sample",
		module: "Application",
		remoteUrlFallback: null,
	})
);

const SamplePage = () => {
	let { id } = useParams();
	return (
		<Layout>
			<Suspense>
				<SampleRemote id={id} />
			</Suspense>
		</Layout>
	);
};

export default SamplePage;
