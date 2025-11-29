import React from "react";

const products = [
  { id: 1, name: "Boho Jacket", price: "₹1200", image: "https://5.imimg.com/data5/SELLER/Default/2025/6/521282553/ME/UY/QC/394432/suzani-embroidered-jacket-handmade-boho-jacket-vintage-coat-tribal-fashionwear-boutique-clothing.jpeg" },
  { id: 2, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "https://sc04.alicdn.com/kf/A470804e0d79440958466eda0744a1fb65.jpeg" },
  { id: 3, name: "Afghan Pink Dress", price: "₹1000", image: "https://saneens.com/cdn/shop/files/HT48__81954.1710587357.1280.1280_459x573.jpg?v=1750158694" },
  { id: 4, name: "Cotton Saree", price: "₹1000", image: "https://www.odishaestore.com/image/cache/sellers/20/White-With-Black-Border-Hand-Woven-Kotpad-Saree-750x750.jpg" },
  { id: 5, name: "Sambalpuri cotton saree", price: "₹4500", image: "https://www.odikala.com/cdn/shop/files/TRI3D__defaultterracotta__silk_set112_juhi_side__2024-9-20-21-20-28__1600X2400_d1e1ffb1-46b0-4a24-84d0-e9d18aca0069_1200x.jpg?v=1726931492" },
  { id: 6, name: "Chakhesang tribe traditional shawl", price: "₹3300", image: "https://i0.wp.com/madeinnagalandcenter.in/wp-content/uploads/2023/07/chakhesang.jpg?fit=600%2C600&ssl=1" },
  { id: 7, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" },
  { id: 8, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" },
  { id: 9, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" },
  { id: 10, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" },
  { id: 11, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" },
  { id: 12, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "" }
];
const Clothes = () => (
  <div className="products-container">
    <h2>Clothing Products</h2>
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <span className="favourite">&#9825;</span> {/* empty heart */}
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

export default Clothes;
