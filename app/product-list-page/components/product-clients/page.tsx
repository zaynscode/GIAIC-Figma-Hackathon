import React from 'react'
import Image from 'next/image'

function Clients() {
  return (
    <div className='md:w-[1343px] md:h-[175px] bg-[#FAFAFA] relative md:top-[110px] top-[5280px] '>
        <div className='md:w-[1050px] md:h-[175px] relative md:left-[195px] py-[50px] flex md:gap-[30px]
        gap-[60px] md:flex-row flex-col justify-between'>
            
            {/* brand 1*/}
            <div className='md:w-[153px] md:h-[34px]'>
                <Image src={'/image/hooli.svg'}
                alt='Hooli brand logo'
                width={103}
                height={34}
                className='md:w-[103px] md:h-[34px] w-[153px] h-[50px] relative left-[120px] md:left-0'>
                </Image>
            </div>
            {/* brand 2*/}
            <div className='md:w-[106px] md:h-[59px]'>
                <Image src={'/image/lyft.svg'}
                alt='Lyft brand logo'
                width={83}
                height={59}
                className='md:w-[83px] md:h-[59px] w-[149px] h-[99px] relative left-[120px] md:left-0'>
                </Image>
            </div>
            {/* brand 3*/}
            <div className='md:w-[152px] md:h-[65px]'>
                <Image src={'/image/leaf.svg'}
                alt='Leaf logo'
                width={93}
                height={65}
                className='md:w-[93px] md:h-[65px] w-[153px] h-[109px] relative left-[120px] md:left-0'>
                </Image>
            </div>
            {/* brand 4*/}
            <div className='md:w-[151px] md:h-[42px]'>
                <Image src={'/image/stripe.svg'}
                alt='Stripe brand logo'
                width={103}
                height={42}
                className='md:w-[103px] md:h-[42px] w-[153px] h-[60px] relative left-[120px] md:left-0'>
                </Image>
            </div>
            {/* brand 5*/}
            <div className='md:w-[151px] md:h-[62px]'>
                <Image src={'/image/aws.svg'}
                alt='AWS brand logo'
                width={103}
                height={62}
                className='md:w-[103px] md:h-[62px] w-[151px] h-[93px] relative left-[120px] md:left-0'>
                </Image>
            </div>
            {/* brand 6*/}
            <div className='w-[151px] md:h-[62px]'>
                <Image src={'/image/reddit.svg'}
                alt='Reddit brand logo'
                width={76}
                height={62}
                className='md:w-[76px] md:h-[62px] w-[151px] h-[142px] relative left-[120px] md:left-0'>
                </Image>
            </div>

        </div>
    </div>
  )
}

export default Clients