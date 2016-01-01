import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import s from './Czar.scss';
import withStyles from '../../decorators/withStyles';
import CzarOption from '../CzarOption';
import BlackCard from '../BlackCard';
import ReactMasonryComponent from 'react-masonry-component';
const Masonry = ReactMasonryComponent(React);

@withStyles(s)
@connect(
  state => ({
    black: state.gamePhase.black,
    options: state.gamePhase.options,
  })
)
class Czar extends Component {
  
  static propTypes = {
    black: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
  };

  render() {
    const black = this.props.black;
    return (
      <div className={s.root}>
        <div className={s.heading}>Vote</div>
        <Masonry className={s.container} elementType={'ul'}>
          <BlackCard text={black.text} deck={black.deck} pick={black.pick} />
          {this.props.options.map((o, i) => <CzarOption key={i} whites={o} />)}
        </Masonry>
      </div>
    );
  }

}

export default Czar;
