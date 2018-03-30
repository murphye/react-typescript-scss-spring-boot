import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// Service Workers cause issues with URLs from the local server that is outside the scope of the React application
// For example, legacy/index.html would be captured by the Service Worker and not sent to the server.
// Since create-react-app adds Service Worker by default, I am leaving this here but commented out.
// import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
// See above comment on Service Workers.
// registerServiceWorker();
