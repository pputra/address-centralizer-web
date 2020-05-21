import React from 'react';
import { Button, Modal as ModalReactStrap, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  title?: string;
  submitLabel?: string;
  submitFn?: () => void;
  cancelLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

const Modal = ({
  isOpen,
  toggle,
  title,
  submitLabel,
  submitFn,
  cancelLabel,
  className,
  children,
}: Props): JSX.Element => (
  <div>
    <ModalReactStrap isOpen={isOpen} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submitFn}>
          {submitLabel}
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          {cancelLabel}
        </Button>
      </ModalFooter>
    </ModalReactStrap>
  </div>
);

export default Modal;
