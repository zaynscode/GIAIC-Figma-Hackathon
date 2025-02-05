import Image from 'next/image'
import React from 'react'



function ProductListHeader() {
  return (
            <div className='w-full h-[58px]  bg-[#23856D] flex justify-center 
                p-3 md:flex xs:hidden'>
                <div className='w-[1300px] h-[46px] absolute top-[9px] left-[40px] flex justify-around
                pl-[100px]'>
                    {/* phone & mail */}
                    <div className='w-[415px] h-[46px] flex gap-[10px] '>
                    {/* phone */}
                        <div className='w-[145px] h-11 rounded-[5px] p-[10px] flex gap-[5px]'>
                            <Image src={'/image/phone-icon.svg'}
                            alt='Phone Icon'
                            width={16}
                            height={16}
                            ></Image>
                            <h1 className='w-[104px] h-6 font-montserrat font-bold text-sm tracking-[0.2px]
                            text-[#FFFFFF]'>(225) 555-0118</h1>
                        </div>
                    {/* email */}
                    <div className='w-[260px] h-11 rounded-[5px] p-[10px] flex gap-[5px]'>
                    <Image src={'/image/mail-icon.svg'}
                            alt='Mail Icon'
                            width={16}
                            height={16}
                            ></Image>
                            <h1 className='w-[219px] h-6 font-montserrat font-bold text-sm tracking-[0.2px]
                            text-[#FFFFFF]'>michelle.rivera@example.com</h1>
                    </div>
                    </div>
                        {/* offer */}
                    <div className='w-[332px] h-11 p-[10px] flex justify-self-center gap-[10px]'>
                        <h1 className='w-[312px] h-6 font-montserrat font-bold text-sm tracking-[0.2px]
                            text-[#FFFFFF]'>Follow Us  and get a chance to win 80% off</h1>
                    </div>
                    {/* social media links */}
                    <div className='w-[233px] h-[46px] p-[10px] flex gap-[10px] justify-self-end'>
                        <h1 className='w-[83px] h-6 font-montserrat font-bold text-sm tracking-[0.2px]
                            text-[#FFFFFF] justify-items-end'>Follow Us  :</h1>
                            {/* social media icons */}
                            <div className='w-[120px] h-[26px] flex'>
                            
<Image src={'/image/Instagram.svg'}
alt='Instagram icon'
width={26}
height={26}
className='p-[5px] gap-[10px] left-0'
></Image>

<Image src={'/image/Youtube.svg'}
alt='Youtube icon'
width={26}
height={26}
className='p-[5px] gap-[10px] left-[31.5px]'
></Image>

<Image src={'/image/Facebook.svg'}
alt='Facebook icon'
width={26}
height={26}
className='p-[5px] gap-[10px] left-[61.5px]'
></Image>

<Image src={'/image/Twitter.svg'}
alt='Twitter icon'
width={26}
height={26}
className='p-[5px] gap-[10px] left-[93.5px]'
></Image>
                        </div>
                    </div>
                </div>
                </div>
          
  )
}

export default ProductListHeader