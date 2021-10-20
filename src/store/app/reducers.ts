import {combineReducers} from 'redux';

import {photos} from '../photos/reducers';

export const appReducers = combineReducers({
  photos,
});
