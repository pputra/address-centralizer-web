import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './modules/HomePage';
import NavBar from './modules/NavBar';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />
        <HomePage />
      </Fragment>
    </Provider>
  );
}

export default App;
