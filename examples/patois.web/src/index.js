import TAO, { AppCtx } from '@tao.js/core';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialAppCtx from './tao-init';
import Router, { route } from '@tao.js/router';

Router(TAO, {
  initAc: initialAppCtx
});

TAO.addInlineHandler({ t: 'Router', a: 'Init', o: 'Portal' }, () => {
  return new AppCtx('Routes', 'Configure', 'Portal', {
    // Routes: ['/', '/space'],
    // Configure: [
    Routes: [
      { Route: '/', Add: new AppCtx('Space', 'List') },
      {
        Route: {
          path: route`/${'t'}/${'term._id'}`,
          lowerCase: true
        },
        Add: new AppCtx('', 'View')
      }
    ]
  });
  // return new AppCtx('Route', 'Add', 'Portal', {
  //   Route: '/space',
  //   Add: new AppCtx('Space', 'View')
  // });
});

TAO.setAppCtx(initialAppCtx);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
