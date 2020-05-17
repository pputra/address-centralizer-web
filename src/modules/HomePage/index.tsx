import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustAddresses } from '../../store/actions/address.action';
import { AddressReducerState } from '../../store/types/AddressReducerState';
import './styles.css';
import Loading from '../components/Loading';

const AddressList = lazy(() => import('./components/AddressList'));

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
      <Suspense fallback={<Loading />}>
        <AddressList addresses={addressReducerState.addresses} />
      </Suspense>
    </div>
  );
}

export default HomePage;
