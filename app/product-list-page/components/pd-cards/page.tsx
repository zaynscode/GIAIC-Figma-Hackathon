import React from 'react'
import ProductsCol1 from './pd-col-1/page'
import ProductsCol2 from './pd-col-2/page'
import ProductsCol3 from './pd-col-3/page'

function ProductCards2() {
  return (
    <div className='md:w-[1343px] md:h-[1778px] absolute top-[2700px] md:top-[1180px]'>
        <div className='md:w-[1124px] md:h-[1778px] absolute md:left-[158px] py-12 flex gap-12 flex-col top-[100px]'>
            <ProductsCol1/>
            <ProductsCol2/>
            <ProductsCol3/>
        <div className='w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] borderd-[#BDBDBD] relative
         md:left-[370px] left-11
        top-[45px] flex'>
            <div className='w-[84px] h-[74px] border-[1px] p-[25px] bg-[#F3F3F3]'>
                <h2 className='w-[34px] h-6 text-[#BDBDBD] font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px]'>First</h2>
            </div>

            <div className='w-[46px] h-[74px] border-[1px] py-[25px] px-5 bg-white'>
                <h1 className='w-[6px] h-6 font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px] text-[#23A6F0]'>1</h1>
            </div>
        

        <div className='w-[49px] h-[74px] border-[1px] py-[25px] px-5 bg-[#23A6F0]'>
            <h1 className='w-[6px] h-6 font-montserrat font-bold text-[14px]
            leading-6 text-center tracking-[0.2px] text-white'>2</h1>
         </div>

         <div className='w-[46px] h-[74px] border-[1px] py-[25px] px-5 bg-white'>
             <h1 className='w-[6px] h-6 font-montserrat font-bold text-[14px]
            leading-6 text-center tracking-[0.2px] text-[#23A6F0]'>3</h1>
        </div>

        <div className='w-[85px] h-[74px] border-[1px] p-[25px]  bg-white'>
                <h1 className='w-[35px] h-6 font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px] text-[#23A6F0]'>Next</h1>
            </div>
        </div> 

        </div>

    </div>
  )
}

export default ProductCards2