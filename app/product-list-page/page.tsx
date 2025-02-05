import React from 'react'
import ProductListHeader from './components/product-list-header/page'
import ProductContainer from './components/product-container/page'
import FilterRow from './components/filter-row/page'
import Clients from './components/product-clients/page'
import ProductCards2 from './components/pd-cards/page'
import ProductShopCard from './components/pd-shop-card/page'
import Navbar from '../components/header/navbar/page'
import Footer from '../components/footer/page'

function ProductListPage() {
  return (
    <div className='relative'>
        <ProductListHeader/>
         <Navbar/>
        <ProductContainer/>
         <ProductShopCard/>
        <FilterRow/>
         <Clients/>
         <div className=' relative md:top-[110px] top-[4080px]'> 
        <Footer/>
          </div> 
        <ProductCards2/> 
          
    </div>
  )
}

export default ProductListPage