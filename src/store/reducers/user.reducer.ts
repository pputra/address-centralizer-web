import { User } from '../types/User';
import { AppActions } from '../actions/AppActionTypes';
import { SET_USER_DATA, CLEAR_USER_DATA } from '../actions/user.action';

export const defaultState: User = {
  firstName: 'firstName',
  lastName: 'lastName',
};

const userReducer = (
  state = defaultState,
  action: AppActions
): User => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER_DATA:
      return defaultState;
    default:
      return state
  }
};

export { userReducer };