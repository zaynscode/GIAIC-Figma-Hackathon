import React from 'react'

function ProductContainer() {
  return (
    <div className='md:w-full md:h-[92px] xs:h-[202px] py-6 bg-[#FAFAFA] 
    relative md:top-[80px] xs:top-[670px] md:flex md:justify-evenly '>
        <div className='md:w-[1049px] md:h-[44px] xs:h-[154px] md:flex xs:flex-col
         gap-[30px] relative md:left-[26px]'>
         <div className='md:w-[532px] md:h-8  xs:h-[80px] xs:py-6 md:py-0 w-[360px] md:place-items-start
          place-items-center'>
            <h3 className='text-[#252B42] w-[63px] h-8 font-montserrat font-bold text-2xl 
            tracking-[0.1px] md:text-center relative left-[10px] md:left-0'>Shop</h3>
        </div> 
         <div className='md:w-[509px] h-[44px] flex gap-[5px] flex-col md:flex-row md:justify-self-end 
         absolute'>
             <div className='w-[119px] h-11 flex gap-[10px] relative left-[130px] md:left-[940px]
             top-[27px] md:top-0 md:justify-items-end'>
                <h3 className='text-[#252B42] w-[43px] h-6 font-montserrat font-bold text-[14px] 
                leading-6 text-center tracking-[0.2px]'>Home</h3>
                <select name="Home" id="0" className='-rotate-90 bg-[#fafafa] text-[#BDBDBD]
                w-[19px] h-[27px]'></select>
                <h3 className='w-[37px] h-6 font-montserrat font-bold text-[14px] 
                leading-6 text-center tracking-[0.2px] text-[#BDBDBD]'>Shop</h3>
            </div> 

        </div> 
        </div>

    </div>
  )
}

export default ProductContainer