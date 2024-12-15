import React from 'react'

function Footer2() {
  return (
    <div className='w-[1440px]z h-[272px]  relative'>
        <div className='w-[1050px] h-[270px] absolute left-[195px] py-[50px]'>
            <div className='w-[1041px] h-[170px] flex gap-[30px] flex-row justify-between'>
                {/* first row */}
                <div className='w-[148px] h-[170px] flex gap-5 flex-col'>
                <h1 className='w-[115px] h-6 font-montserrat font-bold text-base text-[#252B42]
                tracking-[#252B42]'>Company Info</h1>
                <div className='w-[97px] h-[126px] flex gap-[10px] flex-col'>
                    <h1 className='w-[67px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>About Us</h1>
                    
                    <h1 className='w-[50px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Carrier</h1>
                    
                    <h1 className='w-[97px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>We are hiring</h1>
                    
                    <h1 className='w-[33px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Blog</h1>


                </div>
                </div>
                {/* second row */}
                <div className='w-[52px] h-[170px] flex gap-5 flex-col'>
                <h1 className='w-[45px] h-6 font-montserrat font-bold text-base text-[#252B42]
                tracking-[#252B42]'>Legal</h1>
                <div className='w-[97px] h-[126px] flex gap-[10px] flex-col'>
                    <h1 className='w-[67px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>About Us</h1>
                    
                    <h1 className='w-[50px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Carrier</h1>
                    
                    <h1 className='w-[97px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>We are hiring</h1>
                    
                    <h1 className='w-[33px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Blog</h1>


                </div>
                </div>
                {/* third row */}
                <div className='w-[148px] h-[170px] flex gap-5 flex-col'>
                <h1 className='w-[115px] h-6 font-montserrat font-bold text-base text-[#252B42]
                tracking-[#252B42]'>Features</h1>
                <div className='w-[97px] h-[126px] flex gap-[10px] flex-col'>
                    <h1 className='w-[142px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Business Marketing</h1>
                    
                    <h1 className='w-[97px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>User Analytic</h1>
                    
                    <h1 className='w-[68px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Live Chat</h1>
                    
                    <h1 className='w-[134px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'></h1>


                </div>
                </div>
                {/* fourth row */}
                <div className='w-[148px] h-[170px] flex gap-5 flex-col'>
                <h1 className='w-[86px] h-6 font-montserrat font-bold text-base text-[#252B42]
                tracking-[#252B42]'>Resources</h1>
                <div className='w-[97px] h-[126px] flex gap-[10px] flex-col'>
                    <h1 className='w-[102px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>IOS & Android</h1>
                    
                    <h1 className='w-[106px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Watch a Demo</h1>
                    
                    <h1 className='w-[79px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>Customers</h1>
                    
                    <h1 className='w-[25px] h-6 font-montserrat font-bold text-sm leading-6
                    tracking-[0.2px] text-[#737373]'>API</h1>
                 </div>
                </div>
                {/* email div */}
                <div className='w-[321px] h-[131px] grid gap-5'>
                    <h1 className='w-[103px] h-6 font-montserrat font-bold text-base text-[#252B42]
                    tracking-[0.1px]'>Get In Touch</h1>
                    <div className='w-[321px] h-[87px]'>
                        <div className='w-[321px] h-[58px]'>
                            <div className='w-[321px] h-[58px] rounded-[5px] bg-[#E6E6E6] relative'>
                                <h1 className='w-[77px] h-7 absolute top-[15px] left-5 font-normal
                                text-[#737373] font-montserrat text-sm leading-7 tracking-[0.2px]'>
                                    Your Email</h1>
                                    <div className='w-[117px] h-[58px] absolute left-[204px]'>
                                <button className='bg-[#23A6F0] w-[117px] h-[58px] rounded-[5px]
                                border-[#E6E6E6] border-[1px]'>
                                    <h1 className='w-[72px] h-7 absolute top-[15px] left-[22.5px]
                                    font-montserrat font-normal text-sm leading-7 items-center
                                    tracking-[0.2px] text-[#FFFFFF]'>Subscribe</h1>

                                </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer2