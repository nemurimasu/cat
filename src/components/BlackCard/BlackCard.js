/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './BlackCard.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class BlackCard extends Component {
  
  static propTypes = {
    text: PropTypes.string.isRequired,
    pick: PropTypes.number.isRequired,
    deck: PropTypes.string.isRequired,
  };

  render() {
    let drawAction;
    if (this.props.pick > 2) {
      drawAction = <div>Draw <span className={s.actionNumber}>{this.props.pick - 1}</span></div>
    }
    return (
      <li className={s.root}>
        <div className={s.container}>
          <div className={s.text} dangerouslySetInnerHTML={{__html: this.props.text}} />
          <div className={s.bottom}>
            <div className={s.actions}>
              {drawAction}
              <div>
                Pick <span className={s.actionNumber}>{this.props.pick}</span>
              </div>
            </div>
            <div className={s.deck}>
              {this.props.deck}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default BlackCard;
