import React from 'react';
import { Address } from '../../../../store/types/Address';

interface Props {
  address: Address;
}

function AddressList(props: Props): JSX.Element {
  const address: Address = props.address;

  return (
    <div style={{ marginBottom: '2%' }}>
      street: {address.street} <br />
      city: {address.city} <br />
      state: {address.state} <br />
      country: {address.country} <br />
      zip: {address.zip} <br />
      status: {address.active ? 'selected' : 'not selected'}
    </div>
  );
}

export default AddressList;
