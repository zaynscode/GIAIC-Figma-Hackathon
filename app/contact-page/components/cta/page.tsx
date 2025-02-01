import React from 'react'

function Chat() {
  return (
    <div className='md:w-[1342px] md:h-[348px] w-[414px] h-[440px] relative top-[1250px] md:top-0'>
        <div className='md:w-[1050px] md:h-[348px] w-[321px] h-[440px] absolute md:left-[195px] left-[47px]
         md:py-20 py-28 flex gap-24'>
            <div className='md:w-[607px] md:h-[188px] w-[321px] h-[216px] flex gap-9 relative left-[50px]
             md:left-[360px] '>
                <div className='md:w-[272px] w-[321px] h-[188px] flex gap-4 flex-col'>
                    <h2 className='md:w-[239px] w-[321px] h-6 text-[#252B42] font-montserrat font-bold
                     text-base tracking-[0.2px] text-center'>WE Can’t WAIT TO MEET YOU</h2>
                    <h1 className='w-[272px] h-20 text-[#252B42] font-montserrat font-bold text-[58px]
                   leading-20 tracking-[0.2px] text-center relative md:left-[-20px]'>Let’s Talk</h1>
                   <button className='w-[186px] h-[52px] flex gap-[10px] rounded-[5px] py-[15px]
                   px-10 bg-[#23A6F0] hover:bg-[#252B42] duration-300 relative left-[40px]'>
                    <h1 className='w-[106px] h-[22px] text-[#FFFFFF] font-montserrat font-bold
                    text-sm tracking-[0.2px] text-center'>Try it free now</h1>

                   </button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Chat