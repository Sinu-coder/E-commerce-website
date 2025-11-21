import React from 'react'
import "../../assets/css/BlogDataContent"
import bgcontentimg from "../../assets/images/bg-content.png"
import { Col,Row } from 'react-bootstrap'

function BlogDataContent() {
  return (
    <section className='blog-content-sec'>
     <div className='auto-container'>
        <Row className=' justify-content-center'>
            <Col xl={11} lg={11}>
              <div className='blog-content'>
                <div className='content'>
                    <div className='content-img'>
                        <img src={bgcontentimg} alt='Content-img' className='img-fluid'/>
                    </div>
                </div>
              </div>
            </Col>
        </Row>
     </div>
    </section>
  )
}

export default BlogDataContent
