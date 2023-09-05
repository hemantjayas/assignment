
import { useState } from "react";
import Cart  from "./components/cart/Cart";
import { ProductDetails } from "./components/productDetails/ProductDetails";
import { Shop } from "./components/shop/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  
  const [cart, setCart] = useState([]);

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop cart={cart} updateCart={updateCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
