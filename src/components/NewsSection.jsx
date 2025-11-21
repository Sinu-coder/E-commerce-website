import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import news1 from "../assets/images/2311.png";
import news2 from "../assets/images/143.png";
import news3 from "../assets/images/431.png";
import "../assets/css/NewsSection.css"

function NewsSection() {
const newsData = [
    {
    id: 1,
    date: "27-jun-2025",
    day: "27",
    month: "June",
    img: news1,
    text: "Elevate Your Financial Management with Streamlined Processes through Our Advanced Accounts Payable Automation Services",
  },
  {
    id: 2,
    date: "20-jun-2025",
    day: "20",
    month: "June",
    img: news2,
    text: "Empower your finance team with strategic accounts payable automation solutions that drive growth and profitability",
  },
  {
    id: 3,
    date: "13-jun-2025",
    day: "13",
    month: "June",
    img: news3,
    text: "Drive Efficiency and Innovation with Our Progressive Accounts Payable Automation Services",
  },
]

  return (
    <section className="news-section">
      <div className="news-head text-center">
        <h4 className="news-h4">Insights from Latest Blog</h4>
      </div>
      <div className="auto-conatiner">
        <Row className="news-div"  style={{width:"100%"}}>
          {newsData.map((news) => (
            <Col key={news.id} xl={4} lg={4} md={6} className="mb-4">
              <div className="news-container">
                <div className="card">
                  <div className="card-img-section position-relative">
                    <div className='pos-rel'>
                    <img src={news.img} className="card-img-top border-r pos-rel" alt="news"/>
                    <div className="img-calender text-center position-absolute top-0 start-0 p-2">
                      <h2 className="calender-h2">{news.day}</h2>
                      <p className="calender-p">{news.month}</p>
                    </div>

                      </div>

                  </div>
                  <div className="card-body">
                    <h5 className="card-title news-h5">{news.date}</h5>
                    <p className="card-text">{news.text}</p>
                    <hr />
                    <div className="d-flex">
                      <a href="#" className="card-btn">
                        Learn More <i className="bi bi-arrow-up-right news-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default NewsSection
