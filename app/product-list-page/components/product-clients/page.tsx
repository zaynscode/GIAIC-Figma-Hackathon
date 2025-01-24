import React from 'react'
import Image from 'next/image'

function Clients() {
  return (
    <div className='w-[1343px] h-[175px] bg-[#FAFAFA] relative top-[110px]'>
        <div className='w-[1050px] h-[175px] relative left-[195px] py-[50px] flex gap-[30px] justify-between'>
            {/* brand 1*/}
            <div className='w-[153px] h-[34px]'>
                <Image src={'/image/hooli.svg'}
                alt='Hooli brand logo'
                width={103}
                height={34}>
                </Image>
            </div>
            {/* brand 2*/}
            <div className='w-[106px] h-[59px]'>
                <Image src={'/image/lyft.svg'}
                alt='Lyft brand logo'
                width={83}
                height={59}>
                </Image>
            </div>
            {/* brand 3*/}
            <div className='w-[152px] h-[65px]'>
                <Image src={'/image/leaf.svg'}
                alt='Leaf logo'
                width={93}
                height={65}>
                </Image>
            </div>
            {/* brand 4*/}
            <div className='w-[151px] h-[42px]'>
                <Image src={'/image/stripe.svg'}
                alt='Stripe brand logo'
                width={103}
                height={42}>
                </Image>
            </div>
            {/* brand 5*/}
            <div className='w-[151px] h-[62px]'>
                <Image src={'/image/aws.svg'}
                alt='AWS brand logo'
                width={103}
                height={62}>
                </Image>
            </div>
            {/* brand 6*/}
            <div className='w-[151px] h-[62px]'>
                <Image src={'/image/reddit.svg'}
                alt='Reddit brand logo'
                width={76}
                height={62}>
                </Image>
            </div>


        </div>
    </div>
  )
}

export default Clients