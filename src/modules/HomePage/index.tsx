import React, { useEffect, Suspense, lazy, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { fetchCustAddresses } from '../../store/actions/address.action';
import { AddressReducerState } from '../../store/types/AddressReducerState';
import './styles.css';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

const AddressList = lazy(() => import('./components/AddressList'));

function HomePage(): JSX.Element {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);

  const addressReducerState: AddressReducerState = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();

  function toggleModal(): void {
    setModalIsOpen(!isModalOpen);
  }

  function onFetchCustAddresses(): void {
    dispatch(fetchCustAddresses(1));
  }

  useEffect(() => {
    onFetchCustAddresses();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Button color="secondary" onClick={toggleModal}>
          add a new address
        </Button>
        <Modal
          isOpen={isModalOpen}
          toggle={toggleModal}
          title={'new address'}
          submitLabel={'submit'}
          submitFn={toggleModal}
          cancelLabel={'cancel'}
        >
          this is modal body
        </Modal>
        <AddressList addresses={addressReducerState.addresses} />
      </Suspense>
    </div>
  );
}

export default HomePage;
