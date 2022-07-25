import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';
import { Link } from 'react-router-dom';
const Card = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds').then((res) => {
      console.log(res.data);
      setCat(res.data);
    });
  }, []);
  return (
    <div className="color">
      <div className="App">
        <div className="box-container">
          {cat.map((cat) => (
            <Link to={`/${cat.id}`}>
              <div className="box-container">
                <div className="card-container">
                  <div>
                    <div className="card-image">
                      <img src={cat?.image?.url} />
                    </div>
                    <h2 className="card-name">{cat.name}</h2>
                    <h2 className="traits">{cat.temperament}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
