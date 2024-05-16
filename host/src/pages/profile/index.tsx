
import React, { Suspense } from "react";
import PageLoader from "../../components/page-loader";
import { importRemote } from '@dream.mf/utilities';

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
        <Suspense fallback={<PageLoader />}>
            <ProfileRemote />
        </Suspense>
    );
}

export default ProfilePage;
