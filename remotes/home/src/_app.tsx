import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { DreamMFLogClient } from '@dream.mf/logging';
import { Typography } from "@mui/material";

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
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Remote App - Home
        </Typography>
        <Typography variant="body1">
          This is the home remote application.
        </Typography>
      </div>
    </>
  );
};

export default App;
