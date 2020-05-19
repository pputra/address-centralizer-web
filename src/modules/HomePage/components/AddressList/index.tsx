import React, { Fragment } from 'react';
import AddressCard from '../AddressCard';
import { Address } from '../../../../store/types/Address';

interface Props {
  addresses: Address[]
}

function AddressList(props: Props): JSX.Element {
  const addresses: Address[] = props.addresses;

  return (
    <Fragment>
      {addresses.map((el) => (
        <AddressCard address={el} />
      ))}
    </Fragment>
  );
}

export default AddressList;
