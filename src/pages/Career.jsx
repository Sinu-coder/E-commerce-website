import React from 'react'
import Navbar from '../components/Navbar'
import CareerHero from '../section/career/CareerHero'
import CareerWorkWith from '../section/career/CareerWorkWith'
import CareerPlayGround from '../section/career/CareerPlayGround'
import CultureSection from '../section/career/CultureSection'
import CareerCardSection from '../section/career/CareerCardSection'
import Intelligent from '../components/Intelligence'
import ClientLogo from '../section/career/ClientLogo'
import FooterSection from '../components/FooterSection'
import CareerContactSection from '../section/career/CareerContactSection'


function Career() {
  return (
    <>
    <CareerHero/>
    <CareerWorkWith/>
    <CareerPlayGround/>
    <CultureSection/>
    <CareerCardSection/>
    <Intelligent/>
    <ClientLogo/>
    <CareerContactSection/>
    <FooterSection/>
    </>
  )
}

export default Career
