import React from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner'
import Details from './components/details/details'
import Product from './components/product/product';
import Factory from './components/factory/factory';
import Forms from './components/forms/forms';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
     <Details />
        <Product />
     <Factory />
      <Forms /> 
    </div>
  )
}

export default App
