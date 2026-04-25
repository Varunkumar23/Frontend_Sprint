import React, { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ Fake Store</h1>

      <ProductList products={products} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
};

export default App; 