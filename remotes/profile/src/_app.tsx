import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { DreamMFLogClient } from '@dream.mf/logging';
import { useDreamAuth } from '@dream.mf/oidc';

const App = () => {
  const { user } = useDreamAuth();
  console.log('user', user);

  useEffect(() => {
    DreamMFLogClient.logPageView({ page: "Profile" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Microfrontends | Profile</title>
      </Helmet>
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active">Profile</li>
        </ol>
        <h2>My Profile</h2>
        <ul>
          <li>Nickname: { user?.profile.nickname }</li>
          <li>Email: { user?.profile.email }</li>
        </ul>
      </div>
    </>
  );
};

export default App;
