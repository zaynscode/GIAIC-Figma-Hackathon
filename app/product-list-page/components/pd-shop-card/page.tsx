import React from 'react'
import Image from 'next/image'

function ProductShopCard() {
  return (
    <div className='md:w-[1343px] md:h-[271px] bg-[#FAFAFA] relative md:top-[80px] xs:top-[700px] 
    flex md:flex-row xs:flex-col md:justify-evenly'>
        <div className='md:w-[1088px] md:h-[271px] absolute pb-12 md:left-[180px] xs:left-[40px] '>
            <div className='md:w-[1088px] md:h-[223px] xs:h-[700px] flex md:flex-row xs:flex-col gap-[15px]' >
                {/* Image 1 */}
                <div className='md:w-[205px] md:h-[223px] relative'>
                <Image src={'/image/pd-shop-img-1.svg'}
                alt='Product Shoping Card Image 1'
                width={205}
                height={223}
                className='object-cover md:w-[205px] md:h-[223px] w-[333px] h-[300px]'>
                </Image>
                <h2 className='w-[67px] h-6 absolute md:top-[87px] md:left-[70px] top-[140px] left-[125px]
                 text-white font-montserrat font-bold text-base text-center tracking-[0.1px]'>
                  CLOTHS</h2>
                <h2 className='w-[54px] h-5 absolute md:top-[120.5px] md:left-[76.5px] top-[184px] 
                left-[130px] font-montserrat font-normal text-white text-sm tracking-[0.2px] 
                items-center text-center'>5 Items</h2>
                </div>
                {/* Image 2 */}
                 <div className='md:w-[205px] md:h-[223px]'>
                <Image src={'/image/pd-shop-img-2.svg'}
                alt='Product Shoping Card Image 2'
                width={205}
                height={223}
                className='object-cover md:w-[205px] md:h-[223px] w-[333px] h-[300px]'>
                </Image>
                <h2 className='w-[67px] h-6 absolute md:top-[87px] md:left-[290px] top-[444px] left-[125px]
                 text-white font-montserrat font-bold text-base text-center tracking-[0.1px]'>
                  CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute md:top-[120.5px] md:left-[300px] top-[500px] left-[130px]
               font-montserrat font-normal text-white text-sm tracking-[0.2px] items-center text-center'>
                  5 Items</h2>
                </div> 
                {/* image 3 */}
                 <div className='md:w-[205px] md:h-[223px] '>
                <Image src={'/image/pd-shop-img-3.svg'}
                alt='Product Shoping Card Image 3'
                width={205}
                height={223}
                className='object-cover md:w-[205px] md:h-[223px] w-[333px] h-[300px]'>
                </Image>
                <h2 className='w-[67px] h-6 absolute md:top-[87px] md:left-[510px] top-[760px] left-[125px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute md:top-[120.5px] md:left-[515px] top-[820px] left-[130px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div> 
                {/* image 4 */}
                  <div className='md:w-[205px] md:h-[223px] relative'>
                <Image src={'/image/pd-shop-img-4.svg'}
                alt='Product Shoping Card Image 4'
                width={205}
                height={223}
                className='object-cover md:w-[205px] md:h-[223px] w-[333px] h-[300px]'>
                </Image>
                <h2 className='w-[67px] h-6 absolute md:top-[87px] md:right-[70px] top-[136px] left-[125px]
                 text-white font-montserrat font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute md:top-[120.5px] md:right-[70px] top-[195px] left-[130px]
                font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>  
                {/* image 5 */}
                  <div className='md:w-[205px] md:h-[223px]'>
                <Image src={'/image/pd-shop-img-5.svg'}
                alt='Product Shoping Card Image 5'
                width={205}
                height={223}
                className='object-cover md:w-[205px] md:h-[223px] w-[333px] h-[300px]'>
                </Image>
                <h2 className='w-[67px] h-6 absolute md:top-[87px] md:right-[80px] top-[1380px] left-[125px] text-white font-montserrat
                font-bold text-base text-center tracking-[0.1px]'>CLOTHS</h2>
               <h2 className='w-[54px] h-5 absolute md:top-[120.5px] md:right-[80px] top-[1440px] left-[130px] font-montserrat
                font-normal text-white text-sm tracking-[0.2px] items-center text-center'>5 Items</h2>
                </div>  
            </div>
        </div>
    </div>

   
  )
}

export default ProductShopCard