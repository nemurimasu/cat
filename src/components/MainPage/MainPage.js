/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './MainPage.scss';
import withStyles from '../../decorators/withStyles';
import Hand from '../Hand';
import Pick from '../Pick';

const title = 'CAH';
const testCards = [
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
];
const testState = {
  mode: "pick",
  black: {
    text: "Why can't I sleep at night?",
    deck: "Base Set",
    pick: 1,
  },
  whites: [
    {key: 0, text: "Vigorous jazz hands.", deck: "Base Set"},
  ],
};

@withStyles(s)
class MainPage extends Component {

  render() {
    var bottomUi;
    if (testState.mode === 'pick') {
      bottomUi = <Pick black={testState.black} whites={testState.whites} />;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Hand cards={testCards} />
          {bottomUi}
        </div>
      </div>
    );
  }

}

export default MainPage;
