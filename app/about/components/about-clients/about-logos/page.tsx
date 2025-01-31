import React from 'react'
import Image from 'next/image'

function AboutLogos() {
  return (
    <div className='md:w-[1054px] md:h-[175px] w-[328px] h-[60px] py-[50px] flex gap-[35px] md:gap-[30px] flex-col
     md:flex-row relative md:left-0 left-[147px]'>
            {/* brand 1*/}
            <div className='w-[153px] h-[50px] md:h-[34px]'>
                <Image src={'/image/hooli.svg'}
                alt='Hooli brand logo'
                width={103}
                height={34}
                className='w-[153px] h-[50px] md:w-[103px] md:h-[34px]'>
                </Image>
            </div>
            {/* brand 2*/}
            <div className='md:w-[106px] md:h-[59px] w-[146px] h-[99px]'>
                <Image src={'/image/lyft.svg'}
                alt='Lyft brand logo'
                width={83}
                height={59}
                className='md:w-[83px] md:h-[59px] w-[146px] h-[99px]'>
                </Image>
            </div>
            {/* brand 3*/}
            <div className='w-[152px] md:h-[65px] h-[109px]'>
                <Image src={'/image/leaf.svg'}
                alt='Leaf logo'
                width={93}
                height={65}
                className='w-[152px] md:h-[65px] h-[109px]'>
                </Image>
            </div>
            {/* brand 4*/}
            <div className='md:w-[151px] md:h-[42px] w-[149px] h-[60px]'>
                <Image src={'/image/stripe.svg'}
                alt='Stripe brand logo'
                width={103}
                height={42}
                className='md:w-[151px] md:h-[42px] w-[149px] h-[60px]'>
                </Image>
            </div>
            {/* brand 5*/}
            <div className='w-[151px] h-[92px] md:h-[62px]'>
                <Image src={'/image/aws.svg'}
                alt='AWS brand logo'
                width={103}
                height={62}
                className='w-[151px] h-[92px] md:h-[62px]'>
                </Image>
            </div>
            {/* brand 6*/}
            <div className='w-[151px] h-[142px] md:h-[62px]'>
                <Image src={'/image/reddit.svg'}
                alt='Reddit brand logo'
                width={76}
                height={62}
                className='w-[151px] h-[142px] md:h-[62px]'>
                </Image>
            </div>


        </div>
  )
}

export default AboutLogos