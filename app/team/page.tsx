import React from 'react'
import TeamHeader from './components/team-header/page'
import TeamHero from './components/team-hero/page'
import TeamMembers from './components/team-members/page'
import PrcCta from '../pricing-page/components/pricing-cta/page'
import Footer from '../components/footer/page'

function Team() {
  return (
    <div className='md:w-[1343px] md:h-[3602px] h-[8048px]'>
        <TeamHeader/>
         <TeamHero/>
        {/* <TeamMembers/>
          <PrcCta/> 
          <div className='relative top-[-670px] md:top-0'>
         <Footer/>  
            </div>  */}
    </div>
  )
}

export default Team