import React from 'react';
import pkg from "../package.json";

const Health = () => (
  <pre style={{ padding: 5, background: '#e2e2e2', color: '#333' }}>
    {JSON.stringify(pkg, null, 4)}
  </pre>
);

export default Health;
