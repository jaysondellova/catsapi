import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './catscreen.css';
const CatScreen = ({ cat }) => {
  const [meow, setMeow] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchCat = async () => {
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/breeds/${id}`
      );
      setMeow(data);
    };
    fetchCat();
  }, [id]);

  return (
    <div className="cat-screen">
      <Link to="/cats">go back</Link>
      <div className="cat-container">
        <div className="cat-image">
          <img
            src={`https://cdn2.thecatapi.com/images/${meow.reference_image_id}.jpg`}
            alt="img"
          />
        </div>
        <div className="cat-info">
          <h1>{meow.name}</h1>
          <h2>{meow.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default CatScreen;
