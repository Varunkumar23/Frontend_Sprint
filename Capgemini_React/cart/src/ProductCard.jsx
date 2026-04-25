import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;