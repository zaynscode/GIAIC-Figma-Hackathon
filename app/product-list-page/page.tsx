import React from 'react'
import ProductListHeader from './components/product-list-header/page'
import ProductListNavbar from './components/product-list-header/product-list-navbar/page'
import ProductContainer from './components/product-container/page'

import FilterRow from './components/filter-row/page'
import Clients from './components/product-clients/page'
import ProductFooter from './components/product-footer/page'
import ProductCards2 from './components/pd-cards/page'
import ProductShopCard from './components/pd-shop-card/page'

function ProductListPage() {
  return (
    <div className='md:w-[1340px] md:h-[3038px] xs:w-[428px] relative'>
        <ProductListHeader/>
         <ProductListNavbar/>
        <ProductContainer/>
        <ProductShopCard/>
        <FilterRow/>
        <Clients/>
        <ProductFooter/>
        <ProductCards2/>
    </div>
  )
}

export default ProductListPage