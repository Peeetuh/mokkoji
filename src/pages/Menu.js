import React from "react";
import foodMenu from "../assets/mmenu1.jpg";
import drinksMenu from "../assets/mmenu2.jpg";

const Menu = () => {
  const containerStyle = {
    width: "90%",
    maxWidth: "700px",
    margin: "80px auto 40px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    color: "#333",
    textAlign: "center",
  };

  // const headingStyle = {
  //   color: "#D10000",
  //   fontSize: "2.2rem",
  //   marginBottom: "30px",
  // };

  const imageContainerStyle = {
    width: "400px",       // fixed width for image wrapper
    margin: "0 auto 40px", // centers container horizontally + margin bottom
  };

  const imgStyle = {
    width: "100%",       // fills container width exactly
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "block",
  };

  return (
    <div style={{
    backgroundColor: "#fff8f0",
    minHeight: "80vh",
    padding: "10px",
    width: "100vw",          // ensure it spans full viewport width
    boxSizing: "border-box", // include padding in width
  }}>
      <div style={containerStyle}>
        {/* <h2 style={headingStyle}>Our Menu</h2> */}

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
