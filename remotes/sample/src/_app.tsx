import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { DreamMFLogClient } from '@dream.mf/logging';
import { Typography } from "@mui/material";

const Sample = ({ id }) => {
  
  useEffect(() => {
    DreamMFLogClient.logPageView({ page: 'Sample' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Microfrontends | Sample</title>
      </Helmet>
      <div>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Remote App - Sample
        </Typography>
        <p>This is the sample remote application.</p>
        <p>Parameter: {id || 'No id found'} </p>
      </div>
    </>
  );
}

export default Sample;
