
import React from 'react'
import Header from '../components/header/page'
import ShopCards from '../components/shop-cards/page'
import ProductCards from '../components/product-cards/page'
import Carousel2 from '../components/carousel2/page'
import Container from '../components/container-fluid/page'
import FeaturedPage from '../components/featured/page'
import Footer from '../components/footer/page'

function Home() {
  return (
    <div className=' '>
        <Header/>
          <ShopCards/>
         <ProductCards/>
         <Carousel2/> 
         <Container/>
        <FeaturedPage/> 
        <div className='relative top-[-1160px]'>
         <Footer/>  
        </div>

    </div>
  )
}

export default Home