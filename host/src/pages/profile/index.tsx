
import React, { Suspense } from "react";
import PageLoader from "../../components/page-loader";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../layout";
import { DreamMFContextGuard } from "@dream.mf/oidc";

// @ts-ignore
const ProfileRemote = React.lazy(() =>
    importRemote({
        remoteUrl: 'http://localhost:3003/remote.js',
        scope: 'remote_profile',
        module: 'Application',
        remoteUrlFallback: null
    })
);

const ProfilePage = () => {
    return (
        <Layout>
            <DreamMFContextGuard fallback={<>Loading...</>}>
                <ProfileRemote />
            </DreamMFContextGuard>
        </Layout>
    );
}

export default ProfilePage;
