import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {appReducers} from './app/reducers';

export type Store = ReturnType<typeof appReducers>;
export interface IAction {
  type: string;
  payload: any;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Store,
  unknown,
  Action<string>
>;
export type AppDispatch = ThunkDispatch<Store, null, Action<string>>;
