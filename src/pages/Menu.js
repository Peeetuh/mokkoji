import React from "react";
import foodMenu from "../assets/mmenu1.jpg";
import drinksMenu from "../assets/mmenu2.jpg";

const Menu = () => {
  const containerStyle = {
    width: "90%",
    maxWidth: "700px",
    margin: "40px auto 40px",  // less top margin than before
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    color: "#333",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const imageContainerStyle = {
    maxWidth: "400px",
    width: "100%", // fill container width responsively
    margin: "0 auto 40px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "block",
  };

  return (
    <div
      style={{
        backgroundColor: "#fff8f0",
        minHeight: "calc(100vh - 80px)", // fill viewport minus header/footer approx
        padding: "10px 5px 40px",       // bottom padding for spacing from footer
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <div style={containerStyle}>
        {/* <h2 style={{color: "#D10000", fontSize: "2.2rem", marginBottom: "30px"}}>Our Menu</h2> */}

        <div style={imageContainerStyle}>
          <img src={foodMenu} alt="Mokkoji Food Menu" style={imgStyle} />
        </div>

        <div style={imageContainerStyle}>
          <img src={drinksMenu} alt="Mokkoji Drinks Menu" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Menu;