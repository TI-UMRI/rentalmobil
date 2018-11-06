import React, { Component } from "react";

const appStyle = {
  textAlign: "center"
};

const appHeader = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
};

const appLink = {
  color: "#047d9f"
};

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <header style={appHeader}>
          <a
            style={appLink}
            href="https://rentalmobilpekanbaru.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rental Mobil
          </a>
        </header>
      </div>
    );
  }
}

export default App;
