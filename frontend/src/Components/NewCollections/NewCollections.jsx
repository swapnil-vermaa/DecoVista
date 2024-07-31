// NewCollections.js
import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = ({ theme }) => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("NewCollection Fetched"); // This will log in the browser console
        setNewCollections(data);
      })
      .catch((error) => console.error('Error fetching new collections:', error));
  }, []); // Adding an empty dependency array ensures this runs only once

  return (
    <div className='new-collections'>
      <h1 className={theme === 'dark' ? 'dark-text' : ''}>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => (
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

export default NewCollections;
