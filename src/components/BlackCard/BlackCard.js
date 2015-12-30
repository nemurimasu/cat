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
    deck: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className={s.root}>
        <div className={s.container}>
          <div className={s.text}>
            {this.props.text}
          </div>
          <div className={s.deck}>
            {this.props.deck}
          </div>
        </div>
      </li>
    );
  }

}

export default BlackCard;
