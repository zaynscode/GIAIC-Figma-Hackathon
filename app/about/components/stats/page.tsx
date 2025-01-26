import React from 'react'

function Stats() {
  return (
    <div className='md:w-[1342px] md:h-[264px]'>
        <div className='md:w-[1050px] md:h-[264px] relative md:left-[195px] py-20 flex gap-[50px]'>
            <div className='md:w-[1049px] md:h-[104px] flex gap-[30px]'>

            <div className='md:w-[238px] md:h-[104px] flex flex-col'>
                <h1 className='md:w-[100px] md:h-20 font-montserrat md:font-bold md:text-[58px] md:leading-[80px]
                text-[#252B42] text-center relative left-[15px]'>15K</h1>
                <h1 className='md:w-[146px] md:h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px]'>Happy Customers</h1>
            </div>

            <div className='md:w-[241px] md:h-[104px] flex flex-col'>
                <h1 className='md:w-[140px] md:h-20 font-montserrat md:font-bold md:text-[58px] md:leading-[80px]
                text-[#252B42] text-center '>150K</h1>
                <h1 className='md:w-[134px] md:h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[7px]'>Monthly Visitors</h1>
            </div>

            <div className='md:w-[238px] md:h-[104px] flex flex-col'>
                <h1 className='md:w-[59px] md:h-20 font-montserrat md:font-bold md:text-[58px] md:leading-[80px]
                text-[#252B42] text-center relative left-[60px]'>15</h1>
                <h1 className='md:w-[177px] md:h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[7px]'>Countries  Worldwide</h1>
            </div>

            <div className='md:w-[238px] md:h-[104px] flex flex-col'>
                <h1 className='md:w-[138px] md:h-20 font-montserrat md:font-bold md:text-[58px] md:leading-[80px]
                text-[#252B42] text-center '>100+</h1>
                <h1 className='md:w-[104px] md:h-6 font-bold font-montserrat text-base text-[#737373]
                text-center tracking-[0.1px] relative left-[17px]'>Top Partners</h1>
            </div>

            </div>

        </div>

    </div>
  )
}

export default Stats