import React from 'react';
import { Spinner } from 'reactstrap';

function Loading(): JSX.Element {
  return (
    <div>
      <Spinner color="dark" />
    </div>
  );
}

export default Loading;