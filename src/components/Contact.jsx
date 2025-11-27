import React from 'react'
import "../assets/css/Contact.css"
import contact1 from "../assets/images/contact.png"
import contact from "../assets/images/311.png"
import { useEffect } from 'react'
import { Contactform } from '../assets/js/Contactform'
import { Link } from 'react-router-dom'

function Contact() {

useEffect(() => {
  Contactform();
}, []);




  return (
    <section className="contact bg-cover" style={{backgroundImage: `url(${contact1});`}}>
        <div className="auto-container">
            <div className="contant-form-div">
                <div className="form">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <div className="contact-head">
                                    <h4 className="con-h4">We’re here to help</h4>
                                    <p className="con-p">Need help with a project or have a question about our work? We're
                                        here for you.</p>
                                </div>
                                <div classNames="con-content">
                                    <form className="needs-validation" novalidate>
                                        <div className="row g-3 pad-b">
                                            <div className="col">
                                                <label for="validationCustom01" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="validationCustom01"/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label for="validationCustom02" className="form-label">Company</label>
                                                <input type="text" className="form-control" id="validationCustom02"/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-3 pad-b">
                                            <div className="col">
                                                <label for="validationCustom03" className="form-label">Email Address</label>
                                                <input type="text" className="form-control" id="validationCustom03"/>
                                                <div className="valid-feedback">
                                                    Hurry up!
                                                </div>
                                            </div>

                                            <div className="col">
                                                <label for="validationCustom04" className="form-label">Phonenumber</label>
                                                <input type="text" className="form-control" id="validationCustom04"/>
                                                <div className="valid-feedback">
                                                    Hurry up!
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-3 pad-b">
                                            <div className="col">
                                                <label for="validationCustom04" className="form-label">State</label>
                                                <select className="form-select pad-b" id="validationCustom04" required>
                                                    <option selected disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid state.
                                                </div>
                                            </div>
                                        </div>
                                        <div classNames="row g-3 pad-b">
                                            <div className="col">
                                                <label for="validationCustom05" className="form-label">MESSAGE</label>
                                                <input type="text" className="form-control" id="validationCustom05"
                                                    required/>
                                                <div className="invalid-feedback">
                                                    Please Enter your valid message.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="invalidCheck" required/>
                                                <label className="form-check-label" for="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                         <div className="h-captcha" data-sitekey="YOUR_SITE_KEY"></div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label">Solve the CAPTCHA:</label>
                                            <div className="d-flex align-items-center">
                                                <span id="num1" className="fw-bold fs-5 me-1"></span>
                                                <span id="operator" className="fw-bold fs-5 me-1"></span>
                                                <span id="num2" className="fw-bold fs-5 me-3"></span>
                                                <span className="fw-bold fs-5 me-2">=</span>
                                                <input type="number" className="form-control w-25 me-2" id="captchaInput"
                                                    required/>
                                                <button type="button" className="btn btn-outline-primary"
                                                    id="checkCaptcha">Check</button>
                                            </div>
                                        </div>

                                        <p id="captchaResult" className="mt-2 fw-bold"></p>

                                        

                                        <div className="col-12">
                                            <button className=" btn-style-two" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img-before bg-cover"
                            style={{backgroundImage: `url(${contact})`,
    position: "relative",}}>
                            <div className="bg-head">
                                <h5 className="bg-head-h5">An insightful consulting firm with an engaged team</h5>
                                <Link to="/contact" className="btn-style-one">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
