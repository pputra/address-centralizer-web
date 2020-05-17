import { AddressReducerState } from '../types/AddressReducerState';
import { AppActions } from '../actions/AppActionTypes';
import { 
  FETCH_CUST_ADDRESS_SUCCESS,
  FETCH_CUST_ADDRESS_FAILURE,
} from '../actions/address.action';

const defaultState: AddressReducerState = {
  addresses: [],
  success: true,
};

const addressReducer = (
  state = defaultState,
  action: AppActions
): AddressReducerState => {
  switch (action.type) {
    case FETCH_CUST_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: action.payload.addresses,
        success: true,
      };
    case FETCH_CUST_ADDRESS_FAILURE:
      return {
        ...state,
        addresses: [],
        success: false,
      };
    default:
      return state
  }
};

export { addressReducer };
