import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  if (!product) {
    return <div className='breadcrum'>HOME <img src={arrow_icon} alt="" /> SHOP</div>;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {/* {product.category ? ( */}
        
   {product.category} <img src={arrow_icon} alt="" />
        
      {/* ) : null} */}
      {product.name}
    </div>
  );
}

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string
  })
};

Breadcrum.defaultProps = {
  product: null
};

export default Breadcrum;
