import React from 'react'
import ContactHeader from '../contact-page/components/contact-header/page'
import AboutContainer from './components/about-header/about-container/page'
import Stats from './components/stats/page'
import AboutTeam from './components/about-team/page'
import AboutClients from './components/about-clients/page'
import AboutTestimonials from './components/about-testimonials/page'
import Footer from '../components/footer/page'

function About() {
  return (
    <div className='md:w-[1342px] md:h-[3500px] xs:h-[7552px] xs:w-[414px]'>
         <ContactHeader/> 
        <AboutContainer/>
         <Stats/>
        <AboutTeam/>
         <AboutClients/>
        <AboutTestimonials/>
         <Footer/>  
        
    </div>
  )
}

export default About