/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-core/polyfill';
import ReactDOM from 'react-dom';
import Router from './routes';
import Location from './core/Location';
import WebFont from 'webfontloader';
import createStore from './redux/create';

let cssContainer = document.getElementById('css');
const appContainer = document.getElementById('app');

const store = createStore(appContainer.__data || {});
delete appContainer.__data;

function render(state) {
  Router.dispatch(state, (newState, component) => {
    ReactDOM.render(component, appContainer);
  });
}

function run() {
  let currentLocation = null;
  let currentState = null;

  // Re-render the app when window.location changes
  Location.listen(location => {
    currentLocation = location;
    currentState = Object.assign({}, location.state, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      store,
    });
    render(currentState);
  });
}

const fontReady = new Promise((done, err) => {
  WebFont.load({
    google: {
      families: ['Roboto:500,500italic'],
    },
    active: done,
    inactive: err,
  });
}).catch(e => console.warn('failed to load fonts'));

const domReady = new Promise(done => {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    done();
  } else {
    document.addEventListener('DOMContentLoaded', done, false);
  }
});

Promise.all([fontReady, domReady]).then(run);