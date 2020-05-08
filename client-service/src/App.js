import React from 'react';
import './App.css';
import Navbr from './containers/navbr/navbr'
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore from './redux/store'
import { Provider } from 'react-redux'
import BaseRouter from './router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Navbr></Navbr>
        <BrowserRouter>
          <BaseRouter></BaseRouter>
        </BrowserRouter>
      </div >
    </Provider>
  );
}

export default App;
