import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
<div className="descriptionbox-navigator">
    <div className="descriptionbox-nav-box">Description</div>
    <div className="descriptionbox-nav-box fade">Reviews(120)</div>
</div>
<div className="descriptionbox-description">
    <p>An e-commerce website serves as a digital storefront, enabling 
        businesses to sell products and services online. It provides a
         seamless shopping experience for customers, featuring a user-friendly
          interface, secure payment gateways, and efficient customer service. 
          By leveraging technologies like AI for personalized recommendations and 
          data analytics for understanding consumer behavior, e-commerce platforms
           can enhance user engagement and drive sales. </p>
           <p>Additionally, these websites offer features such as customer reviews, 
            detailed product descriptions, and various delivery options, 
            making online shopping convenient and accessible for a global audience.</p>
</div>
    </div>
  )
}

export default DescriptionBox