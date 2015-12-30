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

const title = 'CAH';
const testCards = [
  {key: 0, text: "Coat hanger abortions.", deck: "Base Set"},
  {key: 1, text: "Man meat.", deck: "Base Set"},
  {key: 2, text: "Autocannibalism.", deck: "Base Set"},
  {key: 3, text: "Vigorous jazz hands.", deck: "Base Set"},
  {key: 4, text: "Flightless birds.", deck: "Base Set"},
  {key: 5, text: "Pictures of boobs.", deck: "Base Set"},
  {key: 6, text: "Doing the right thing.", deck: "Base Set"},
];

@withStyles(s)
class MainPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Hand cards={testCards} />
        </div>
      </div>
    );
  }

}

export default MainPage;
