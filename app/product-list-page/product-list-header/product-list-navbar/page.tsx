import React from 'react'
import Image from 'next/image'

function ProductListNavbar() {
  return (
    
    <div className='w-full h-[58px] absolute top-[70px] flex justify-between'>
    <div className='w-[187px] h-[58px] absolute left-[38px]'>
        <h1 className='text-[#252B42] w-[108px] h-8 absolute top-[13px] font-montserrat font-bold
        text-2xl trackking-[0.1px]'>Bandage</h1>
    </div>

    <div className='w-[1115px] h-[58px] flex absolute left-[265px]'>
        <div className='w-[361px] h-[25px] absolute top-[16.5px] flex gap-[15px] flex-row'>
            
            <h1 className='w-[43px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#252B42] text-center'>Home</h1>
            
            <div className='w-[63px] h-[25px] flex flex-row gap-[10px]'>
                <h1 className='w-[38px] h-7 left-[6px] text-sm leading-7 font-medium text-[#252B42]
                tracking-[0.2px] font-montserrat text-center'>Shop</h1>
                <Image src={'/image/Vector.svg'}
                            alt='Vector Icon'
                            width={10}
                            height={10}
                            ></Image>
                            
                 </div>
            <h1 className='w-[45px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#252B42] text-center'>About
            </h1>
            <h1 className='w-[33px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#252B42] text-center'>Blog</h1>
            <h1 className='w-[58px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#252B42] text-center'>Contact</h1>
             <h1 className='w-11 h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#252B42] text-center'>Pages</h1>
        </div>
        <div className='w-[324px] h-[54px] absolute top-[2px] left-[832px] flex'>
          <div className='w-[166px] h-[54px] flex'>
            <div className='w-[166px] h-[54px] rounded-[37px] p-[15px] flex gap-[5px]'>
              <Image src={'/image/profile-icon.svg'}
              alt='Profile Icon'
              width={12}
              height={12}
              ></Image>
              <h1 className='w-[119px] h-6 font-montserrat font-bold text-xs leading-6 tracking-[0.2px]
              text-center text-[#23A6F0]'>Login / Register</h1>
           </div>
           <Image src={'image/search.svg'}
           alt='Search icon'
           width={46}
           height={46}></Image>
           <Image src={'image/cart.svg'}
           alt='Cart icon'
           width={56}
           height={46}></Image>
           <Image src={'image/favorite.svg'}
           alt='Favorite icon'
           width={46}
           height={46}></Image>

          </div>

        </div>

    </div>
    </div>
  )
}

export default ProductListNavbar