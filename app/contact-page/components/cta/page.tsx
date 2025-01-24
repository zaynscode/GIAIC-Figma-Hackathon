import React from 'react'

function Chat() {
  return (
    <div className='w-[1342px] h-[348px] relative'>
        <div className='w-[1050px] h-[348px] absolute left-[195px] py-20 flex gap-24'>
            <div className='w-[607px] h-[188px] flex gap-9 relative left-[360px] '>
                <div className='w-[272px] h-[188px] flex gap-4 flex-col'>
                    <h2 className='w-[239px] h-6 text-[#252B42] font-montserrat font-bold text-base
                    tracking-[0.2px] text-center'>WE Can't WAIT TO MEET YOU</h2>
                    <h1 className='w-[272px] h-20 text-[#252B42] font-montserrat font-bold text-[58px]
                   leading-20 tracking-[0.2px] text-center relative left-[-20px]'>Let’s Talk</h1>
                   <button className='w-[186px] h-[52px] flex gap-[10px] rounded-[5px] py-[15px]
                   px-10 bg-[#23A6F0] hover:bg-[#252B42] duration-300'>
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