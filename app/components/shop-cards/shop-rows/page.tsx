import React from 'react'
import Image from 'next/image'
function ShopRow() {
  return (
    <div className='md:w-[1050px] md:h-[500px] xs:w-[325px] xs:h-[1560px] md:flex-row xs:flex-col 
    flex gap-[30px]'>
        {/* Men section */}
        <div className='w-[510px] h-[500px] relative'>
        <Image src={'/image/men.svg'}
        alt='men collection'
        width={510}
        height={500}
        className='object-cover md:w-[510px] xs:w-[324px] h-[500px]'></Image>
        <button className='w-[170px] h-12 absolute top-[426px] left-[31px] bg-[#FFFFFF] '>
            <h1 className='w-10 h-6 absolute top-3 left-16 font-montserrat font-bold text-base text-center
            text-[#252B42] tracking-[0.1px]'>MEN</h1>
        </button>
        </div>
        {/* Women Section */}
        <div className='md:w-[240px] xs:w-[325px] h-[500px] relative'>
        <Image src={'/image/women.svg'}
        alt='women collection'
        width={240}
        height={500}
        className='object-cover md:w-[240px] xs:w-[325px] h-[500px]'></Image>
        <button className='w-[136px] h-12 absolute top-[434px] left-[21px] px-12 py-3 grid gap-[10px]
        bg-[#FFFFFF]'>
            <div className='w-[69px] h-6 font-montserrat font-bold text-base text-center
            text-[#252B42] tracking-[0.1px] '>WOMEN</div>
        </button>
        </div>

        <div className='md:w-[240px] xs:w-[325px] xs:h-[242px] md:h-[500px] grid gap-4'>
                 {/*accesories section  */}
            <div className='md:w-[240px] xs:w-[325px] h-[242px] relative'>
            <Image src={'/image/accesories.svg'}
        alt='assecories section'
        width={240}
        height={500}
        className='object-cover md:w-[510px] xs:w-[324px] h-[242px]'>
        </Image>
        <button className='w-[170px] h-12 absolute top-[171px] left-[14px] py-3 px-[26px] grid gap-[10px]
        bg-[#FFFFFF]'>
            <div className='w-[118px] h-6 font-montserrat font-bold text-base text-center
            text-[#252B42] tracking-[0.1px]'>ACCESSORIES
            </div>
        </button>
        </div>
        <div>
        {/* Kids collection */}
        <div className='md:w-[240px] xs:w-[325px] h-[242px] relative'>
       <Image src={'/image/kids.svg'}
        alt='kids collection'
        width={240}
        height={500}
        className='object-cover md:w-[510px] xs:w-[324px] h-[242px]' ></Image>           
        <button className='w-[120px] h-12 absolute top-[176px] left-[18px] py-3 px-10 
        grid gap-[10px] bg-[#FFFFFF]'>
            <div className='w-10 h-6 font-montserrat font-bold text-base text-center
            text-[#252B42] tracking-[0.1px]'>KIDS</div>
            </button> 
        </div>
        </div>
        </div>

    </div>
  )
}

export default ShopRow