import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';

export const CartItem = (props) => {
    const{id,productName,price,productImage} = props.data;
    const{cartItems,addTocart,removeFromcart,updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>&{price}</p>
            <div className="countHandler">
                <button onClick={()=>removeFromcart(id)}>-</button>
                <input value = {cartItems[id]} onChange={(e) =>updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() =>addTocart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}


