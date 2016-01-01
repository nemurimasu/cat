import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import s from './CzarOption.scss';
import withStyles from '../../decorators/withStyles';
import WhiteCard from '../WhiteCard';

@withStyles(s)
class CzarOption extends Component {
  
  static propTypes = {
    whites: PropTypes.array.isRequired,
  };

  render() {
    const black = this.props.black;
    return (
      <li className={s.root}>
        <ul className={s.container}>
          {this.props.whites.map((c, i) => <li key={i} className={s.cardRoot} onMouseDown={(e) => e.preventDefault()}>
            <div className={s.cardContainer}>
              <div className={s.cardText} dangerouslySetInnerHTML={{__html: c.text}} />
              <div className={s.cardDeck}>
                {c.deck}
              </div>
            </div>
          </li>)}
        </ul>
      </li>
    );
  }

}

export default CzarOption;
