import React from "react";
import { useParams } from "react-router-dom";
import { importRemote, ImportRemoteOptions } from '@dream.mf/utilities';
import Layout from "../../layout";

// @ts-ignore
const SampleRemote = React.lazy(() =>
    importRemote({
        remoteUrl: 'http://localhost:3002/remote.js',
        scope: 'remote_sample',
        module: 'Application',
        remoteUrlFallback: null
    } as ImportRemoteOptions)
);

const SamplePage = () => {
    let { id } = useParams();
    return (<Layout><SampleRemote id={id} /></Layout>);
}

export default SamplePage;