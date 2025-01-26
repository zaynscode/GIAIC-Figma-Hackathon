import React from 'react'
import Image from 'next/image'
import Companies from './Companies/page'

function PricingPackage() {
  return (
    <div className='md:w-[900px] md:h-[900px]'>
      <div className='md:w-[633px] md:h-[100px] flex gap-[10px] flex-col '>
        <h1 className='md:w-[144px] md:h-[50px] font-montserrat font-bold md:text-[40px] md:leading-[50px]
        text-[#252B42] tracking-[0.2px] relative md:left-[440px]'>Pricing</h1>
        <h1 className='md:w-[469px] md:h-[40px] font-montserrat font-bold md:text-[14px] md:leading-[20px]
        text-[#737373] tracking-[0.2px] text-center relative md:left-[280px]'>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </h1>
      </div>

    <div className='md:w-[311px] md:h-11 flex gap-4 relative left-[50px]'>
      <div className='md:w-[186px] md:h-7 flex relative left-[310px] top-[45px] flex-row'>
        <h2 className='md:w-[67px] md:h-6 font-montserrat font-bold text-base text-[#252B42]
        tracking-[0.1px]'>Monthly</h2>

      <div className='md:w-[45px] md:h-[25px] relative top-[1px] rounded-[16px] border-[1px]
      border-[#23A6F0]'>
        <button className='md:w-[19px] md:h-[19px] relative top-[2px] left-1 border-[1px] bg-[#EBEBEB] 
        rounded-full'>
        </button>
      </div>

      <h1 className='md:w-[51px] md:h-6 font-montserrat md:font-bold md:text-base text-[#252B42]
        tracking-[0.1px] absolute md:left-[120px]'>Yearly</h1>
      </div>
      
      <button className='md:w-[109px] md:h-10 rounded-[37px] bg-[#B2E3FF] py-[7px] px-[20px] flex gap-[10px]
      relative top-[39px] left-[300px]'>
        <h3 className='md:w-[67px] md:h-6 text-[#23A6F0] md:font-bold md:text-[14px] md:leading-6
        tracking-[0.2px] text-center'>Save 25%</h3>
      </button>

    </div>

      {/* Price section */}
    <div className='md:w-[985px] md:h-[704px]'>
      <div className='md:w-[985px] md:h-[690px] flex'>
        {/* free section */}
        <div className='md:w-[327px] md:h-[664px] relative top-[120px] bg-white border-[#23A6F0] 
        border-[1px] rounded-[10px] py-[50px] px-10 flex gap-[35px] flex-col place-items-center'>
          <h1 className='md:w-[62] md:h-8 font-montserrat font-bold md:text-2xl text-[#252B42]
          tracking-[0.1px]'>FREE</h1>
          <h1 className='md:w-[160px] md:h-12 font-montserrat font-bold md:text-base text-[#737373]
          md:tracking-[0.1px] text-center'>Organize across all 
          apps by hand</h1>

          <div className='md:w-[114px] md:h-[56px] flex gap-[10px] flex-row'>
            <h2 className='md:w-[28px] md:h-[50px] font-montserrat font-bold text-[#23A6F0]
            md:text-[40px] md:leading-[50px] tracking-[0.2px]'>0</h2>
            <div className='md:w-[76px] md:h-[56px] flex-col'>
            <h2 className='md:w-4 md:h-8 font-montserrat font-bold md:text-2xl text-[#23A6F0]
          tracking-[0.1px]'>$</h2>
          <h2 className='md:w-[76px] md:h-6 font-montserrat font-bold text-[#23A6F0]
            md:text-[14px] md:leading-6 tracking-[0.2px]'>Per Month
          </h2>
            </div>
          </div>

          <div className='md:w-[247px] md:h-8 flex gap-[10px] relative top-[-20px] left-[25px]'>
            <div className='md:w-8 md:h-8 bg-[#2DC071] rounded-[200px]'>
              <Image src={'/image/check.svg'}
              alt='Check sign'
              width={16}
              height={11}
              className='relative top-[10px] left-2'></Image>
            </div>
            <h2 className='md:w-[200px] md:h-[30px] font-montserrat font-bold text-[#252B42]
            md:text-[13px] md:leading-[26px] tracking-[0.2px]'>Unlimited product updates
            </h2>

          </div>
        </div>

        {/* standard section */}
        <div className='md:w-[327px] md:h-[664px] relative top-[80px] bg-[#252B42]
         border-[#23A6F0] border-[1px] rounded-[10px] py-[50px] px-10 flex gap-[35px] flex-col 
         place-items-center'>
          <h1 className='md:w-[62] md:h-8 font-montserrat font-bold md:text-2xl text-white
          tracking-[0.1px]'>STANDARD</h1>
          <h1 className='md:w-[160px] md:h-12 font-montserrat font-bold md:text-base text-white
          md:tracking-[0.1px] text-center'>Organize across all 
          apps by hand</h1>

          <div className='md:w-[174px] md:h-[56px] flex gap-[10px] flex-row'>
            <h2 className='md:w-[88px] md:h-[50px] font-montserrat font-bold text-[#23A6F0]
            md:text-[40px] md:leading-[50px] tracking-[0.2px]'>9.99</h2>
            <div className='md:w-[76px] md:h-[56px] flex-col'>
            <h2 className='md:w-4 md:h-8 font-montserrat font-bold md:text-2xl text-[#23A6F0]
          tracking-[0.1px]'>$</h2>
          <h2 className='md:w-[76px] md:h-6 font-montserrat font-bold text-[#23A6F0]
            md:text-[14px] md:leading-6 tracking-[0.2px]'>Per Month
          </h2>
            </div>
          </div>

          <div className='md:w-[247px] md:h-8 flex gap-[10px] relative top-[-10px] left-[25px]'>
            <div className='md:w-8 md:h-8 bg-[#2DC071] rounded-[200px]'>
              <Image src={'/image/check.svg'}
              alt='Check sign'
              width={16}
              height={11}
              className='relative top-[10px] left-2'></Image>
            </div>
            <h2 className='md:w-[200px] md:h-[30px] font-montserrat font-bold text-white
            md:text-[13px] md:leading-[26px] tracking-[0.2px]'>Unlimited product updates
            </h2>
          </div>

          <div className='md:w-[247px] md:h-8 flex gap-[10px] relative top-[-30px] left-[25px]'>
            <div className='md:w-8 md:h-8 bg-[#2DC071] rounded-[200px]'>
              <Image src={'/image/check.svg'}
              alt='Check sign'
              width={16}
              height={11}
              className='relative top-[10px] left-2'></Image>
            </div>
            <h2 className='md:w-[200px] md:h-[30px] font-montserrat font-bold text-white
            md:text-[13px] md:leading-[26px] tracking-[0.2px]'>Unlimited product updates
            </h2>
          </div>
        </div>

        {/* premium section */}
        <div className='md:w-[327px] md:h-[664px] relative top-[120px] bg-white border-[#23A6F0] 
        border-[1px] rounded-[10px] py-[50px] px-10 flex gap-[35px] flex-col place-items-center'>
          <h1 className='md:w-[62] md:h-8 font-montserrat font-bold md:text-2xl text-[#252B42]
          tracking-[0.1px]'>PREMIUM</h1>
          <h1 className='md:w-[160px] md:h-12 font-montserrat font-bold md:text-base text-[#737373]
          md:tracking-[0.1px] text-center'>Organize across all 
          apps by hand</h1>

          <div className='md:w-[190px] md:h-[56px] flex gap-[10px] flex-row'>
            <h2 className='md:w-[104px] md:h-[50px] font-montserrat font-bold text-[#23A6F0]
            md:text-[40px] md:leading-[50px] tracking-[0.2px]'>19.99</h2>
            <div className='md:w-[76px] md:h-[56px] flex-col'>
            <h2 className='md:w-4 md:h-8 font-montserrat font-bold md:text-2xl text-[#23A6F0]
          tracking-[0.1px]'>$</h2>
          <h2 className='md:w-[76px] md:h-6 font-montserrat font-bold text-[#23A6F0]
            md:text-[14px] md:leading-6 tracking-[0.2px]'>Per Month
          </h2>
            </div>
          </div>

          <div className='md:w-[247px] md:h-8 flex gap-[10px] relative top-[-20px] left-[25px]'>
            <div className='md:w-8 md:h-8 bg-[#2DC071] rounded-[200px]'>
              <Image src={'/image/check.svg'}
              alt='Check sign'
              width={16}
              height={11}
              className='relative top-[10px] left-2'></Image>
            </div>
            <h2 className='md:w-[200px] md:h-[30px] font-montserrat font-bold text-[#252B42]
            md:text-[13px] md:leading-[26px] tracking-[0.2px]'>Unlimited product updates
            </h2>

          </div>
        </div>
      </div>
    </div>

        {/* companies */}
        <div className='md:w-[1050px] md:h-[365px] bg-[#FAFAFA] absolute top-[1120px] py-20 
        place-items-center'>
          <h2 className='md:w-[385px] md:h-[30px] font-montserrat font-normal md:text-[20px] 
          md:leading-[30px] text-[#252B42] text-center tracking-[0.2px] relative left-[-50px]'>
            Trusted By Over 4000 Big Companies</h2>
            <Companies/>
            


      </div>

    </div>
  )
}

export default PricingPackage