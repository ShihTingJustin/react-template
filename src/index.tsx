import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@Components/button';
import '@Style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div>
      <Button>App</Button>
    </div>
  </React.StrictMode>
);
