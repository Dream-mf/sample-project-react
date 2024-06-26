import React from "react";
import { importRemote } from '@dream.mf/utilities';
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
    return (<Layout><HomeRemote /></Layout>);
}

export default HomePage;