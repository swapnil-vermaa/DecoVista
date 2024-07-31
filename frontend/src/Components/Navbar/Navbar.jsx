import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import nav_dropdown from '../Assets/nav_dropdown_icon.png';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logo_dark from '../Assets/logo-white.png';
import toogle_light from '../Assets/night.png';
import toogle_dark from '../Assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="nav-logo">
        <img className='logo' src={theme === 'light' ? logo : logo_dark} alt="" />
        <p className={theme === 'dark' ? 'dark-text' : ''}>DecoVista</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className={`nav-menu ${theme === 'dark' ? 'dark' : ''}`}>
        <li onClick={() => { setMenu('pen') }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === 'pen' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('decor') }}><Link style={{ textDecoration: 'none' }} to='/decor'>Decor Items</Link>{menu === 'decor' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mandala') }}><Link style={{ textDecoration: 'none' }} to='/mandala'>Mandala Art</Link>{menu === 'mandala' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('anime') }}><Link style={{ textDecoration: 'none' }} to='/anime'>Anime Poster</Link>{menu === 'anime' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img className='cart_icon' src={cart_icon} alt="" /> </Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
        <img onClick={toggle_mode} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon' />
      </div>
    </div>
  );
};

export default Navbar;
