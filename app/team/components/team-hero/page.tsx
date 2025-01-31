import React from 'react'
import Image from 'next/image'

function TeamHero() {
  return (
    <div className='md:w-[1349px] md:h-[530px] bg-white flex md:flex-row  '>
    {/* First image */}
    <Image src={'/image/team-hero-1.svg'}
    alt='Hero Section first image'
    width={585}
    height={530}
    className='relative left-[60px]'>
    </Image>
    {/* Second image */}
    <Image src={'/image/team-hero-2.svg'}
    alt='Hero Section second image'
    width={300}
    height={200}
    className='relative md:left-[70px] md:top-[-115px] -rotate-270'>
    </Image>
    {/* Third image */}
    <Image src={'/image/team-hero-3.svg'}
    alt='Hero Section second image'
    width={300}
    height={200}
    className='relative md:left-[80px] md:top-[-115px] -rotate-270'>
    </Image>
    
    {/* Fourth image */}
    <Image src={'/image/team-hero-4.svg'}
    alt='Hero Section fourth image'
    width={300}
    height={200}
    className='relative top-[115px] right-[530px]  -rotate-270'>
    </Image>
    
    {/* Fifth image */}
    <Image src={'/image/team-hero-5.svg'}
    alt='Hero Section fifth image'
    width={300}
    height={200}
    className='relative top-[115px] right-[520px]  -rotate-270'>
    </Image>


    </div>
    
  )
}

export default TeamHero