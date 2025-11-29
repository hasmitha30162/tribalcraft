import React from "react";

const products = [
  { id: 1, name: "Carved Wooden Bowl", price: "₹600", image: "https://via.placeholder.com/200x250?text=Bowl" },
  { id: 2, name: "Wooden Mask", price: "₹800", image: "https://via.placeholder.com/200x250?text=Mask" },
  { id: 3, name: "Decorative Sculpture", price: "₹1200", image: "https://via.placeholder.com/200x250?text=Sculpture" }
];

const Woodcraft = () => (
  <div className="products-container">
    <h2>Wooden Carvings</h2>
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <span className="favourite">&#9825;</span>
          </div>
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <div className="product-buttons">
            <button>Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Woodcraft;
