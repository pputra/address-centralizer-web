import React, { useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { DEFAULT_URL } from '../../config';

function HomePage(): JSX.Element {
  async function onFetchCustAddresses(): Promise<void> {
    try {
      const response= await axios({
        method: 'GET',
        url: `${DEFAULT_URL}/customers/1`,
      });
  
      console.log(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    onFetchCustAddresses();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       Home
      </header>
    </div>
  );
}

export default HomePage;
