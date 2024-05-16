import React from "react";
import { useParams } from "react-router-dom";
import { importRemote, ImportRemoteOptions } from '@dream.mf/utilities';
import Layout from "../../layout";

// @ts-ignore
const HomeRemote = React.lazy(() =>
    importRemote({
        remoteUrl: 'http://localhost:3001/remote.js',
        scope: 'remote_home',
        module: 'Application',
        remoteUrlFallback: null
    })
);

const HomePage = () => {
    let { id } = useParams();
    return (<Layout><HomeRemote id={id} /></Layout>);
}

export default HomePage;