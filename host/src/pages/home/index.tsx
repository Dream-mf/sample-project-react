import React, { Suspense } from "react";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../layout";
import PageLoader from "../../components/page-loader";

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
    return (
    <Layout>
        <Suspense fallback={<PageLoader />}>
            <HomeRemote />
        </Suspense>
    </Layout>
    );
}

export default HomePage;