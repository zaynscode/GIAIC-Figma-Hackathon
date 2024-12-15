import React from 'react'
import FeaturedCard1 from './featured-card-1/page'
import FeaturedCard2 from './featured-card-2/page'
import FeaturedCard3 from './featured-card-3/page'

function FeaturedPage() {
  return (
    <div className='w-[1440px] h-[1044px] relative '>
        <div className='w-[1050px] h-[1044px] absolute left-[195px] py-28 flex-col flex gap-[80px]'>
            <div className='w-[692px] h-[134px] absolute left-[200px] items-center flex gap-[10px] flex-col'>
                <h1 className='w-[114px] h-6 font-bold font-montserrat text-[#23A6F0] items-center
                text-sm leading-[24px] tracking-[0.2px]'>Practice Advice</h1>
                <h1 className='w-[309px] h-[50px] font-montserrat font-bold text-[40px] 
                leading-[50px] items-center tracking-[0.2px] text-[#252B42]'>Featured Posts</h1>
                <h1 className='w-[[469px] h-[50px] font-normal font-montserrat text-sm items-center
                text-[#737373] tracking-[0.2px] text-center'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </h1>
            </div>
            <div className='w-[1045px] h-[606px] flex gap-[30px] pt-[250px]'>
            <FeaturedCard1/>
            <FeaturedCard2/>
            <FeaturedCard3/>
            </div>

        </div>
    </div>
  )
}

export default FeaturedPage