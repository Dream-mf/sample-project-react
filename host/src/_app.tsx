import { BrowserRouter } from "react-router-dom";
import Routing from "./_routing";
import { useEffect } from "react";
import { DreamMFLogClient, DreamMFLogListener, logConfig } from '@dream.mf/logging';

const HostRouter = () => {
  const config = () => {
		return {
			...logConfig,
			logGeneral: (detail) => { console.log('general', detail); },
			logPageView: (detail) => { console.log('pageView', detail); },
			logFetch: (detail) => { console.log('fetch', detail); },
			debug: true,
		};
	};

  useEffect(() => {
		DreamMFLogClient.logGeneral({ message: 'App Loaded' });
	}, [])

  return (
    <>
      <DreamMFLogListener config={config()} />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default HostRouter;