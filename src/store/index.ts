import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/user.reducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './actions/AppActionTypes';

const combinedReducers = combineReducers({
  userReducer: userReducer,
});

export type AppState = ReturnType<typeof combinedReducers>;

export const store = createStore(
  combinedReducers,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
