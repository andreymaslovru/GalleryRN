import {createStore, applyMiddleware} from 'redux';
import {appReducers} from './app/reducers';
import {Store} from './types';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const rootReducer = () => {
  return (state: Store | undefined, action: any) => {
    if (action.type === 'RESET_STATE') {
      state = undefined;
    }
    return appReducers(state, action);
  };
};

export const store = createStore(
  rootReducer(),
  applyMiddleware(...middlewares),
);
