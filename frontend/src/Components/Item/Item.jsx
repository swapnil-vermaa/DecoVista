import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, price, onClick }) => {
  return (
    <div className='item' onClick={onClick}>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
      <p>Rs.{price}</p>
    </div>
  );
}

export default Item;
