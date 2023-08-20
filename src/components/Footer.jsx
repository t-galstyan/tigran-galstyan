import React from 'react';
import { Link } from 'react-router-dom';
import FbIcon from './icons/FbIcon';
import InstaIcon from './icons/InstaIcon';
import TelegramIcon from './icons/TelegramIcon';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">Copyright © {new Date().getFullYear()} Author</div>
        <div className="middle">
          <p className="title">Tigran Galstyan</p>
          <p className="desc">Award winning best selling author</p>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
          <ul className="links">
            <li>
              <a href="https://www.facebook.com/tigran.galstyan.357?mibextid=b06tZ0" target="_blank" rel="noreferrer">
                <FbIcon />
              </a>
            </li>
            <li>
              <a href="https://t.me/TigranGalstyan2023" target="_blank" rel="noreferrer">
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <img src={require('../assets/images/footer_right_photo.png')} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
