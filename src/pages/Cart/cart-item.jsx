import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

export const CartItem = (props) => {
  const {id, productName, price, productImage } = props.data; 
  const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  
  return (
    <div className='cartItem'>
      <img src={productImage} alt= {productName}/>
      <div className='description'> 
            <p> <b>{productName}</b> </p>
            <p> <b>₹{price}</b> </p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value)) } />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
         </div>
    </div>
  )
}


