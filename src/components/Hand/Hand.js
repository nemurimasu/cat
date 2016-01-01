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
import * as gamePhaseActions from '../../redux/modules/gamePhase';

@withStyles(s)
@connect(
  state => ({
    cards: state.hand.cards,
    selected: state.gamePhase.selected,
  }),
  {selectWhite: gamePhaseActions.selectWhite}
)
class Hand extends Component {
  
  static propTypes = {
    cards: PropTypes.array.isRequired,
    selectWhite: PropTypes.func.isRequired,
  };

  render() {
    const selectedCards = new Set(this.props.selected);
    return (
      <div className={s.root}>
        <ul className={s.container}>
          {this.props.cards.map((c) => {
            const onClick = (event) => {
              this.props.selectWhite(c.key);
            };
            return <WhiteCard key={c.key} text={c.text} deck={c.deck} selected={selectedCards.has(c.key)} onClick={onClick} />;
          })}
        </ul>
      </div>
    );
  }

}

export default Hand;
