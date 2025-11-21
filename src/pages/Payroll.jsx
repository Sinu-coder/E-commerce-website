import React from 'react'
import PayrollHero from '../section/Ourpayroll/PayrollHero'
import PayrollOverview from '../section/Ourpayroll/PayrollOverview'
import GrowthLeader from '../section/Ourpayroll/GrowthLeader'
import HRSection from '../section/Ourpayroll/HRSection'
import Challenges from '../section/Ourpayroll/Challenges'
import Payrollfaq from '../section/Ourpayroll/Payrollfaq'
import TangibleROI from '../section/Ourpayroll/TangibleROI'
import Intelligent from '../components/Intelligence'
import FooterSection from '../components/FooterSection'

function Payroll() {
  return (
    <>
    <PayrollHero/>
    <PayrollOverview/>
    <GrowthLeader/>
    <HRSection/>
    <Challenges/>
    <Payrollfaq/>
    <TangibleROI/>
    <Intelligent/>
    <FooterSection/>
    </>
  )
}

export default Payroll
