import React from 'react';
import PRODUCTS from './Products';
import Entry from './Entry';
import Footer from './Footer';

const Shop = () => {
  return (
    <div>
        <div className='text'>
         <h1>SELFTECH.COM</h1>
      <h1>SHOP WHAT YOU WANT!</h1>
    </div>
    <div className="container">{PRODUCTS.map((product) =>(
      <Entry data = {product} />
    ))}</div>
    <Footer />
    </div>
  )
}

export default Shop
