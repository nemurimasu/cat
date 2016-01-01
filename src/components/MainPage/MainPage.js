/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import s from './MainPage.scss';
import withStyles from '../../decorators/withStyles';
import Czar from '../Czar';
import Hand from '../Hand';
import Pick from '../Pick';

@connect(
  state => ({
    gameMode: state.gamePhase.mode,
  })
)
@withStyles(s)
class MainPage extends Component {
  
  static propTypes = {
    gameMode: PropTypes.string.isRequired
  };

  render() {
    let topUi;
    if (this.props.gameMode === 'czar') {
      topUi = <Czar />;
    } else {
      topUi = <Hand />;
    }
    let bottomUi;
    if (this.props.gameMode === 'pick') {
      bottomUi = <Pick />;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          {topUi}
          {bottomUi}
        </div>
      </div>
    );
  }

}

export default MainPage;
