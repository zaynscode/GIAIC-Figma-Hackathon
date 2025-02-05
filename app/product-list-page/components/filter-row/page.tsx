import React from 'react'
import Image from 'next/image'

function FilterRow() {
  return (
    <div className='md:w-[1330px] md:h-24'>
    <div className='md:w-[1050px] md:h-24 md:absolute md:left-[195px] relative top-[2330px] md:top-[530px]
     py-6 flex md:flex-row flex-col gap-[80px] '>
        <div className='md:w-[1049px] md:h-[50px] w-[252px] h-[148px] flex flex-col md:flex-row relative 
       md:left-0 left-[78px] gap-8 md:gap-0 md:justify-between'>
            {/* 1/3 */}
            <div className='w-[168px] h-6 px-[1px] flex gap-[15px relative left-[30px] md:left-0'>
                <h2 className='w-[166px] h-6 font-montserrat font-bold text-[#737373] text-[14px]
                leading-6 tracking-[0.2px] text-center'>Showing all 12 results</h2>
            </div>

            {/* 2/3 */}
           <div className='md:w-[177px] w-[164px] h-[46px] px-[1px] flex gap-[15px] justify-center
            relative left-[38px] md:left-0'>
                <h1 className='w-[53px] h-6 text-[#737373] font-montserrat font-bold 
                 text-sm tracking-[0.2px]'>Views:</h1>
                 <div className='w-[107px] h-[46px] flex gap-[15px] relative bottom-[10px]'>
                <div  className='w-[46px] h-[46px] rounded-[5px] border-[1px] p-[15px] border-[#ECECEC]'>
                    <Image src={'/image/pd-menu-1.svg'}
                    alt='Product list menu 1'
                    width={16}
                    height={16}></Image>
                    </div>

                    <div  className='w-[46px] h-[46px] rounded-[5px] border-[1px] p-[15px] border-[#ECECEC]'>
                    <Image src={'/image/pd-menu-2.svg'}
                    alt='Product list menu 2'
                    width={16}
                    height={16}></Image>
                    </div>
                 </div>
              </div> 

              {/* 3/3 */}
               <div className='w-[252px] h-[50px] px-[1px] flex gap-[15px] flex-row relative bottom-[10px]'>
                <div className='w-[151px] h-[50px] rounded-[5px] border-[1px] bg-[#F9F9F9] border-[#DDDDDD]'>
                <h2 className='w-[74px] h-7 relative top-[11px] left-[18px] text-[#737373]
                font-montserrat font-normal text-[14px] leading-[28px] tracking-[0.2px]'>Popularity</h2>
                <select name="Popularity" id="" className='w-[26px] h-[14px] absolute top-[21px] left-[86px]
                 text-[#737373] bg-[#FAFAFA]'></select>
                </div>

                <div className='w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] px-[20px] py-[10] flex 
                gap-[10px]'>
                    <h1 className='w-10 h-6 font-bold font-montserrat text-[14px] leading-[24px] 
                    text-center tracking-[0.2px] text-white p-[12px]'>Filter</h1>

                </div>

              </div> 
        </div>
    </div>
</div>
  )
}

export default FilterRow