import React from 'react'
import Image from 'next/image'

function ProductShopCard() {
  return (
    <div className='md:w-[1343px] md:h-[271px] bg-[#FAFAFA] relative md:top-[80px] xs:top-[1200px] 
    flex md:flex-row xs:flex-col justify-evenly'>
        <div className='md:w-[1088px] md:h-[271px] absolute pb-12 md:left-[180px] xs:left-[40px]'>
            <div className='md:w-[1088px] md:h-[223px] xs:h-[700px] flex md:flex-row xs:flex-col gap-[15px]' >
                {/* Image 1 */}
                <div className='w-[205px] h-[223px]'>
                <Image src={'/image/pd-shop-img-1.svg'}
                alt='Product Shoping Card Image 1'
                width={205}
                height={223}
                className='object-cover'>
                </Image>
                <h2 className='w-[67px] h-6 absolute top-[87px] left-[70px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
                <h2 className='w-[54px] h-5 absolute top-[120.5px] left-[76.5px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>
                {/* Image 2 */}
                <div className='w-[205px] h-[223px]'>
                <Image src={'/image/pd-shop-img-2.svg'}
                alt='Product Shoping Card Image 2'
                width={205}
                height={223}
                className='object-cover'>
                </Image>
                <h2 className='w-[67px] h-6 absolute top-[87px] left-[290px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute top-[120.5px] left-[300px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>
                {/* image 3 */}
                <div className='w-[205px] h-[223px] '>
                <Image src={'/image/pd-shop-img-3.svg'}
                alt='Product Shoping Card Image 3'
                width={205}
                height={223}
                className='object-cover'>
                </Image>
                <h2 className='w-[67px] h-6 absolute top-[87px] left-[510px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute top-[120.5px] left-[515px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>
                {/* image 4 */}
                <div className='w-[205px] h-[223px] relative'>
                <Image src={'/image/pd-shop-img-4.svg'}
                alt='Product Shoping Card Image 4'
                width={205}
                height={223}
                className='object-cover'>
                </Image>
                <h2 className='w-[67px] h-6 absolute top-[87px] right-[70px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute top-[120.5px] right-[70px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>
                {/* image 5 */}
                <div className='w-[205px] h-[223px]'>
                <Image src={'/image/pd-shop-img-5.svg'}
                alt='Product Shoping Card Image 5'
                width={205}
                height={223}
                className='object-cover'>
                </Image>
                <h2 className='w-[67px] h-6 absolute top-[87px] right-[80px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute top-[120.5px] right-[80px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>
            </div>
        </div>
    </div>

   
  )
}

export default ProductShopCard