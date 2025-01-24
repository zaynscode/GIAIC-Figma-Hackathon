import React from 'react'
import ProductListHeader from '../product-list-page/components/product-list-header/page'
import ProductsNavbar from './components/Products-Navbar/page'
import ProductsCard from './components/Products-Card/page'

function Products() {
  return (
    <div className='w-[1342px] h-[3147px]'>
        <ProductListHeader/>
        <ProductsNavbar/>
        <ProductsCard/>

    </div>
  )
}

export default Products