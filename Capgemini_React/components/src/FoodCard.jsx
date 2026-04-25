import React from "react";

const FoodCard = ({ foodData }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {foodData.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "15px" }}>
            <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {item.name}
            </h2>

            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ff4d4d",
                marginBottom: "10px",
              }}
            >
              ₹{item.price}
            </p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                background: "#ff4d4d",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
