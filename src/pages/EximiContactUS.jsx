import React from 'react'
import ContactUs from '../section/EximiContact/ConatctUs'
import EximiLocation from '../section/EximiContact/EximiLocation'
import GoogleMapSection from '../section/EximiContact/GoogleMapSection'
import FooterSection from '../components/FooterSection'

function EximiContactUS() {
  return (
    <div>
      <ContactUs/>
      <EximiLocation/>
      <GoogleMapSection/>
      <FooterSection/>
    </div>
  )
}

export default EximiContactUS
