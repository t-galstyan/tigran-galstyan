import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FbIcon from './icons/FbIcon';
import TelegramIcon from './icons/TelegramIcon';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className={`${isOpened ? 'collapse' : ''}`}>
      <div className="container">
        <div className="header-logo-wrapper">
          <Link to="/" className="logo">
            Tigran Galstyan
          </Link>
          <a href="https://www.amazon.com/dp/B0CH8PX36B" target="_blank" rel="noreferrer" className="kindle">
            <img src={require('../assets/images/kindle.png')} alt="Amazon kindle" width={60} height={45} />
          </a>
        </div>
        <div className="nav">
          <button onClick={() => setIsOpened(false)} className="close-button">
            <span></span>
            <span></span>
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpened(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpened(false)}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/books" onClick={() => setIsOpened(false)}>
                Books
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={() => setIsOpened(false)}>
                CONTACTS
              </Link>
            </li>
            <li className="social-links">
              <a href="https://www.facebook.com/tigran.galstyan.357?mibextid=b06tZ0" target="_blank" rel="noreferrer">
                <FbIcon />
              </a>
              <a href="https://t.me/TigranGalstyan2023" target="_blank" rel="noreferrer">
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
        <button
          className="menu-button"
          onClick={() => {
            setIsOpened(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
