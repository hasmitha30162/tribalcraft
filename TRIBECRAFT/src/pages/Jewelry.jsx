import React from "react";

const products = [
  { id: 1, name: "Beaded Necklace", price: "₹500", image: "https://shreejitascollections.com/wp-content/uploads/2025/04/IMG_20210329_171547.jpg" },
  { id: 2, name: "Tribal Earrings", price: "₹300", image: "https://i.etsystatic.com/15703488/r/il/0a290b/2989195945/il_570xN.2989195945_pubv.jpg" },
  { id: 3, name: "Buffalo Bone Hairpipe Bracelet", price: "₹900", image: "https://images-na.ssl-images-amazon.com/images/I/61sf00fAQCL.jpg" },
  { id: 4, name: "Sterling Silver Handmade", price: "₹1250", image: "https://tribalornaments.com/cdn/shop/products/il_fullxfull.2459007789_mvz0.jpg?v=1728281070&width=1946" },
  { id: 5, name: "Mughal sarai", price: "₹5000", image: "https://www.silberuh.com/cdn/shop/files/MughalsaraiSilverTribalEarring3_300x300.jpg?v=1752317475" },
  { id: 6, name: "Dhokra Tribal Necklace", price: "₹1450", image: "https://www.indianvillez.com/cdn/shop/products/097b7814-e76b-4233-88ad-e2db10e75603.jpg?v=1675340853" },
  { id: 7, name: "Mojo Caveman Earing", price: "₹760", image: "https://chrysalistribaljewelry.indiemade.com/sites/chrysalistribaljewelry.indiemade.com/files/imagecache/im_clientsite_product_zoom/bone_jana_trib_e4.jpg" },
  { id: 8, name: "Silver Hub Tibetan", price: "₹1190", image: "https://5.imimg.com/data5/QV/CR/MY-31519766/md4636-500x500.jpg" },
  { id: 9, name: "sterling silver braclet", price: "₹300", image: "https://tribalornaments.com/cdn/shop/files/IMG_0584.jpg?v=1747138961&width=1946" },
  { id: 10, name: "Painted Wood Earrings", price: "₹890", image: "https://exclusivelane.com/cdn/shop/products/EL-030-012_A_480x.jpg?v=1579777348" },
  { id: 11, name: "Titi Mug Totem Ring", price: "₹1600", image: "https://kaijulabsilverjewels.com/cdn/shop/files/T15.jpg?v=1686743475&width=2500" },
  { id: 12, name: "Masai Bangles", price: "₹960", image: "https://i.etsystatic.com/7687651/r/il/cf1aea/2531536554/il_340x270.2531536554_thk4.jpg" }
];

const Jewelry = () => (
  <div className="products-container">
    <h2>Jewelry & Accessories</h2>
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
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Jewelry;
