import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import Clothes from "./pages/Clothes";
import Textiles from "./pages/Textiles";
import Jewelry from "./pages/Jewelry";
import Woodcraft from "./pages/Woodcraft";

// Auth Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const login = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/clothing" element={<Clothes />} />
          <Route path="/textiles" element={<Textiles />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/woodcraft" element={<Woodcraft />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// ----------------- HOME PAGE -----------------
const HomePage = () => {
  const [craftsOpen, setCraftsOpen] = useState(false);
  const { isLoggedIn, userEmail, logout } = useAuth();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  const handleSearch = () => {
    const query = searchText.toLowerCase().trim();

    if (query.includes("cloth") || query.includes("clothing")) {
      navigate("/clothing");
    } 
    else if (query.includes("paint") || query.includes("textile")) {
      navigate("/textiles");
    }
    else if (query.includes("jewel")) {
      navigate("/jewelry");
    }
    else if (query.includes("wood") || query.includes("carving")) {
      navigate("/woodcraft");
    } 
    else {
      alert("No matching category found.");
    }
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">TRIBECRAFT</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for handicrafts..." 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Right Section */}
        <div className="action-links">
          <p className="link">Become a Seller</p>
          {isLoggedIn ? (
            <>
              <p className="link user-email">{userEmail}</p>
              <button onClick={handleSignOut} className="link signout-btn">Sign Out</button>
            </>
          ) : (
            <Link to="/signin" className="link">Sign In</Link>
          )}
          <p className="link">Basket</p>
        </div>
      </header>

      {/* CATEGORY BAR */}
      <nav className="category-bar">
        <Link to="/clothing"><p>Clothing</p></Link>
        <Link to="/textiles"><p>Paintings</p></Link>
        <Link to="/jewelry"><p>Jewelry & Accessories</p></Link>
        <Link to="/woodcraft"><p>Wooden Carvings</p></Link>

        {/* Crafts Dropdown */}
        <div
          className="crafts-container"
          onMouseEnter={() => setCraftsOpen(true)}
          onMouseLeave={() => setCraftsOpen(false)}
        >
          <p className="crafts-button">Crafts ▾</p>
          {craftsOpen && (
            <div className="crafts-dropdown">
              <p>Pottery & Clay Crafts</p>
              <p>Stone, Bone & Shell Crafts</p>
              <p>Metal Crafts</p>
              <p>Leather & Hide Crafts</p>
              <p>Agricultural & Utility Crafts</p>
              <p>Household & Lifestyle Crafts</p>
            </div>
          )}
        </div>
      </nav>

      {/* MAIN PAGE BANNER */}
      <div className="homepage-banner">
        <h1>Welcome to TribeCraft</h1>
         <p>
          TribeCraft celebrates the rich heritage of tribal artisans. 
          We bring authentic handcrafted products directly to your hands through <br />
          a trusted and user-friendly online marketplace.
        </p>
      </div>

      {/* ---------------- HOME PAGE PRODUCTS ---------------- */}
      <div className="products-container">
        <h2>Featured Products</h2>

        <div className="products-grid">

  <div className="product-card">
    <div className="product-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfJWrlO9udVf6Mqiqt9F067DJfIVKtUkxvA&s" alt="Item" />
    </div>
    <p className="price">₹350</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://shop.gaatha.com/image/catalog/Gaatha/wooden-mask-02-(1).jpg" alt="Wooden mask" />
    </div>
    <p className="price">₹499</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://m.media-amazon.com/images/I/817RrhA8eUL._AC_UF894,1000_QL80_.jpg" alt="painting" />
    </div>
    <p className="price">₹1299</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco6bYaakYHxWKWHeSmWnLkCiHSjH7ihUjjg&s" alt="Scarf" />
    </div>
    <p className="price">₹899</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://i.etsystatic.com/47390258/r/il/b0f8a1/5654971580/il_fullxfull.5654971580_63mt.jpg" alt="Wallpaper" />
    </div>
    <p className="price">₹659</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpDsAlaiijuZUCXX-TLueXzP6bOkTZhFyAA&s" alt="Mask" />
    </div>
    <p className="price">₹590</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://vipakka.in/wp-content/uploads/2019/08/handpainted-patachitra-cotton-and-silk-saree-vipakka-5.jpg" alt="Saree" />
    </div>
    <p className="price">₹1499</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://m.media-amazon.com/images/I/91c9rDcKbhL._AC_UF350,350_QL80_.jpg" alt="Clay Painting" />
    </div>
    <p className="price">₹1500</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://theindiacrafthouse.com/cdn/shop/products/TheIndiaCraftHouseSabaiGrassHandmadeMulticolouredBasket_Setof2_-MMB02A@2x.jpg" alt="Multi coloured basket" />
    </div>
    <p className="price">₹2000</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://wayda.de/cdn/shop/products/4UXWaScI_3190x.jpg?v=1681847578" alt="Scarf" />
    </div>
    <p className="price">₹299</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6mLWqF5oaeheG6VCemaQ6pYJvQYX4lpgfw&s" alt="Handmade cotton shirt" />
    </div>
    <p className="price">₹899</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://i.pinimg.com/736x/5d/e6/5b/5de65bb591874a4c123f0567a6ce2c3d.jpg" alt="Item" />
    </div>
    <p className="price">₹400</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://bekaarstreet.com/wp-content/uploads/Combo-10-1.jpeg" alt="Kurla Wali Art" />
    </div>
    <p className="price">₹700</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://www.indianvillez.com/cdn/shop/files/8_9a80ee89-7c54-4318-a5f3-821f6b799477.jpg?v=1737027223" alt="Saree" />
    </div>
    <p className="price">₹4050</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://preview.redd.it/tribal-craft-i-made-rajasthani-women-wall-decor-with-v0-rhs9jawlk66a1.jpg?width=1080&crop=smart&auto=webp&s=0772ddf62209005239ae79e5256e1bd0c6ac3b89" alt="Wall Decor" />
    </div>
    <p className="price">₹1580</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://m.media-amazon.com/images/I/61fUwilhjJL._AC_UF350,350_QL80_.jpg" alt="Jali BAsket" />
    </div>
    <p className="price">₹999</p>
  </div>

  <div className="product-card">
    <div className="product-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIU6dA7FXR29rgOM2ypIK66K3cxs3vGaH2w&s" alt="Wood Craft" />
    </div>
    <p className="price">₹1490</p>
  </div>

</div>


            <p className="price">₹350</p>
          </div>

        </div>


    
  );
};

// ----------------- SIGN IN PAGE -----------------
const SignInPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    login(email);
    alert(`Signed in as: ${email}`);
    navigate("/");
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>

      <form onSubmit={handleSignIn} className="signin-form">
        <label>Email or Username</label>
        <input
          type="text"
          placeholder="Enter your email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p
          className="forgot-password"
          onClick={() => alert("Password recovery flow")}
        >
          Forgot Password?
        </p>

        <button type="submit">Sign In</button>

        <p className="signup-link">
          No account? <Link to="#">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default App;
