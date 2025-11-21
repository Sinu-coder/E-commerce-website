import React from 'react'
import "../../assets/css/TangibleROI.css"
import { Row,Col } from 'react-bootstrap'

function TangibleROI() {
  return (
    <section className='roi-section'>
      <div className='auto-container'>
        <div className='roi-title  text-center'>
            <div className='roi-head'>
                <h3 className='roi-h3'>Experience the Eximius Next Impact: Tangible <span className='color-roi'>ROI</span></h3>
            </div>
            <p className='roi-ph'>Measurable Value: Transform Your Operations, Empower Your Growth.</p>
        </div>
        
        <Row className=' gy-4'>
            <Col xl={3} lg={4} md={6}>
            <div className='roi-num-sec'>
                <div className='roi-num-inner text-center'>
                    <h3 className='roi-num-h3'>35-50%</h3>
                    <div className='roi-num-content'>
                        <h4 className='roi-num-h4'>Reduction In Payroll Overhead</h4>
                        <p className='roi-num-p'>No extra IT, internal staffing or system 
                            <br/>
                            costs.</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6}>
            <div className='roi-num-sec'>
                <div className='roi-num-inner text-center'>
                    <h3 className='roi-num-h3'>90%</h3>
                    <div className='roi-num-content'>
                        <h4 className='roi-num-h4'>Fewer Payroll Errors</h4>
                        <p className='roi-num-p'>Less employee frustration, lower
                            <br/>
                             attrition.</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6}>
            <div className='roi-num-sec'>
                <div className='roi-num-inner text-center'>
                    <h3 className='roi-num-h3'>95%</h3>
                    <div className='roi-num-content'>
                        <h4 className='roi-num-h4'>Reduce Compliance Risk</h4>
                        <p className='roi-num-p'>Never worry about PCB or EPF/SOCSO
                            <br/>
                             penalties.</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6}>
            <div className='roi-num-sec'>
                <div className='roi-num-inner text-center'>
                    <h3 className='roi-num-h3'>30-40</h3>
                    <div className='roi-num-content'>
                        <h4 className='roi-num-h4'>Hours Reclaimed Weekly</h4>
                        <p className='roi-num-p'>HR & finance can drive strategic 
                            <br/>
                            initiatives.</p>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
      </div>
    </section>
  )
}

export default TangibleROI;
