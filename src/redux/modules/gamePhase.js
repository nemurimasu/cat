const SELECT = 'gamePhase/select';
const DESELECT = 'gamePhase/deselect';

const initialState = {
  mode: 'wait',
};

export default function gamePhase(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT:
      if (state.mode !== 'pick' || state.black.pick <= state.selected.length) {
        return state;
      }
      return Object.assign({}, state, {selected: [...state.selected, {key:action.whiteId}]});
    case DESELECT:
      if (state.mode !== 'pick') {
        return state;
      }
      const index = state.selected.findIndex((c) => c.key === action.whiteId);
      if (index === -1)
      {
        return state;
      }
      return Object.assign({}, state, {selected: [...state.selected.slice(0, index), ...state.selected.slice(index+1)]});
    default:
      return state;
  }
};

export function selectWhite(whiteId) {
  return {
    type: SELECT,
    whiteId,
  };
};

export function deselectWhite(whiteId) {
  return {
    type: DESELECT,
    whiteId,
  };
}