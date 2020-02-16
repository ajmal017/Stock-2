import React from 'react';
import './App.css';
import Navbr from './containers/navbr/navbr'
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore from './redux/store'
import { Provider } from 'react-redux'
import Layout from './containers/layout'

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Navbr></Navbr>
        <Layout></Layout>
      </div >
    </Provider>
  );
}

export default App;
