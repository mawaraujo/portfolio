import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';

const reducersCombined = combineReducers(reducers);

const store = createStore(
  reducersCombined,
  composeWithDevTools()
);

export default store;