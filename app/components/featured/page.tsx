import React from 'react'
import FeaturedCard1 from './featured-card-1/page'
import FeaturedCard2 from './featured-card-2/page'
import FeaturedCard3 from './featured-card-3/page'

function FeaturedPage() {
  return (
    <div className='md:w-[1366px] md:h-[1044px] xs:w-[414px] xs:h-[2302px] relative '>
        <div className='md:w-[1050px] md:h-[1044px] xs:w-[414px] xs:h-[2302px] absolute md:left-[195px]
         py-28 flex-col flex gap-[80px]'>
            <div className='md:w-[692px] md:h-[134px] xs:w-[279px] xs:h-[184px] absolute md:left-[200px]
            xs:left-[50px] items-center flex gap-[10px] flex-col'>
                <h1 className='w-[114px] h-6 font-bold font-montserrat text-[#23A6F0] items-center
                text-[14px] leading-[24px] tracking-[0.2px]'>Practice Advice</h1>
                <h1 className='w-[309px] h-[50px] font-montserrat font-bold text-[40px] 
                leading-[50px] items-center tracking-[0.2px] text-[#252B42] xs:hidden md:flex'>
                  Featured Posts</h1>
                {/* for mobile */}
                <h1 className='w-[239px] h-[100px] font-montserrat font-bold text-[40px] 
                leading-[50px] text-center tracking-[0.2px] text-[#252B42] md:hidden xs:flex'>
                  Featured Products</h1>
                
                <h1 className='w-[[469px] h-[50px] font-normal font-montserrat text-sm items-center
                text-[#737373] tracking-[0.2px] text-center'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </h1>
            
            </div>
            
              <div className='xs:flex-col md:flex-row md:flex xs:w-[329px] xs:h-[1878px] w-[1045px] h-[606px]
               grid gap-[30px] pt-[250px] relative xs:left-[12px] md:left-0 '>
            <FeaturedCard1/>
            <FeaturedCard2/>
            <FeaturedCard3/>
            
              </div>

        </div>
    </div>
  )
}

export default FeaturedPage