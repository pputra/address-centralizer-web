import { User } from '../types/User';

export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: User;
}

export interface ClearUserdataAction {
  type: typeof CLEAR_USER_DATA;
}

export type UserDataActionTypes = SetUserDataAction | ClearUserdataAction;
