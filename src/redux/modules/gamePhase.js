const SELECT = 'gamePhase/select';
const DESELECT = 'gamePhase/deselect';
const SUBMIT = 'gamePhase/submit';

const initialState = {
  mode: 'wait',
};

export default function gamePhase(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT:
      return Object.assign({}, state, {selected: [...state.selected, action.whiteId]});
    case DESELECT:
      return Object.assign({}, state, {selected: state.selected.filter(c => c !== action.whiteId)});
    case SUBMIT:
      return Object.assign({}, state, {mode: 'wait'});
    default:
      return state;
  }
};

export function selectWhite(whiteId) {
  return (dispatch, getState) => {
    const { hand, gamePhase } = getState();
    if (gamePhase.mode !== 'pick' || gamePhase.black.pick <= gamePhase.selected.length ||
      ~gamePhase.selected.findIndex(c => c === whiteId) ||
      !~hand.cards.findIndex(c => c.key === whiteId)) {
      return;
    }
    dispatch({
      type: SELECT,
      whiteId,
    });
  };
};

export function deselectWhite(whiteId) {
  return (dispatch, getState) => {
    const state = getState().gamePhase;
    if (state.mode !== 'pick' || !~state.selected.findIndex(c => c === whiteId)) {
      return;
    }
    dispatch({
      type: DESELECT,
      whiteId,
    });
  };
};

export function submit() {
  return (dispatch, getState) => {
    const state = getState().gamePhase;
    if (state.mode !== 'pick' || state.black.pick !== state.selected.length) {
      return;
    }
    dispatch({ type: SUBMIT, selected: state.selected });
  };
};