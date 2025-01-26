import React from 'react'
import PrcContainer from './components/pricing-container/page'
import FAQ from './components/faq/page'
import PrcCta from './components/pricing-cta/page'
import Footer from '../components/footer/page'

function Pricing() {
  return (
    <div className='md:w-[1349px]md:h-[6332px] '>
        <PrcContainer/>
        <FAQ/>
        <PrcCta/>
        <Footer/>
    </div>
  )
}

export default Pricing