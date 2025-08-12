import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        backgroundColor: "#fff8f0",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "600px",    // max width for big screens
          width: "90%",         // responsive width on smaller screens
          margin: "20px auto 0",  // margin top 20px and centered horizontally
          padding: "30px",
          backgroundColor: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          textAlign: "center",
          color: "#333",
          lineHeight: 1.6,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#c94f4f", fontSize: "2.2rem", marginBottom: 20 }}>
          About Us
        </h2>
        <p>
          Founded in 2012, <strong>Mokkoji</strong> was born out of a passion for
          bringing people together over delicious food. Our name comes from the
          Korean word for “gathering,” because we believe the best meals are
          enjoyed with family, friends, and laughter.
        </p>
        <p>
          Our vision is to be the premier destination for shabu shabu lovers across California, setting the standard for excellence in this unique culinary art form.
          We aim to introduce the joy of shabu shabu to new audiences by staying true to the traditional Japanese roots with additional influences from Korean, Spanish, and Californian cuisine.
        </p>

        <h3 style={{ color: "#c94f4f", marginTop: 30, fontSize: "2.2rem" }}>
          What Makes Us Special
        </h3>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>Premium meats and fresh vegetables sourced locally</li>
          <li>Signature broths crafted for rich, comforting flavor</li>
          <li>Welcoming, cozy dining experience</li>
          <li>Friendly service that treats you like family</li>
        </ul>

        <h3 style={{ color: "#c94f4f", marginTop: 30, fontSize: "2.2rem" }}>
          Our Promise
        </h3>
        <p>
          Whether it’s your first visit or one of many, we want Mokkoji to feel
          like your go-to gathering place. A spot where great food meets great
          company every single time.
        </p>
      </div>
    </div>
  );
};

export default About;