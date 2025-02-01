import React from 'react'
import ContactHeader from './components/contact-header/page'
import ContactContainer from './components/contact-container/page'
import ContactPage2 from './components/contact-page-2/page'
import Chat from './components/cta/page'
import Footer from '../components/footer/page'

function ContactPage() {
  return (
    <div className='md:w-[1342px] md:h-[2532px] max-xs:w-[414px] xs:h-[4929px]'>
        <ContactHeader/>
         <ContactContainer/>
        <ContactPage2/>
        <Chat/>
        <Footer/>  

    </div>
  )
}

export default ContactPage