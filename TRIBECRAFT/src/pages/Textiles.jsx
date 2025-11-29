import React from "react";

const products = [
  { id: 1, name: "Gloss unframed", price: "₹8000", image: "https://5.imimg.com/data5/SELLER/Default/2020/10/EY/PM/BF/114874649/tribal-painting.png" },
  { id: 2, name: "Vibrant tribal animal scene", price: "₹5700", image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/16968/28488/1480241704530_Tribal_art-Animals__44778.1506574516.jpg?c=2" },
  { id: 3, name: "Majestic ride", price: "₹6000", image: "https://shop.gaatha.com/image/catalog/Chanchal-Soni/04-phad-painting1cc.jpg" },
  { id: 4, name: "Series fish", price: "₹7900", image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/19139/30863/1486803991166_Tribal_Art_series-Fish__43536.1506574601.jpg?c=2" },
  { id: 5, name: "Warli painting", price: "₹4500", image: "https://tribesindia.com/public/uploads/all/WPS2tiC1TCvaswvl0eoY7DLC48LzaNPcsCrdBKcT.webp" },
  { id: 6, name: "Tribal lady", price: "₹5500", image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/125138/292325/prints%2Fdownscaled%2Fp_y5s3gav9up9_2000x2000__82042.1703501609.jpg?c=2" },
  { id: 7, name: "Khaligat musicians", price: "₹8700", image: "https://cdn.dollsofindia.com/images/p/kalighat-paintings/tribal-painting-SM47_l.jpg" },
  { id: 8, name: "Kalamkari 4painting", price: "₹5670", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNyVZJZMwnA9xnT5XyvOfyRvyPvaLmc8few&s" },
  { id: 9, name: "Nirmitee 3d tribal art", price: "₹5400", image: "https://m.media-amazon.com/images/I/911KLxZ-roL._AC_UF894,1000_QL80_.jpg" },
  { id: 10, name: "Gond paintings", price: "₹8500", image: "https://cdn.shopify.com/s/files/1/0849/4704/files/Artisera_Gond_Art_FB_size_1024x1024.jpg?v=1475425760" },
  { id: 11, name: "Potrait", price: "₹9500", image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/72422/258440/1625743983060_IMG_20200302_162157_2-01__28660.1687166250.jpg?c=2" },
  { id: 12, name: "Saura art", price: "₹6575", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl8QfgTazkadQzAoZkFRV_RS4-5YBZa1QWw&s" }
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
