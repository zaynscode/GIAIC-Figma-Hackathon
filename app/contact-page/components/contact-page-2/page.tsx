import React from 'react'
import Image from 'next/image'

function ContactPage2() {
  return (
    <div className='w-[1342px] h-[814px]'>
        <div className='w-[1050px] h-[841px] relative left-[195px] py-28 flex gap-[65px] flex-col'>
            <div className='w-[633px] h-[114px] justify-self-center relative left-[240px] flex gap-[10px] flex-col'>
                <h2 className='w-[132px] h-6 text-[#252B42] font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px] relative left-[190px]'>VISIT OUR OFFICE</h2>
                <h1 className='w-[531px] h-[100px] text-[#252B42] font-montserrat font-bold text-[40px]
                leading-[50px] text-center tracking-[0.2px]'>We help small businesses 
                with big ideas</h1>
            </div>

            <div className='w-[985px] h-[403px] flex'>

                {/* Phone Div */}
                <div className='w-[327px] h-[343px] py-[50px] px-10 flex gap-[15px] flex-col relative 
                top-[30px]'>
                    <Image src={'/image/phone.svg'}
                    alt='Phone Icon'
                    width={72}
                    height={72} 
                    className='relative left-[70px]'>
                    </Image>
                    <h1 className='w-[216px] h-6 text-[#252B42] font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px]'>georgia.young@example.com</h1>
                <h1 className='w-[176px] h-6 text-[#252B42] font-montserrat font-bold text-[14px]
            leading-6 text-center tracking-[0.2px] relative left-[20px]'>georgia.young@pie.com</h1>
                <h1 className='w-[100px] h-6 text-[#252B42] font-montserrat font-bold text-base
              tracking-[0.2px] text-center relative left-[60px]'>Get Support</h1>
              
              <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-[#23A6F0] py-[15]
              px-9 flex gap-[10px] hover:bg-[#252B42]'>
                <h3 className='w-[117px] h-6 text-[#23A6F0] font-montserrat font-bold text-[14px]
                leading-6 tracking-[0.2px] text-center py-[6px]'>Submit Request</h3>
              </button>
                </div>

                 {/* Location Div */}
                 <div className='w-[327px] h-[403px] py-20 px-10 flex gap-[15px] flex-col bg-[#252B42]
                 '>
                    <Image src={'/image/location.svg'}
                    alt='Location Icon'
                    width={72}
                    height={72}
                    className='relative left-[90px]'>
                    </Image>
                    <h1 className='w-[216px] h-6 text-white font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px] relative left-[20px]'>georgia.young@example.com</h1>
                <h1 className='w-[176px] h-6 text-white font-montserrat font-bold text-[14px]
            leading-6 text-center tracking-[0.2px] relative left-[40px]'>georgia.young@pie.com</h1>
                <h1 className='w-[100px] h-6 text-white font-montserrat font-bold text-base
              tracking-[0.2px] text-center relative left-[80px]'>Get Support</h1>
              
              <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-[#23A6F0] py-[15]
              px-9 flex gap-[10px] hover:bg-white relative left-[30px]'>
                <h3 className='w-[117px] h-6 text-[#23A6F0] font-montserrat font-bold text-[14px]
                leading-6 tracking-[0.2px] text-center py-[6px]'>Submit Request</h3>
              </button>
                </div>

                
                {/* Mail Div */}
                <div className='w-[327px] h-[343px] py-[50px] px-10 flex gap-[15px] flex-col relative 
                top-[30px]'>
                    <Image src={'/image/mail.svg'}
                    alt='Mail Icon'
                    width={72}
                    height={72} 
                    className='relative left-[70px]'>
                    </Image>
                    <h1 className='w-[216px] h-6 text-[#252B42] font-montserrat font-bold text-[14px]
                leading-6 text-center tracking-[0.2px]'>georgia.young@example.com</h1>
                <h1 className='w-[176px] h-6 text-[#252B42] font-montserrat font-bold text-[14px]
            leading-6 text-center tracking-[0.2px] relative left-[20px]'>georgia.young@pie.com</h1>
                <h1 className='w-[100px] h-6 text-[#252B42] font-montserrat font-bold text-base
              tracking-[0.2px] text-center relative left-[60px]'>Get Support</h1>
              
              <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-[#23A6F0] py-[15]
              px-9 flex gap-[10px] hover:bg-[#252B42]'>
                <h3 className='w-[117px] h-6 text-[#23A6F0] font-montserrat font-bold text-[14px]
                leading-6 tracking-[0.2px] text-center py-[6px]'>Submit Request</h3>
              </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactPage2