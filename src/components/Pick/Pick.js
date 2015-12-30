/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './Pick.scss';
import withStyles from '../../decorators/withStyles';
import WhiteCard from '../WhiteCard';
import BlackCard from '../BlackCard';

@withStyles(s)
class Pick extends Component {
  
  static propTypes = {
    black: PropTypes.object.isRequired,
    whites: PropTypes.array.isRequired,
  };

  render() {
    var black = this.props.black;
    return (
      <div className={s.root}>
        <div className={s.heading}>Pick</div>
        <ul className={s.container}>
          <BlackCard text={black.text} deck={black.deck} pick={black.pick} />
          {this.props.whites.map((c) => <WhiteCard key={c.key} text={c.text} deck={c.deck} />)}
        </ul>
      </div>
    );
  }

}

export default Pick;
