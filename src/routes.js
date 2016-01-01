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
import { Provider } from 'react-redux';
import createStore from './redux/create';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App>{component}</App>;
  });

  on('/:table/:player', async (state) => {
    let store = createStore({
      hand: {
        cards: [
          {key: 0, text: "Coat hanger abortions.", deck: "Base Set"},
          {key: 1, text: "Man meat.", deck: "Base Set"},
          {key: 2, text: "Autocannibalism.", deck: "Base Set"},
          {key: 3, text: "Vigorous jazz hands.", deck: "Base Set"},
          {key: 4, text: "Flightless birds.", deck: "Base Set"},
          {key: 5, text: "Pictures of boobs.", deck: "Base Set"},
          {key: 6, text: "Doing the right thing.", deck: "Base Set"},
          {key: 7, text: "The violation of our most basic human rights.", deck: "Base Set"},
          {key: 8, text: "Viagra&reg;.", deck: "Base Set"},
          {key: 9, text: "Self-loathing.", deck: "Base Set"},
          //{key: 10, text: "Spectacular abs.", deck: "Base Set"},
          //{key: 11, text: "A balanced breakfast.", deck: "Base Set"},
        ],
        nextId: 12,
      },
      gamePhase: {
        mode: "pick",
        black: {
          text: "Why can't I sleep at night?",
          deck: "Base Set",
          pick: 1,
        },
        selected: [ 3 ],
      }
    });
    return (
      <Provider store={store} key="provider">
        <MainPage />
      </Provider>
    );
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App error={error}><NotFoundPage /></App> :
    <App error={error}><ErrorPage /></App>
  );
});

export default router;
