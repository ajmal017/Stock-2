import React from 'react';
import './App.css';
import Navbr from './containers/navbr/navbr'
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Navbr></Navbr>
      </div >
    </Provider>
  );
}

export default App;
