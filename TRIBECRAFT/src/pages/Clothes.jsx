import React, { useState } from "react";

const products = [
  { id: 1, name: "Boho Jacket", price: "₹1200", image: "https://5.imimg.com/data5/SELLER/Default/2025/6/521282553/ME/UY/QC/394432/suzani-embroidered-jacket-handmade-boho-jacket-vintage-coat-tribal-fashionwear-boutique-clothing.jpeg" },
  { id: 2, name: "Ethnic Afghan Kuchi Handmade Dress", price: "₹1500", image: "https://sc04.alicdn.com/kf/A470804e0d79440958466eda0744a1fb65.jpeg" },
  { id: 3, name: "Afghan Pink Dress", price: "₹1000", image: "https://saneens.com/cdn/shop/files/HT48__81954.1710587357.1280.1280_459x573.jpg?v=1750158694" },
  { id: 4, name: "Cotton Saree", price: "₹1000", image: "https://www.odishaestore.com/image/cache/sellers/20/White-With-Black-Border-Hand-Woven-Kotpad-Saree-750x750.jpg" },
  { id: 5, name: "Sambalpuri cotton saree", price: "₹4500", image: "https://www.odikala.com/cdn/shop/files/TRI3D__defaultterracotta__silk_set112_juhi_side__2024-9-20-21-20-28__1600X2400_d1e1ffb1-46b0-4a24-84d0-e9d18aca0069_1200x.jpg?v=1726931492" },
  { id: 6, name: "Chakhesang tribe traditional shawl", price: "₹3300", image: "https://i0.wp.com/madeinnagalandcenter.in/wp-content/uploads/2023/07/chakhesang.jpg?fit=600%2C600&ssl=1" },
  { id: 7, name: "Hand Painted Tassar Silk Stole", price: "₹3400", image: "https://www.aadivasi.org/storage/product/images/original/01JE3AGRQVPD5VKBFSSSF7H1S2.jpg" },
  { id: 8, name: "Toda Hand Embroidery Shawls", price: "₹5165", image: "https://www.gitagged.com/wp-content/uploads/2019/08/TODA-03-SHAWL-BW-P7-01-1.jpg" },
  { id: 9, name: "Slub Silk Hancrafted stole", price: "₹3500", image: "https://itokri.com/cdn/shop/files/3T1A6762_2ff4145c-4b1e-4b54-97e9-232018c69d7f.jpg?v=1757339469&width=480" },
  { id: 10, name: "Himalayan Handloom Scarf in Pure Wool", price: "₹5000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzYMG01eZQ3BzBjvHgVwOAPi4jSiBfh2xVw&s" },
  { id: 11, name: "Tribal pattern pure cotton saree", price: "₹3000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQMy4AoC5Xdqa5OFBLz1DmBaroBsUiavxHg&s" },
  { id: 12, name: "OdiKala Sambalpuri Cotton Saree with Blouse Piece", price: "₹14575", image: "https://m.media-amazon.com/images/I/81yPufKsarL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 13, name: "Kosa Silk Tribal Art Saree With Blue Border", price: "₹5545", image: "https://5.imimg.com/data5/ECOM/Default/2024/6/429327222/BH/KQ/QL/163930577/img-1012-500x500.jpg" }
];

const Clothes = () => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert("ONE PRODUCT HAS BEEN ADDED TO YOUR CART");
  };

  // Buy Now Function
  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
    // navigate('/checkout', { state: product });
  };

  return (
    <div className="products-container">
      <h2>Clothing Products</h2>

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
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>

              <button
                className="buy-now"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
