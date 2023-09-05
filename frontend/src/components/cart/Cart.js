
import React from 'react';
import './cart.css';
import '../shop/shop.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, updateCart }) => {
  const navigate = useNavigate();

  const handleProduct = (item) => {
    navigate("/productDetails");
  }

  const incrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {

        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    updateCart(updatedCart);
  }

  const decrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id && cartItem.quantity > 1) {

        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    updateCart(updatedCart);
  }

  const removeProduct = async (item) => {
    const productId = item._id;



    const updatedCart = cart.filter((cartItem) => cartItem._id !== productId);
    updateCart(updatedCart);
  }

  return (
    <div className='cartPage'>
      <h1>Cart page</h1>

      {cart.length > 0 ? (
        <div className='productContainer'>
          {cart.map((item) => (
            <div className='productCard' key={item._id}>
              <div onClick={() => { handleProduct(item) }} className='imagecard'>
                <img src={item.img} alt="" />
              </div>
              <h5 onClick={() => { handleProduct(item) }}>{item.title}</h5>
              <p>{item.price}</p>
              <p>{item.desc}</p>
              <p>
                Qty: {item.quantity}
                <button onClick={() => { incrementQuantity(item) }}>+</button>
                <button onClick={() => { decrementQuantity(item) }}>-</button>
              </p>
              <button onClick={() => { removeProduct(item) }}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        "Empty cart"
      )}
    </div>
  );
}

export default Cart;


