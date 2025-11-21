import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/CareerContactSection.css"
import { careerFormValidation } from "../../assets/js/Career";
import { useRef } from "react";

const CareerContactSection = () => {

   const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const result = careerFormValidation(form);

    if (!result.valid) {
      return; 
    }

    
    console.log("FORM DATA:", result.data);

    alert("Form submitted successfully!");

    form.reset();
    form.classList.remove("was-validated");
  };

  
  return (
    <section className="career-contact-section">
      <div className="auto-container">
       
        <div className="career-con-head text-center mb-5">
          <h4 className="career-con-h4">Our Hiring Process</h4>
          <p className="career-con-para">
            We keep our recruitment process structured and transparent:
          </p>
        </div>

        <div className="career-con-div">
          <Row>
            
            <Col lg={6}>
              <div className="career-con-box">
                <h3 className="crr-h3">01</h3>
                <p className="crr-p fw-bold">Application & Screening</p>
                <p className="crr-p">Engage with our process and domain leaders.</p>
              </div>

              <div className="career-con-box">
                <h3 className="crr-h3">02</h3>
                <p className="crr-p fw-bold">Expert Interviews</p>
                <p className="crr-p">Engage with our process and domain leaders.</p>
              </div>

              <div className="career-con-box">
                <h3 className="crr-h3">03</h3>
                <p className="crr-p fw-bold">Leadership Interaction</p>
                <p className="crr-p">
                  A conversation with senior leadership to align vision and values.
                </p>
              </div>

              <div className="career-con-box">
                <h3 className="crr-h3">04</h3>
                <p className="crr-p fw-bold">Offer & Onboarding</p>
                <p className="crr-p">Begin your journey with Eximius Next.</p>
              </div>
            </Col>

            
            <Col lg={6}>
              <div
                className="career-con-contact p-5"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  borderRadius: "8px",
                }}
              >
                <div className="con-title text-center mb-4">
                  <h4 className="con-h4">
                    Build Your Career
                    <br />
                    With Us
                  </h4>
                  <p className="con-para">
                    Join Eximius Venture to innovate, grow, and make an impact. We provide
                    opportunities to learn, lead, and shape the future.
                  </p>
                </div>

                <Form   ref={formRef} className="needs-validation" noValidate>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  name="name"   required placeholder="Enter your name" />
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email"  required placeholder="Enter your email" />
                    <Form.Control.Feedback type="valid">
                      Email looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      pattern="[0-9]{10}"
                      required
                      placeholder="Enter your 10-digit number"
                    />
                    <Form.Control.Feedback type="valid">
                      Phone number looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter a 10-digit phone number.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="area">
                    <Form.Label>Interested Area</Form.Label>
                    <Form.Control
                      type="text"
                       name="area"
                      required
                      placeholder="Enter your interested area"
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter your interested area.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="resume">
                    <Form.Label>Resume Upload*</Form.Label>
                    <Form.Control type="file" name="resume"  required />
                    <Form.Control.Feedback type="invalid">
                      Please upload your resume.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="dark" type="submit" id="applyBtn" onClick={handleSubmit} >
                      Apply Now
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default CareerContactSection;
