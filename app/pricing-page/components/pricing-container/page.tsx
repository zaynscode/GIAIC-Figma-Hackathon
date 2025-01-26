import React from 'react'
import InnerHeader from './inner-header/page'
import PricingPackage from './pricing-package/page'


function PrcContainer() {
  return (
    <div className='md:w-[1349px] md:h-[1500px] md:bg-[#FAFAFA]'>
        <div className='md:w-[1050px] md:h-[1600px] relative left-[195px] py-28 flex gap-12 flex-col'>
            <InnerHeader/>
            <PricingPackage/>

        </div>

    </div>
  )
}

export default PrcContainer