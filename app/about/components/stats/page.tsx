import React from 'react'

function Stats() {
  return (
    <div className='md:w-[1342px] md:h-[264px] w-[414px] h-[1006px]'>
        <div className='md:w-[1050px] md:h-[264px] relative md:left-[195px] md:py-20 py-[100px] 
        top-[1300px] md:top-0
        flex gap-[50px] '>
            <div className='md:w-[1049px] md:h-[104px] w-[329px] h-[806px] flex md:gap-[30px] gap-[100px]
             md:flex-row flex-col '>

            <div className='w-[238px] h-[104px] flex flex-col relative left-[170px] md:left-0'>
                <h1 className='w-[100px] h-20 font-montserrat font-bold text-[58px] leading-[80px]
                text-[#252B42] text-center relative left-[15px]'>15K</h1>
                <h1 className='w-[146px] h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px]'>Happy Customers</h1>
            </div>

            <div className='w-[241px] h-[104px] flex flex-col relative left-[170px] md:left-0'>
                <h1 className='w-[140px] -20 font-montserrat font-bold text-[58px] leading-[80px]
                text-[#252B42] text-center '>150K</h1>
                <h1 className='w-[134px] h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[7px]'>Monthly Visitors</h1>
            </div>

            <div className='w-[238px] h-[104px] flex flex-col relative left-[145px] md:left-0'>
                <h1 className='w-[59px] md:h-20 font-montserrat font-bold text-[58px] leading-[80px]
                text-[#252B42] text-center relative left-[60px]'>15</h1>
                <h1 className='w-[177px] h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[7px]'>Countries  Worldwide</h1>
            </div>

            <div className='w-[238px] h-[104px] flex flex-col relative left-[170px] md:left-0'>
                <h1 className='w-[138px] md:h-20 font-montserrat font-bold text-[58px] leading-[80px]
                text-[#252B42] text-center '>100+</h1>
                <h1 className='w-[104px] h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[17px]'>Top Partners</h1>
            </div>

            </div>

        </div>

    </div>
  )
}

export default Stats