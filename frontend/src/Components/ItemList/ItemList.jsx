import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'; // Adjust this path as necessary
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from an API or data source
    fetch('/api/items')
     .then(response => response.json())
     .then(data => {
        console.log(data); // Check if data is correctly structured
        setItems(data);
      })
     .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      {items.length > 0? (
        items.map(item => (
          <Link key={item.id} to={`/product-details/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item id={item.id} name={item.name} image={item.image} price={item.price} />
          </Link>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ItemList;
