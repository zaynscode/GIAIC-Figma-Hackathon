import React from 'react'
import Image from 'next/image'

function FilterRow() {
  return (
    <div className='w-[1330px] h-24'>
    <div className='w-[1050px] h-24 absolute left-[195px] top-[530px] py-6 flex flex-row gap-[80px] '>
        <div className='w-[1049px] h-[50px] flex justify-between'>
            {/* 1/3 */}
            <div className='w-[168px] h-6 px-[1px] flex gap-[15px]'>
                <h2 className='w-[166px] h-6 font-montserrat font-bold text-[#737373] text-sm
                tracking-[0.2px]'>Showing all 12 results</h2>
            </div>

            {/* 2/3 */}
            <div className='w-[177px] h-[46px] px-[1px] flex gap-[15px] justify-center'>
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