// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="user-info">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="user-avatar"
        />
        <span className="user-name">John Doe</span>
      </div>
      <h1>Twitter Clone</h1>
    </header>
  );
};

export default Header;