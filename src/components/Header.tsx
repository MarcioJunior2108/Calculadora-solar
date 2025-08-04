import React from "react";
import "../Styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <span className="header-icon" role="img" aria-label="sol">
          🌞
        </span>
        <h1 className="header-title">Energia Solar Simples</h1>
      </div>
    </header>
  );
};

export default Header;
