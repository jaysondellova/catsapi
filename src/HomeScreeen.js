import React from 'react';
import { Link } from 'react-router-dom';
import cat from './images/330417.jpg';
import './home.css';
const HomeScreeen = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={cat} alt="img" />
      </div>
      <div className="proceed-button">
        <Link to="/cats">
          cats api<span>(Click me)</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreeen;
