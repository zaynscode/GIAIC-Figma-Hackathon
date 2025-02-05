import React from 'react'
import ProductCol1 from './product-col-1/page'
import ProductCol2 from './product-col-2/page'

function ProductCards() {
  return (
    <div className='md:w-[1300px] md:h-[1652px] xs:h-[5510px] relative'>
        <div className='md:w-[1124px] md:h-[1652px] xs:h-[5510px] relative md:left-[195px]
         grid md:gap-20 xs:gap-12 py-20 flex-col'>
                <div className='md:w-[692px] md:h-[102px] xs:h-[154px] items-center'>
                  {/* title */}
                  <div className='md:w-[691px] md:h-[102px] xs:w-[279px] xs:h-[154px] flex-col flex
                   gap-[10px] absolute md:left-[200px] xs:left-[100px] md:items-center'>
                    <h1 className='w-[191px] h-[30px] font-montserrat font-normal text-xl md:items-center
                    leading-[30px] text-[#737373] tracking-[0.2px] text-center'>Featured Products</h1>
                    <h3 className='md:w-[299px] md:h-8 xs:w-[189px] xs:h-[64px] flex font-montserrat 
                    font-bold text-[23px] leading-8 text-[#252B42] tracking-[0.1px] text-center 
                    itmes-center'>BESTSELLER PRODUCTS</h3>
                    <h1 className='md:w-[347px] h-5 xs:w-[201px] font-montserrat font-normal text-sm 
                    text-center tracking-[0.2px] text-[#737373]'>Problems trying to resolve the conflict between </h1>
                </div> 
                <div className='relative top-[120px]'>
                  <div className=' md:w-full xs:h-[5510px] py-16 flex gap-20
                  flex-col'>
         <ProductCol1/>
         <ProductCol2/> 
                  </div>
                </div>
                </div>
        </div>

    </div>
  )
}

export default ProductCards