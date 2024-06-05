import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { DreamMFLogClient } from "@dream.mf/logging";
import { DreamMFRequestInit, useDreamAuth } from "@dream.mf/oidc";

const App = () => {
  const { user, isAuthenticated } = useDreamAuth();

  useEffect(() => {
    DreamMFLogClient.logPageView({ page: "Profile" });
    const options = { useAuthentication: true } as DreamMFRequestInit;
    fetch(
      "https://run.mocky.io/v3/d6c90610-c9d9-4de3-8dc8-c8d76384e5c4",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        DreamMFLogClient.logFetch(res);
      });
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
        {isAuthenticated ? (
          <ul>
            <li>Nickname: {user?.profile.nickname}</li>
            <li>Email: {user?.profile.email}</li>
            <li>Id Token:</li>
            <li>
              <textarea
                readOnly
                disabled
                style={{ width: "100%", height: 200 }}
              >
                {user?.id_token}
              </textarea>
            </li>
          </ul>
        ) : (
          <>User is not logged in</>
        )}
      </div>
    </>
  );
};

export default App;
