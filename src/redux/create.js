import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function createStore(data) {

  const reducer = require('./modules/reducer');
  const store = applyMiddleware(thunk)(_createStore)(reducer, data);

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}