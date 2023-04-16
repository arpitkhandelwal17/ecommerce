import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
 function Entry(props) {
    const{id,productName,price,productImage} = props.data; 
    const{addTocart,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <div className='Term grid-item'>
        <div >{productImage}</div>
        <div>{productName}</div>
        <div>${price}</div>
        <button onClick={() =>addTocart(id)}>add to cart {cartItemAmount>0 && ({cartItemAmount})}</button>
    </div>
    ); 
}

export default Entry
