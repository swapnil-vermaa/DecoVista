import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is uncommented
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = ({ productId, theme }) => { // Accept productId as a prop
  const navigate = useNavigate(); // Use navigate for routing

  const handleItemClick = (itemId) => {
    navigate(`/product/${itemId}`); // Navigate to the product detail page
  };

  return (
    <div className={`relatedproducts ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h1 >Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              price={item.price}
              onClick={() => handleItemClick(item.id)} // Handle click event
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;