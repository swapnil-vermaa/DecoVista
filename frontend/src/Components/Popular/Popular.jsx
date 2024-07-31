import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = ({ theme }) => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinmandala')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className='popular'>
      <h1 className={theme === 'dark' ? 'dark-text' : ''}>POPULAR IN MANDALA</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
