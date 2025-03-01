import React from 'react'
import Image from 'next/image'

function ProductCol2() {
  return (
    <div className='md:w-[1049px] md:h-[615px] xs:w-[328px] xs:h-[2550px] flex gap-[30px] md:flex-row
    xs:flex-col relative left-[70px] md:left-0'>
      {/* fifth product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-5.svg'}
        alt='Product Image 5'
        width={239}
        height={427}
        className='md:flex xs:hidden'>
        </Image>
        {/* fifth image for mobile */}
        <Image src={'/image/product-img-5-m.svg'}
        alt='Product Image 5 for mobile'
        width={239}
        height={427}
        className='xs:flex md:hidden'>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col flex gap-[10px]
        items-center'>
          <h1 className='w-[131px] h-6 font-montserrat font-bold text-base text-center 
          tracking-[0.1px] text-[#252B42]'>Graphic Design</h1>
        <h1 className='w-[146px] h-6 font-montserrat font-bold text-[#737373] text-sm
        text-center tracking-[0.2px]'>English Department</h1>
        <div className='w-[108px] h-[34px] py-[5px] px-[3px] flex gap-[5px] justify-center'>
          <h1 className='w-[52px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#BDBDBD]'>$16.48</h1>
          <h1 className='w-[45px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#23856D]'>$6.48</h1>
        </div>
          <Image src={'/image/color-dots.svg'}
          alt='color dots'
          width={82.23}
          height={16}></Image>

        </div>
      </div>

      {/* sixth product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-6.svg'}
        alt='Product Image 6'
        width={239}
        height={427}
        className='xs:hidden md:flex'>
        </Image>
        {/* sixth image for mobile */}
        <Image src={'/image/product-img-6-m.svg'}
        alt='Product Image 6 for mobile'
        width={239}
        height={427}
        className='md:hidden xs:flex'>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col flex gap-[10px]
        items-center'>
          <h1 className='w-[131px] h-6 font-montserrat font-bold text-base text-center 
          tracking-[0.1px] text-[#252B42]'>Graphic Design</h1>
        <h1 className='w-[146px] h-6 font-montserrat font-bold text-[#737373] text-sm
        text-center tracking-[0.2px]'>English Department</h1>
        <div className='w-[108px] h-[34px] py-[5px] px-[3px] flex gap-[5px] justify-center'>
          <h1 className='w-[52px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#BDBDBD]'>$16.48</h1>
          <h1 className='w-[45px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#23856D]'>$6.48</h1>
        </div>
          <Image src={'/image/color-dots.svg'}
          alt='color dots'
          width={82.23}
          height={16}></Image>

        </div>
      </div>

      {/* seventh porduct */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-7.svg'}
        alt='Product Image 7'
        width={239}
        height={427}
        className='xs:hidden md:flex'>
        </Image>
        {/* seventh image for mobile */}
        <Image src={'/image/product-img-6-m.svg'}
        alt='Product Image 7 for mobile'
        width={239}
        height={427}
        className='md:hidden xs:flex'>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] items-center flex-col flex gap-[10px]'>
          <h1 className='w-[131px] h-6 font-montserrat font-bold text-base text-center 
          tracking-[0.1px] text-[#252B42]'>Graphic Design</h1>
        <h1 className='w-[146px] h-6 font-montserrat font-bold text-[#737373] text-sm
        text-center tracking-[0.2px]'>English Department</h1>
        <div className='w-[108px] h-[34px] py-[5px] px-[3px] flex gap-[5px] justify-center'>
          <h1 className='w-[52px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#BDBDBD]'>$16.48</h1>
          <h1 className='w-[45px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#23856D]'>$6.48</h1>
        </div>
          <Image src={'/image/color-dots.svg'}
          alt='color dots'
          width={82.23}
          height={16}></Image>

        </div>
      </div>
      {/* eigth product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-8.svg'}
        alt='Product Image 8'
        width={239}
        height={427}
        className='md:flex xs:hidden'>
        </Image>
        {/* eight image for mobile */}
        <Image src={'/image/product-img-8-m.svg'}
        alt='Product Image 8 for mobile'
        width={239}
        height={427}
        className='md:hidden xs:flex'>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col items-center
         flex gap-[10px]'>
          <h1 className='w-[131px] h-6 font-montserrat font-bold text-base text-center 
          tracking-[0.1px] text-[#252B42]'>Graphic Design</h1>
        <h1 className='w-[146px] h-6 font-montserrat font-bold text-[#737373] text-sm
        text-center tracking-[0.2px]'>English Department</h1>
        <div className='w-[108px] h-[34px] py-[5px] px-[3px] flex gap-[5px] justify-center'>
          <h1 className='w-[52px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#BDBDBD]'>$16.48</h1>
          <h1 className='w-[45px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-center text-[#23856D]'>$6.48</h1>
        </div>
          <Image src={'/image/color-dots.svg'}
          alt='color dots'
          width={82.23}
          height={16}></Image>

        </div>

      </div>

    </div>
  )
}

export default ProductCol2