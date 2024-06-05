
import React, { Suspense } from "react";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../layout";
import { DreamMFContextGuard } from "@dream.mf/oidc";


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
            <DreamMFContextGuard fallback={<>Loading...</>}>
                <ProfileRemote />
                <h5>Package Details</h5>
                <ProfileHealthRemote />
            </DreamMFContextGuard>
        </Layout>
    );
}

export default ProfilePage;
