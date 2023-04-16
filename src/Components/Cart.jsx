import React, { useContext } from 'react';
import {PRODUCTS} from './Products';
import { ShopContext } from '../context/shopcontext';
import {CartItem} from './CartItem';

const Cart = () => {
  const{cartItems , getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
        <div><h1>Your Cart Items </h1></div>
        <div className="cartitem">
          {PRODUCTS.map((product) =>{
            if(cartItems[product.id]!==0){
              return <CartItem data = {product} />
            }
          })
          }

        </div>
        {totalAmount>0?
        <div className="checkout">
          <p>subtotal : $(totalAmount)</p>

        </div>:<h1>Your cart is Empty</h1>}
    </div>
  );
}

export default Cart

