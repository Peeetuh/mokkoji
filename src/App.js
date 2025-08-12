import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import logo from "../src/assets/mokkoji-logo.jpg";
import './pages/NavLinks.css';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch capable
    const touchSupported =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    setIsTouchDevice(touchSupported);
  }, []);

  const logoStyle = {
    width: "300px",
    transformOrigin: "center",
    animation: isLogoHovered ? "dance 0.6s ease-in-out 2" : "none",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const danceAnimation = `
    @keyframes dance {
      0% { transform: rotate(0deg); }
      20% { transform: rotate(10deg); }
      40% { transform: rotate(-10deg); }
      60% { transform: rotate(10deg); }
      80% { transform: rotate(-10deg); }
      100% { transform: rotate(0deg); }
    }
  `;

  function NavLinks() {
    const location = useLocation();

    const navStyle = {
      padding: "5px 0",
    };

    const linkStyle = (isActive, isHovered) => ({
      margin: "0 15px",
      color: isActive || isHovered ? "#8B0000" : "black",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: isActive || isHovered ? "1.2rem" : "1rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      userSelect: "none",
    });

    return (
      <nav style={navStyle}>
        {navLinks.map((link, idx) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              style={linkStyle(isActive, hoveredIndex === idx)}
              // Only add hover handlers if NOT touch device
              {...(!isTouchDevice
                ? {
                    onMouseEnter: () => setHoveredIndex(idx),
                    onMouseLeave: () => setHoveredIndex(null),
                  }
                : {})}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <>
      <style>{danceAnimation}</style>

      <Router>
        <header
          style={{
            backgroundColor: "white",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>
            <img
              src={logo}
              alt="Mokkoji Logo"
              style={logoStyle}
              onMouseEnter={() => setIsLogoHovered(true)}
              onAnimationEnd={() => setIsLogoHovered(false)}
              onMouseLeave={() => setIsLogoHovered(false)}
            />
          </h1>
          <NavLinks />
        </header>

        <main style={{ maxWidth: "900px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            padding: "15px 10px",
            fontSize: "14px",
          }}
        >
          <p>Mokkoji Shabu Shabu Northridge</p>
          <p>19500 W Plummer St, Northridge, California</p>
          <p>Phone: (123) 456-7890 | Email: mokkojinorthridge@gmail.com</p>

          <a
            href="https://www.instagram.com/mokkojinorthridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              marginTop: "10px",
              fontWeight: "600",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="black"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
            Instagram
          </a>

          <p style={{ marginTop: "15px", fontSize: "12px", color: "#666" }}>
            &copy; {new Date().getFullYear()} Mokkoji. All rights reserved.
          </p>
        </footer>
      </Router>
    </>
  );
}

export default App;