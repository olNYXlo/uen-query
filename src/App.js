import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link}  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          <li>
            <Link to="/GovQuery">Query from Gov Database</Link>
          </li>

          <li>
            <Link to="/LocalDBQuery">Query from Local Database</Link>
          </li>

          <li>
            <Link to="/ImportGovToLocal">Import Government Database to Local Database</Link>
          </li>
          </ul>


      </header>
    </div>
  );
}

export default App;
