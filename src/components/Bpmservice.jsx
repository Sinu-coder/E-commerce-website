import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../assets/css/Bpmservice.css"

function Bpmservice() {

const services =[{
    icon: "bi-bar-chart-fill",
      title: "Intelligence Finance & Accounting",
      index:"0",
      description:
        "Tech-driven financial workflows with expert oversight ensure accuracy, compliance, and efficiency across P2P, O2C, R2R, and FP&A.",
      link: "#",
},
{
    icon: "bi bi-buildings-fill icon",
      title: "HR Process Services",
      index:"1",
      description:
        "Integrated HR systems supported by specialists deliver timely payroll, compliant reporting, and efficient employee management.",
      link: "#",
},
{
    icon: "bi bi-buildings-fill icon",
      title: "HR Process Services",
      index:"2",
      description:
        "Integrated HR systems supported by specialists deliver timely payroll, compliant reporting, and efficient employee management.",
      link: "#",
},
{
    icon: "bi-currency-dollar",
      title: "Supply Chain Excellence",
      index:"3",
      description:
        "Real-time tracking enhanced by human expertise strengthens procurement, inventory, and logistics processes for reliable, compliant operations.",
      link: "#",
},
{
    icon: "bi-gear",
      title: "Customer Operations",
      index:"4",
      description:
        "Smart tools combined with skilled teams streamline service processes, ensuring consistency, faster resolution, and superior customer experience.",
      link: "#",
},
{
    icon: "bi-rocket-takeoff",
      title: "Malaysia Services Payroll",
      index:"5",
      description:
        "As a leader in Malaysia, you know payroll impacts more than just finances. It’s the bedrock of employee trust, demanding impeccable compliance and absolute timeliness.",
      link: "#",
},
]



  return (
    <section className="bpm-service pb-90 pt-90  media-pad">
                   <div className='auto-container'>
                    <div className="service-text">
          <div className="service-h">
                 <h3 className="service-h3">What BPM Services Does Eximius Next Offer?</h3>
        </div>
   <p className="service-p mb-4">
                 At Eximius Next, we provide intelligent, human-augmented BPM solutions that
            transform bottlenecks into breakthroughs.
          </p>
        </div>
        <Row className='gy-4'>
               {services.map((service, index) => (
        <Col key={index} xl={4} lg={4} md={6}>
                <div className="service-box">
                     <i className={`bi ${service.icon} icon`}></i>
        <div className="service-content">
                  <h5  h5 className="service-h5">{service.title}</h5>
                    <p className="service-para">{service.description}</p>
                    <a href={service.link} className="p-btn">
                    READ MORE <i className="bi bi-arrow-right arrow"></i>
            </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
        </section>
    


  )
}

export default Bpmservice
