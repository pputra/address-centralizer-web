import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustAddresses } from '../../store/actions/address.action';
import { AddressReducerState } from '../../store/types/AddressReducerState';
import  AddressList from './components/AddressList';
import './styles.css';

function HomePage(): JSX.Element {
  const addressReducerState: AddressReducerState = useSelector(state => state.addressReducer);
  const dispatch = useDispatch();

  function onFetchCustAddresses(): void {
    dispatch(fetchCustAddresses(1));
  }

  useEffect(() => {
    onFetchCustAddresses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <AddressList addresses={addressReducerState.addresses} />
    </div>
  );
}

export default HomePage;
