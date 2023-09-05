

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shop.css';
import { useNavigate } from 'react-router-dom';

export const Shop = ({ cart, updateCart }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const resp = await axios.get('http://localhost:1234/product');
            setProducts(resp.data);
        } catch (error) {
            console.log(`Facing error while getting Data ${error.message}`);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleCart = (item) => {
        updateCart([...cart, item]); // Update the cart in the App component
    }

    return (
        <div className='productsPage'>
            <h1>products</h1>
            <button onClick={() => { navigate("/cart") }}>Cart</button>
            {products.length > 0 ? (
                <div className='productContainer'>
                    {products.map((item) => (
                        <div className='productCard' key={item._id}>
                            <div className='imagecard'>
                                <img src={item.img} alt="" />
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.price}</p>                    <p>{item.desc}</p>
                            <button onClick={() => { handleCart(item) }}>add to cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                'No products available'
            )}
        </div>
    );
}
