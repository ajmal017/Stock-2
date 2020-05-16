import React from 'react';
import './App.css';
import Navbr from './containers/navbr/navbr'
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore from './redux/store'
import { Provider } from 'react-redux'
import BaseRouter from './router'
import { BrowserRouter } from 'react-router-dom'
import Toast from './containers/toast/toast'
import TopBox from './containers/topBox/topBox'
import StockCard from './containers/stockCard/stockCard'

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <BrowserRouter>
          <Navbr></Navbr>
          <Toast></Toast>
          <TopBox></TopBox>
          <StockCard></StockCard>
          <BaseRouter></BaseRouter>
        </BrowserRouter>
      </div >
    </Provider>
  );
}

export default App;
