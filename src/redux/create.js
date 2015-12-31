import { createStore as _createStore } from 'redux';

export default function createStore(data) {

  const reducer = require('./modules/reducer');
  const store = _createStore(reducer, data);

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}