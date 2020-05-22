import React, { useEffect, Suspense, lazy, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { fetchCustAddresses } from '../../store/actions/address.action';
import { AddressReducerState } from '../../store/types/AddressReducerState';
import './styles.css';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import AddressForm, { AddressFormProps } from './components/AddressForm';
import { useInput } from '../../hooks/useInput';

const AddressList = lazy(() => import('./components/AddressList'));

function HomePage(): JSX.Element {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);

  const addressReducerState: AddressReducerState = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();

  const { value: streetValue, bind: streetBind, reset: streetReset } = useInput('');
  const { value: cityValue, bind: cityBind, reset: cityReset } = useInput('');
  const { value: stateValue, bind: stateBind, reset: stateReset } = useInput('');
  const { value: countryValue, bind: countryBind, reset: countryReset } = useInput('');
  const { value: zipValue, bind: zipBind, reset: zipReset } = useInput('');

  function toggleModal(): void {
    setModalIsOpen(!isModalOpen);
  }

  function onFetchCustAddresses(): void {
    dispatch(fetchCustAddresses(1));
  }

  function handleNewAddressSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(streetValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(zipValue);
    resetAddressForm();
    toggleModal();
  }

  function resetAddressForm(): void {
    streetReset();
    cityReset();
    stateReset();
    countryReset();
    zipReset();
  }

  function createAddressFormProps(): AddressFormProps {
    const props: AddressFormProps = {
      street: {
        value: streetValue,
        bind: streetBind,
      },
      city: {
        value: cityValue,
        bind: cityBind,
      },
      state: {
        value: stateValue,
        bind: stateBind,
      },
      country: {
        value: countryValue,
        bind: countryBind,
      },
      zip: {
        value: zipValue,
        bind: zipBind,
      },
      handleSubmit: handleNewAddressSubmit,
    };
    return props;
  }

  useEffect(() => {
    onFetchCustAddresses();
    // eslint-disable-next-line
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
          <AddressForm {...createAddressFormProps()} />
        </Modal>
        <AddressList addresses={addressReducerState.addresses} />
      </Suspense>
    </div>
  );
}

export default HomePage;
