/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import MainPage from './components/MainPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App>{component}</App>;
  });

  on('/', async () => <MainPage />);

  on('error', (state, error) => state.statusCode === 404 ?
    <App error={error}><NotFoundPage /></App> :
    <App error={error}><ErrorPage /></App>
  );
});

export default router;
