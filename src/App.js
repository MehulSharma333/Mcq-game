import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <div className="Navbar-Main">
      <ul className="Navbar-item">
        <li className="Nav-item">Home</li>
        <li className="Nav-item">Page</li>
        <li className="Nav-item">About Us</li>
      </ul>
    </div>
  );
}
