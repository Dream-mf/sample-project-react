
import React, { Suspense } from "react";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../layout";
import { DreamMFAuthGuard } from "@dream.mf/oidc";
import PageLoader from "../../components/page-loader";


const ProfileRemote = React.lazy(() =>
    importRemote({
        remoteUrl: 'http://localhost:3003/remote.js',
        scope: 'remote_profile',
        module: 'Application',
        remoteUrlFallback: null
    })
);

const ProfileHealthRemote = React.lazy(() =>
    importRemote({
        remoteUrl: 'http://localhost:3003/remote.js',
        scope: 'remote_profile',
        module: 'Health',
        remoteUrlFallback: null
    })
);

const ProfilePage = () => {
    return (
        <Layout>
            <DreamMFAuthGuard fallback={<>Hold tight, Logging you in...</>}>
                <Suspense fallback={<PageLoader />}>
                    <ProfileRemote />
                    <h5>Package Details</h5>
                    <ProfileHealthRemote />
                </Suspense>
            </DreamMFAuthGuard>
        </Layout>
    );
}

export default ProfilePage;
