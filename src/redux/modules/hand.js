const initialState = {
  cards: [],
  nextId: 0,
};

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
    default:
      return state;
  }
};