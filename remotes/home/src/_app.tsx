import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { DreamMFLogClient } from '@dream.mf/logging';

const App = () => {
  useEffect(() => {
    DreamMFLogClient.logPageView({ page: "Home" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Microfrontends | Home</title>
      </Helmet>
      <div>
        <h2>Remote App - Home</h2>
        <p>This is the home remote application.</p>
      </div>
    </>
  );
};

export default App;
