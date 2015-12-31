import { combineReducers } from 'redux';

import hand from './hand';
import gamePhase from './gamePhase';

export default combineReducers({
  hand,
  gamePhase,
});