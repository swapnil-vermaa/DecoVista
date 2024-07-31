import React from 'react';
import './NewsLetter.css';

const NewsLetter = ({ theme }) => {
  return (
    <div className='newsletter'>
      <h1 className={theme === 'dark' ? 'dark-text' : ''}>Get Exclusive Offers On Your Email</h1>
      <p className={theme === 'dark' ? 'dark-text' : ''}>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
