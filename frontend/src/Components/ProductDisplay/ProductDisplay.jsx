import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
   
const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(120)</p>

                </div>
                <div className="productdisplay-right-prices">
                    Rs.{product.price}
                </div>
                <div className="productdisplay-right-description">
                    hiw bcwibcs ubcilwabvs uihwisc whdbiwbc iubciuvs
                    jhbcwauivc wcbgiucb  ncawivbieaubeibwbiw wbciwb
                    wjcbiwaucbwbiuwbcaiuvbe
                </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART </button>
         <p className='productdisplay-right-category'><span className='productdisplay-right-category'>Category: </span>Beautiful wall hanging desings </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
