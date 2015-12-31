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
import s from './Hand.scss';
import withStyles from '../../decorators/withStyles';
import WhiteCard from '../WhiteCard';

@withStyles(s)
@connect(
  state => ({
    cards: state.hand.cards,
  })
)
class Hand extends Component {
  
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={s.root}>
        <ul className={s.container}>
          {this.props.cards.map((c) => <WhiteCard key={c.key} text={c.text} deck={c.deck} selected={c.selected} />)}
        </ul>
      </div>
    );
  }

}

export default Hand;
