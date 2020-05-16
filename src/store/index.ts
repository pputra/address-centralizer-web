import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeEnhancers } from './devTools';
import { userReducer } from './reducers/user.reducer';
import { AppActions } from './actions/AppActionTypes';

const combinedReducers = combineReducers({
  userReducer: userReducer,
});

export type AppState = ReturnType<typeof combinedReducers>;

export const store = createStore(
  combinedReducers,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
));
