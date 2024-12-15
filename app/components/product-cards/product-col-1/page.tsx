import React from 'react'
import Image from 'next/image'

function ProductCol1() {
  return (
    <div className='zw-[1049px] h-[615px] flex gap-[30px] flex-row '>
      {/* first product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-1.svg'}
        alt='Product Image 1'
        width={239}
        height={427}>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col flex 
        items-center gap-[10px]'>
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

      {/* second product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-2.svg'}
        alt='Product Image 2'
        width={239}
        height={427}>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col 
        items-center flex gap-[10px]'>
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

      {/* third porduct */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-3.svg'}
        alt='Product Image 3'
        width={239}
        height={427}>
        </Image>
        <div className='w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col flex
        items-center gap-[10px]'>
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
      {/* fourth product */}
      <div className='w-[239px] h-[615px]'>
        <Image src={'/image/product-img-4.svg'}
        alt='Product Image 4'
        width={239}
        height={427}>
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

    </div>
  )
}

export default ProductCol1