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
        mode: "czar",
        black: {
          text: "_ + _ = _.",
          pick: 3,
          deck: "Base Set",
        },
        options: [
          [{text: "Coat hanger abortions.", deck: "Base Set"}, {text: "Man meat.", deck: "Base Set"}, {text: "Autocannibalism", deck: "Base Set"}],
          [{text: "Vigorous jazz hands.", deck: "Base Set"}, {text: "Flightless birds.", deck: "Base Set"}, {text: "Pictures of boobs.", deck: "Base Set"}],
          [{text: "Doing the right thing.", deck: "Base Set"}, {text: "The violation of our most basic human rights.", deck: "Base Set"}, {text: "Viagra&reg;.", deck: "Base Set"}],
          [{text: "Self-loathing.", deck: "Base Set"}, {text: "Spectacular abs.", deck: "Base Set"}, {text: "A balanced breakfast.", deck: "Base Set"}],
          [{text: "Roofies.", deck: "Base Set"}, {text: "Concealing a boner.", deck: "Base Set"}, {text: "Amputees.", deck: "Base Set"}],
          [{text: "The Big Bang.", deck: "Base Set"}, {text: "Former President George W. Bush.", deck: "Base Set"}, {text: "The Rev. Dr. Martin Luther King, Jr.", deck: "Base Set"}],
          [{text: "Smegma.", deck: "Base Set"}, {text: "Being marginalized.", deck: "Base Set"}, {text: "Cuddling.", deck: "Base Set"}],
          [{text: "Laying an egg.", deck: "Base Set"}, {text: "The Pope.", deck: "Base Set"}, {text: "Aaron Burr.", deck: "Base Set"}],
          [{text: "Genital piercings.", deck: "Base Set"}, {text: "Fingering.", deck: "Base Set"}, {text: "A bleached asshole.", deck: "Base Set"}],
          [{text: "Horse meat.", deck: "Base Set"}, {text: "Fear itself.", deck: "Base Set"}, {text: "Science.", deck: "Base Set"}],
        ]
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
