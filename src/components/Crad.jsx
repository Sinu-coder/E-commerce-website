import React from 'react'
import card1 from "../assets/images/card-icon-1.png"
import card2 from "../assets/images/car-2.png"
import card3 from "../assets/images/card-icon-3.png"
import card4 from "../assets/images/card-icon-4.png"
import card5 from "../assets/images/card-icon-5.png"
import { Row,Container,Col } from 'react-bootstrap'
import "../assets/css/Card.css"

function Crad() {
const card =[
    {
    id: 1,
    img : card1,
    title: "Discovery & Assessment",
    desc: "Understand current processes, gaps, and goals."
    },
    {
    id: 2,
    img : card2,
    title: "Collaborative Solution Design",
    desc: "Build a tailored Process Transformation roadmap aligned to strategy.",
    },
    {
    id: 3,
    img : card3,
    title: "Seamless Transition",
    desc: "Risk-free migration, SOPs, and full team readiness.",
    },
    {
    id: 4,
    img : card4,
    title: "Proactive Operations",
    desc: "Day-to-day delivery with dashboards and governance.",
    },
    {
    id: 5,
    img : card5,
    title: "Continuous Improvement",
    desc: "Ongoing automation, and AI engagement in processes.",
    },

]

  return (
    
     <section className='Card'>
        <div className='auto-container'>
            <div className='card-h text-center'>
                <h4 className='card-head'>
                    Our Partnership Approach
            <br />
            A Journey to Excellence
                </h4>
            </div>
            <div className='card-container'>
                < Row className='gy-4 justify-content-center'>
                  {card.map((card,index)=>(
                    <Col className='width' key={index} xl={2} lg={4} md={6}>
                        <div className="card-content text-center">
                            <div className="card-icon">
                                <img src={card.img} alt="Card1" className='img-fluid'/>
                                <h3 className="card-h4">{card.id}</h3>
                            </div>
                            <div className="card-text-area">
                                <div className="area-h">
                                     <h4 className="area-h4" dangerouslySetInnerHTML={{__html:card.title.replace( "&" , "<br/>" ),}}>
                                     </h4>
                                </div>
                                <p className='area-p'>{card.desc}</p>
                            </div>
                        </div>
                    </Col>
                  ))}
                </Row>
            </div>
        </div>
     </section>
  )
}

export default Crad
