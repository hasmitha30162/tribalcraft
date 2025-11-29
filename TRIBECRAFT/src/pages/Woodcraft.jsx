import React from "react";

const products = [
  { id: 1, name: "Carved Wooden Bowl", price: "₹600", image: "https://i.etsystatic.com/17360653/r/il/a9f2ee/3456274760/il_570xN.3456274760_4jzo.jpgl" },
  { id: 2, name: "Wooden Mask", price: "₹800", image: "https://trovecraftindia.com/cdn/shop/files/Female_Tribal_Mask_Mood_Shot.jpg?v=1754888360" },
  { id: 3, name: "Decorative Sculpture", price: "₹1200", image: "https://i0.wp.com/www.pugdundeesafaris.com/blog/wp-content/uploads/2020/12/pillers-01-1.jpg?ssl=1" },
  { id: 4, name: "Ekpo Mask", price: "₹1800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3W-V-BVLXgltM9WEAkorWUtXXQR0uhKI5ow&s" },
 { id: 5, name: "Kashmir walnut wood carving", price: "₹3000", image: "https://s7ap1.scene7.com/is/image/incredibleindia/walnut-wood-carvings-craft-hero?qlt=82&ts=1726641491579" },
   { id: 6, name: "Wooden bowl with lid", price: "₹2000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1X3Cr4tVQls22iZMnNa66n0Ji3i65bQJcg&s" },
 { id: 7, name: "ancient carved bowl", price: "₹900", image: "https://www.balicargo-company.com/images/tribbwl3.jpg" },
   { id: 8, name: "panja landa woodwork", price: "₹5000", image: "https://www.gitagged.com/wp-content/uploads/2018/06/Wooden-Crafts-Online-GI-TAGGED-1.jpg" },
  
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
