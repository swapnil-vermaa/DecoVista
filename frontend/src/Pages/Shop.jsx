import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
 import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import ItemList from '../Components/ItemList/ItemList'


const Shop = ({theme}) => {
  return (
    <div>
        
        <Hero/>
        <Popular  theme={theme} />
        <Offers/>
        <NewCollections theme={theme}/>
        <NewsLetter theme={theme}/>
        <ItemList/>
        
        
        
    </div>
  )
}

export default Shop