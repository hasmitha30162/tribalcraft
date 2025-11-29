import React from "react";

const products = [
  { id: 1, name: "Handwoven Scarf", price: "₹800", image: "https://www.aadivasi.org/storage/product/images/original/01JE65T8FQ5NCXG4XWNK4AX68T.jpg" },
  { id: 2, name: "Handwoven Black Shawl", price: "₹1200", image: "https://m.media-amazon.com/images/I/91NGb+a51vL._AC_UY1100_.jpg" },
  { id: 3, name: "", price: "₹1500", image: "" }
];

const Textiles = () => (
  <div className="products-container">
    <h2>Textiles & Weaving Products</h2>
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

export default Textiles;
