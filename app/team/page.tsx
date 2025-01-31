import React from 'react'
import TeamHeader from './components/team-header/page'
import TeamHero from './components/team-hero/page'
import TeamMembers from './components/team-members/page'
import PrcCta from '../pricing-page/components/pricing-cta/page'
import Footer from '../components/footer/page'

function Team() {
  return (
    <div>
        <TeamHeader/>
        <TeamHero/>
        <TeamMembers/>
        <PrcCta/>
        <Footer/>
    </div>
  )
}

export default Team