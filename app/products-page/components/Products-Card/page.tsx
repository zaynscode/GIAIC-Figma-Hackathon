import React from 'react'
import Image from 'next/image'

function ProductsPageCard() {
  return (
    <div className='w-[1342px] h-[700px] py-12 bg-[#FAFAFA]'>
      
      <div className='w-[1342px] h-[44px] flex gap-[5px] flex-row relative '>
            <div className='w-[1033px] h-11 flex gap-[30px] relative top-[30px] left-[180px]'>

              <div className='w-[509px] h-11 flex gap-[5px]'>

                <h3 className='text-[#252B42] w-[43px] h-6 font-montserrat font-bold text-[14px] 
                leading-6 text-center tracking-[0.2px]'>Home</h3>
                <select name="Home" id="0" className='-rotate-90 bg-[#fafafa] text-[#BDBDBD]
                w-[19px] h-[27px]'></select>
                <h3 className='w-[37px] h-6 font-montserrat font-bold text-[14px] 
                leading-6 text-center tracking-[0.2px] text-[#BDBDBD]'>Shop</h3>
                </div>
            </div>
      </div>

      <div className='w-[1342px] h-[598px] '>
      <div className='w-[1050px] h-[598px] relative left-[175px] pb-12 flex gap-[30px] top-[40px]'>
        <div className='w-[510px] h-[590px] relative '>
          <div className='w-[506px] h-[542px] rounded-[5px] flex-col'>

            <div className='w-[506px] h-[450px]'>
              <Image src={'/image/sofa.svg'}
              alt='Sofa Image'
              width={506}
              height={450}
              className='object-contain'>
              </Image>

              <Image src={'/image/LeftArrow.svg'}
              alt='Left Arrow'
              width={24}
              height={44}
              className='absolute left-[40px] top-[258px]'></Image>

              <Image src={'/image/RightArrow.svg'}
              alt='Right Arrow'
              width={24}
              height={44}
              className='absolute left-[447px] top-[258px]'></Image>
            </div>

            <div className='w-[219px] h-[75px] absolute top-[471px] flex-row flex'>
              
            <Image src={'/image/Chair.svg'}
              alt='Chair Image'
              width={100}
              height={75}></Image>

              
            <Image src={'/image/Sofa2.svg'} 
              alt='Sofa image'
              width={100}
              height={75}
              className='absolute left-[119px]'></Image>

            </div>

          </div>

        </div>

        <div className='w-[510px] h-[471px] relative left-6 flex flex-col'>
          <h1 className='text-[#252B42] w-[156px] h-[130px] relative top-[11px] left-6 font-montserrat 
          font-normal text-[20px] leading-[30px] tracking-[0.2px]'>Floating Phone</h1>

          <div className='w-[221px] h-6 flex gap-[10px] flex-row absolute left-6 top-[53px]'>
            <div className='w-[130px] h-[22px] flex gsp-[5px]'>
              <Image src={'/image/Star.svg'}
              alt='Star Icon'
              width={22}
              height={22}>
              </Image>
              <Image src={'/image/Star.svg'}
              alt='Star Icon'
              width={22}
              height={22}>
              </Image>
              <Image src={'/image/Star.svg'}
              alt='Star Icon'
              width={22}
              height={22}>
              </Image>
              <Image src={'/image/Star.svg'}
              alt='Star Icon'
              width={22}
              height={22}>
              </Image>
              <Image src={'/image/Star2.svg'}
              alt='Star Icon'
              width={22}
              height={22}>
              </Image>
            </div>
            <h2 className='w-[101px] h-6 font-montserrat font-bold text-sm text-[#737373] tracking-[0.2px]
            '>10 Reviews</h2>
          </div>

          <h1 className='w-[108px] h-8 absolute top-[97px] left-6 text-[#252B42] text-2xl font-bold
          text-center tracking-[0.1px]'>$1,139.33</h1>

          <div className='w-[159px] h-6 absolute top-[138px] left-6 flex gap-[5px] flex-row'>
            <h1 className='w-[94px] h-6 font-montserrat font-bold text-[14px] leading-6 text-[#737373]
            '>Availability  :</h1>
            <h1 className='w-[60px] h-6 font-montserrat font-bold text-[14px] leading-6 text-[#23A6F0]'>
              In Stock </h1>
          </div>

          <h1 className='w-[464px] h-[60px] absolute top-[190px] left-6 font-montserrat font-bold 
          text-[14px] leading-5 text-[#737373] tracking-[0.2px]'>
            Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            Excitation venial consequent sent nostrum met.</h1>

            <div className='bg-[#BDBDBD] w-[445px] absolute top-[277px] left-[25px] border-[1px]'>
            </div>

            <div className='w-[150px] h-[30px] absolute top-[306px] left-6 flex gap-[10px] flex-row'>
              <Image src={'/image/Blue.svg'}
              alt='Blue Color'
              width={30}
              height={30}></Image>
              <Image src={'/image/Green.svg'}
              alt='Green Color'
              width={30}
              height={30}></Image>
              <Image src={'/image/Orange.svg'}
              alt='Orange Color'
              width={30}
              height={30}></Image>
              <Image src={'/image/Black.svg'}
              alt='Black Color'
              width={30}
              height={30}></Image>
            </div>

            <div className='w-[298px] h-11 absolute top-[403px] left-6 flex gap-[10px] flex-row'>
              <button className='w-[148px] h-11 rounded-[5px] bg-[#23A6F0] py-[10px] px-5 flex 
              gap-[10px] hover:bg-[#252B42] duration-700'>
                <h1 className='w-[108px] h-6 font-montserrat font-bold text-[14px] leading-6 text-white
                text-center tracking-[0.2px]'>Select Options</h1>
              </button>

              <button className='w-10 h-10 rounded-[44px] border-[1px] border-[#E8E8E8] bg-white'>
                <Image src={'/image/Like.svg'}
                alt='Like Icon'
                width={20}
                height={20}
                className='relative left-[8px]'></Image>
                </button>
                <button className='w-10 h-10 rounded-[44px] border-[1px] border-[#E8E8E8] bg-white'>
                <Image src={'/image/Cart2.svg'}
                alt='Cart Icon'
                width={20}
                height={20}
                className='relative left-[8px]'></Image>
                </button>
                <button className='w-10 h-10 rounded-[44px] border-[1px] border-[#E8E8E8] bg-white'>
                <Image src={'/image/View.svg'}
                alt='View Icon'
                width={20}
                height={20}
                className='relative left-[8px]'></Image>
                </button>


            </div>

           

        </div>
        </div> 
    </div>
    </div>
  )
}

export default ProductsPageCard