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
          {key: 0, text: "Coat hanger abortions.", deck: "Base Set", selected: false},
          {key: 1, text: "Man meat.", deck: "Base Set", selected: false},
          {key: 2, text: "Autocannibalism.", deck: "Base Set", selected: false},
          {key: 3, text: "Vigorous jazz hands.", deck: "Base Set", selected: true},
          {key: 4, text: "Flightless birds.", deck: "Base Set", selected: false},
          {key: 5, text: "Pictures of boobs.", deck: "Base Set", selected: false},
          {key: 6, text: "Doing the right thing.", deck: "Base Set", selected: false},
          {key: 7, text: "The violation of our most basic human rights.", deck: "Base Set", selected: false},
          {key: 8, text: "Viagra®.", deck: "Base Set", selected: false},
          {key: 9, text: "Self-loathing.", deck: "Base Set", selected: false},
          //{key: 10, text: "Spectacular abs.", deck: "Base Set", selected: false},
          //{key: 11, text: "A balanced breakfast.", deck: "Base Set", selected: false},
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
        whites: [
          {key: 3, text: "Vigorous jazz hands.", deck: "Base Set"},
        ],
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
