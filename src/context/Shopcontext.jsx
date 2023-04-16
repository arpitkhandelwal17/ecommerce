import React, { useState } from 'react'
import {PRODUCTS} from '../Components/Products';
import { createContext } from 'react'
export const ShopContext = createContext(null);

const getDeafultCart = () =>{
    let cart = {};
    for(let i = 0;i<PRODUCTS.length;i++){
        cart[i] = 0;
    }return cart;
}

export const ShopContextProvider = (props) => {
    const[CartItems,SetcartItems] = useState(getDeafultCart());

    const addTocart = (itemId) =>{
        SetcartItems((prev) =>({...prev , [itemId] : prev[itemId] + 1}));
    }

    const removeFromcart = (itemId) =>{
        SetcartItems((prev) =>({...prev , [itemId] : prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount,itemId)=>{
        SetcartItems((prev) =>({...prev, [itemId] : newAmount }));
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in CartItems){
            if(CartItems[item]>0){
                let iteminfo = PRODUCTS.find((product) => product.id===Number(item));
                totalAmount += CartItems[item]*iteminfo.price;
            }
        } return totalAmount;
    };

    const ContextValue = {CartItems,addTocart,removeFromcart,updateCartItemCount,getTotalCartAmount};
  return (
    <ShopContext.Provider value = {ContextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
