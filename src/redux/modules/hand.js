const initialState = {
  cards: [],
  nextId: 0,
};

//HACK: this comes from gamePhase.js and needs to match because we need to react to the same action here
const SUBMIT = 'gamePhase/submit';

export default function hand(state = initialState, action = {}) {
  switch (action.type) {
    case 'DRAW_CARD':
      return {
        cards: [
          ...state.cards,
          {
            id: state.nextId,
            text: action.text,
            deck: action.deck,
            selected: false,
          },
        ],
        nextId: state.nextId + 1,
      };
    case 'SELECT_CARD':
      return {
        cards: state.cards.map(c => c.id === action.id ? Object.assign({}, c, {selected: action.selected}) : c),
        nextId,
      };
    case SUBMIT:
      const drop = new Set(action.selected);
      return {
        cards: state.cards.filter(c => !drop.has(c.key)),
        nextId: state.nextId,
      };
    default:
      return state;
  }
};