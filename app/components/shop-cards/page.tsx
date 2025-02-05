import React from 'react'
import ShopRow from './shop-rows/page'

function ShopCards() {
  return (
    <div className=' xs:h-[1850px] md:h-[770px] md:bg-[#FAFAFA] relative top-[110px] 
    md:top-[-45px]'>
        <div className='md:w-[1050px] md:h-[770px]  xs:h-[1850px] relative md:left-[195px]
         py-20 flex-col grid gap-12 '> 
             <div className='md:w-[607px] md:h-[62px] h-[82px] '>
                 <div className='md:w-[607px] md:h-[62px] xs:w-[333px] xs:h-[82px] gap-[10px] flex flex-col 
               absolute left-[31px] place-items-center md:left-[200px] '>
                    <div className='w-[181px] h-8 font-montserrat font-bold text-2xl 
                    tracking-[0.1px] text-[#252B42] text-center'>
                      EDITOR’S PICK</div>
                    <div className='md:w-[347px] xs:w-[197px] md:h-5 xs:h-10 font-montserrat font-normal 
                    text-sm text-center text-[#737373] tracking-[0.2px]  items-center md:left-[100px]'>
                      Problems trying to resolve the conflict between </div>
                </div> 
            </div> 

         <ShopRow/> 
        
         </div> 

    </div>
  )
}

export default ShopCards