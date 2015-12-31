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
import s from './Pick.scss';
import withStyles from '../../decorators/withStyles';
import WhiteCard from '../WhiteCard';
import BlackCard from '../BlackCard';

@withStyles(s)
@connect(
  state => ({
    black: state.gamePhase.black,
    whites: state.hand.cards,
    selected: state.gamePhase.selected,
  })
)
class Pick extends Component {
  
  static propTypes = {
    black: PropTypes.object.isRequired,
    whites: PropTypes.array.isRequired,
  };

  render() {
    const black = this.props.black;
    const whites = {};
    for (let white of this.props.whites) {
      whites[white.key] = white;
    }
    return (
      <div className={s.root}>
        <div className={s.heading}>Pick</div>
        <ul className={s.container}>
          <BlackCard text={black.text} deck={black.deck} pick={black.pick} />
          {this.props.selected.map((c) => <WhiteCard key={c.key} text={whites[c.key].text} deck={whites[c.key].deck} />)}
        </ul>
      </div>
    );
  }

}

export default Pick;
