import '@xyflow/react/dist/style.css';

import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { CONFIG } from './config';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter basename={CONFIG.site.basePath}>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
