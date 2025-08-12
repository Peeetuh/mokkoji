import React from "react";

const Contact = () => {
  const containerStyle = {
    width: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    color: "#333",
    lineHeight: 1.6,
  };

  const headingStyle = {
    color: "#c94f4f",
    fontSize: "2.2rem",
    marginBottom: "20px",
  };

  const infoStyle = {
    fontSize: "18px",
    marginTop: "15px",
  };

  const hiringStyle = {
    fontSize: "18px",
    marginTop: "40px",
    color: "#555",
  };

  const emailLinkStyle = {
    color: "#c94f4f",
    textDecoration: "none",
    fontWeight: "600",
  };

  return (
    <div
      style={{
        height: "60vh",
        width: "100vw",
        backgroundColor: "#fff8f0",
        position: "relative",
        padding: '5px'
      }}
    >
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>

        <p style={infoStyle}>
          <strong>Address:</strong> 19500 W Plummer St, Northridge, California
        </p>
        <p style={infoStyle}>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p style={infoStyle}>
          <strong>Email:</strong> mokkojinorthridge@gmail.com
        </p>
        <p style={infoStyle}>
          <strong>Hours:</strong> Mon-Sun 11:00 AM – 10:00 PM
        </p>

        <p style={hiringStyle}>
          <strong>Hiring now!</strong> Please submit your resume to{" "}
          <a href="mailto:careers@mokkoji.com" style={emailLinkStyle}>
            mokkojinorthridge@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
