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

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">TRIBECRAFT</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for handicrafts..." />
          <button>Search</button>
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
        <p>Empowering Tribal Communities Through Online Markets</p>
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

        <p className="forgot-password" onClick={() => alert("Password recovery flow")}>
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
