import React from 'react'
import Image from 'next/image'

function TeamHero() {
  return (
    <div className='md:w-[1349px] md:h-[530px] bg-white flex md:flex-row 
     '>
    {/* First image */}
    <Image src={'/image/team-hero-1.svg'}
    alt='Hero Section first image'
    width={585}
    height={530}
    className='md:flex xs:hidden relative left-[40px]'>
    </Image>
    {/* for mobile */}
    <Image src={'/image/team-hero-1-m.svg'}
    alt='Hero Section first image for mobile'
    width={413}
    height={530}
    className='xs:flex md:hidden'>
    </Image>
    {/* Second image */}
    <Image src={'/image/team-hero-2.svg'}
    alt='Hero Section second image'
    width={300}
    height={200}
    className='relative md:left-[50px] md:top-[-115px] -rotate-270 md:flex xs:hidden'>
    </Image>
    {/* for mobile */}
    <Image src={'/image/team-hero-2-m.svg'}
    alt='Hero Section second image for mobile'
    width={204}
    height={260}
    className='xs:flex md:hidden absolute top-[1410px]'>
    </Image>
    {/* Third image */}
    <Image src={'/image/team-hero-3.svg'}
    alt='Hero Section second image'
    width={300}
    height={200}
    className='relative md:left-[60px] md:top-[-115px] -rotate-270 md:flex xs:hidden'>
    </Image>
    {/* for mobile */}
    <Image src={'/image/team-hero-3-m.svg'}
    alt='Hero Section third image for mobile'
    width={204}
    height={260}
    className='xs:flex md:hidden absolute top-[1410px] left-[210px]'>
    </Image>
    
    {/* Fourth image */}
    <Image src={'/image/team-hero-4.svg'}
    alt='Hero Section fourth image'
    width={300}
    height={200}
    className='relative top-[115px] right-[550px]  -rotate-270 md:flex xs:hidden'>
    </Image>
    {/* for mobile */}
    <Image src={'/image/team-hero-4-m.svg'}
    alt='Hero Section fourth image for mobile'
    width={204}
    height={260}
    className='xs:flex md:hidden absolute top-[1680px]'>
    </Image>
    
    {/* Fifth image */}
    <Image src={'/image/team-hero-5.svg'}
    alt='Hero Section fifth image'
    width={300}
    height={200}
    className='relative top-[115px] right-[540px]  -rotate-270 md:flex xs:hidden'>
    </Image>
    {/* for mobile */}
    <Image src={'/image/team-hero-5-m.svg'}
    alt='Hero Section fifth image for mobile '
    width={204}
    height={260}
    className='xs:flex md:hidden absolute top-[1680px] left-[210px] '>
    </Image>


    </div>
    
  )
}

export default TeamHero