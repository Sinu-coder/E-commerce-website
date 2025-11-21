import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogCardImg from "../../assets/images/blog-card-img.png"; 
import "../../assets/css/NewsSection.css"; 
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blognews.json"

function BlogNews ()  {
  
  const newsData = blogData.map(item => ({
    ...item,
    image: blogCardImg
  }));
  console.log(newsData);
  
  // Array.from({ length: 72 }, (_, index) => ({
  //   id: index + 1,
  //   date: "24-Oct-2025",
  //   title: "Enhancing Financial Reporting Accuracy with Outsourcing",
  //   image: blogCardImg,
  //   link: `/blognewsdata/${index + 1}`,
  // }));

  return (
    <section className="news-section">
      <div className="auto-container">
        <Row className="g-4">
          {newsData.map((news) => (
            <Col key={news.id} lg={4} md={6} sm={12}>
              <div className="news-container">
                <Card className="h-100">
                  <div className="card-img-section">
                    <Card.Img
                      variant="top"
                      src={news.image}
                      alt={news.title}
                      className="border-r"
                    />
                  </div>
                  <Card.Body>
                    <h5 className="card-title news-h5">{news.date}</h5>
                    <p className="card-text">{news.title}</p>
                    <hr />
                    <div className="flex">
                      <Link to={news.link} className="card-btn">
                        Learn More
                        <i className="bi bi-arrow-up-right news-icon"></i>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogNews;
