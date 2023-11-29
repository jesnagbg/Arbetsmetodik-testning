import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {MantineProvider} from '@mantine/core';
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
