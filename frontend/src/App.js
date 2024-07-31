import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png';
import men_banner from './Components/Assets/banner_men.png';
import anime_banner from './Components/Assets/banner_anime.png';





function App() {

  const [theme,setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Shop theme={theme} />} />
          <Route path='/decor' element={<ShopCategory banner={men_banner} category="decor" bannerStyle={{ maxWidth: '930px', height: '190px', marginRight: '130px' }} />} />
          <Route path='/mandala' element={<ShopCategory banner={women_banner} category="mandala" bannerStyle={{ maxWidth: '930px', height: '190px', marginRight: '130px' }} />} />
          <Route path='/anime' element={<ShopCategory banner={anime_banner} category="anime" bannerStyle={{ maxWidth: '930px', height: '190px', marginRight: '130px' }} />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Corrected route for individual product */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer theme={theme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
