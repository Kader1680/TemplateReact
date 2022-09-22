// import './app.css'
// import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Header from './header';
import Basket from './basket';
import React from 'react';
import { useState } from 'react';
import products from './data';
import Main from './main';
import Card from './card';


function App() {
  // import product from data
  // const [{products}] = Data
  // const {products} = products

    const [show, setshow] = useState(true);
 
  return (
    <div>

        <Header setshow={setshow} />
        
        {
          show? <Main products={products} />: <Card/>
        }

        
      
    </div>
  );
}

export default App;
