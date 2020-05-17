import { Dispatch } from "redux";
import axios from 'axios'
import { AppActions } from "./AppActionTypes";
import { DEFAULT_URL } from "../../config";
import { Address } from "../types/Address";

export const FETCH_CUST_ADDRESS_REQUEST = 'FETCH_CUST_ADDRESS_REQUEST';
export const FETCH_CUST_ADDRESS_SUCCESS = 'FETCH_CUST_ADDRESS_SUCCESS';
export const FETCH_CUST_ADDRESS_FAILURE = 'FETCH_CUST_ADDRESS_FAILURE';

export interface FetchCustAddressesSuccessAction  {
  type: typeof FETCH_CUST_ADDRESS_SUCCESS;
  payload: {
    addresses: Address[]
  }
}

export interface FetchCustAddressesFailureAction {
  type:typeof FETCH_CUST_ADDRESS_FAILURE;
}

const createFetchAddressSuccessAction = (addresses: Address[]): AppActions => ({
  type: FETCH_CUST_ADDRESS_SUCCESS,
  payload: {
    addresses,
  },
});

const createFetchAddressFailureAction = (): AppActions => ({
  type: "FETCH_CUST_ADDRESS_FAILURE",
});

export function fetchCustAddresses(uid: number) {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      const { data: { data } } = await axios({
        method: 'GET',
        url: `${DEFAULT_URL}/customers/${uid}`,
      });
      
      const addresses: Array<Address> = data.addresses;

      return dispatch(createFetchAddressSuccessAction(addresses));
    } catch (err) {
      return dispatch(createFetchAddressFailureAction());
    }
  }
}

export type AddressActionTypes = FetchCustAddressesSuccessAction | FetchCustAddressesFailureAction;
