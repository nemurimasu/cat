/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './WhiteCard.scss';
import withStyles from '../../decorators/withStyles';
import classNames from 'classnames';

@withStyles(s)
class WhiteCard extends Component {
  
  static propTypes = {
    text: PropTypes.string.isRequired,
    deck: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  };

  render() {
    let classes = {};
    classes[s.root] = true;
    classes[s.selected] = this.props.selected;
    return (
      <li className={classNames(classes)}>
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

export default WhiteCard;
