import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type EventTypes = React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLInputElement>;

interface FormAttrs {
  value: string;
  bind: {
    value: string;
    onChange: (e: EventTypes) => void;
  };
}

export interface AddressFormProps {
  street: FormAttrs;
  city: FormAttrs;
  state: FormAttrs;
  country: FormAttrs;
  zip: FormAttrs;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AddressForm({ street, city, state, country, zip, handleSubmit }: AddressFormProps): JSX.Element {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>street</Label>
        <Input type="street" name="street" {...street.bind} />
      </FormGroup>
      <FormGroup>
        <Label>city</Label>
        <Input type="city" name="city" {...city.bind} />
      </FormGroup>
      <FormGroup>
        <Label>state</Label>
        <Input type="state" name="state" {...state.bind} />
      </FormGroup>
      <FormGroup>
        <Label>country</Label>
        <Input type="country" name="country" {...country.bind} />
      </FormGroup>
      <FormGroup>
        <Label>zip</Label>
        <Input type="zip" name="zip" {...zip.bind} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default AddressForm;
