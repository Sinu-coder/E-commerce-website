import React from 'react'
import "../../assets/css/Payrollfaq.css"
import { Accordion,Col,Row } from 'react-bootstrap'

function Payrollfaq() {
  return (
    <section className='faq-section'>
        <div className='auto-container'>
          <Row className="g-4 justify-content-center align-items-center">
          <Col xl={12} lg={6}>
           <div className='faq-title text-center mb-5'>
            <div className='faq-head'>
                <h3 className='faq-h3'>
                    Addressing Your Concerns
                </h3>
            </div>
            <p className='faq-ph'>
                Why Eximius Next is Your Trusted Partner
            </p>
           </div>
          </Col>
           <Col xl={10} lg={10}>
           <Accordion defaultActiveKey="0" flush className='acdr-div'>
      <Accordion.Item eventKey="0"  className='acdr-item'>
        <Accordion.Header className='acdr-head'>Loss of Control & Flexbitily</Accordion.Header>
        <Accordion.Body className='acdr-body'> 
          Eximius Solution: We provide transparent dashboards and regular reporting for full visibility 
          into your payroll process. Our HRMS offers configurable settings to reflect your specific 
          company policies, maintaining your operational flexibility.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1"  className='acdr-item'>
        <Accordion.Header className='acdr-head'>Data Security & Privacy Risks</Accordion.Header>
        <Accordion.Body className='acdr-body'>
         Eximius Solution: Our enterprise-grade security measures go beyond what many in-house teams can 
         maintain. We adhere to the Personal Data Protection Act 2010 (PDPA) and leverage SOC2-certified 
         hosting and stringent protocols (encryption, MFA, 24/7 monitoring) to mitigate risks</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='acdr-item'>
        <Accordion.Header className='acdr-head'>Impersonal Service & Communication Gaps</Accordion.Header>
        <Accordion.Body className='acdr-body'>
          Eximius Solution: Benefit from a dedicated account manager and clear communication channels,
           ensuring personalized service and prompt issue resolution. Our SLA guarantees email & phone
            support response within 60 minutes (outside peak hours).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='acdr-item'>
        <Accordion.Header className='acdr-head'>Hidden or Additional Costs</Accordion.Header>
        <Accordion.Body>
          Eximius Solution: We offer predictable, scalable pricing models that convert fixed overheads
           into manageable variable costs, with full transparency.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='acdr-item'>
        <Accordion.Header className='acdr-head' >Dependency & Loss of In-house Expertise</Accordion.Header>
        <Accordion.Body className='acdr-body'>
          Eximius Solution: We empower your existing team by removing administrative burdens,
           allowing them to focus on strategic HR initiatives like talent development and culture,
            rather than replacing their core function.
        </Accordion.Body>
      </Accordion.Item>
      

    </Accordion>
         <div className="d-flex justify-content-center align-items-center" >
          <button type="button" className=" btn-secondary btn-talk" style={{ marginTop: "30px" }}>Talk to US</button>
        </div>
           </Col> 
          </Row>
        </div>
      
    </section>
  )
}

export default Payrollfaq
