import React from 'react';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin, faTumblr } from "@fortawesome/free-brands-svg-icons";
const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const linked = <FontAwesomeIcon icon={faLinkedin} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const tumblr = <FontAwesomeIcon icon={faTumblr} />

const Footer = () => {
    return (
        <div style={{backgroundColor: 'lightgray'}}>
            <div  className="container py-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src={logo} alt='' style={{width: '250px'}}/>
                        </div>
                        <div className="fs-4 text-center text-primary">
                            <span className="ms-4">{facebook}</span>
                            <span className="mx-3">{twitter}</span>
                            <span className="">{insta}</span>
                            <span className="mx-3">{linked}</span>
                            <span className="">{tumblr}</span>
                            <span className="mx-3">{youtube}</span>
                        </div>
                        <div className="pt-3">
                            <h5 className="text-center">For International Patients</h5>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h6>USA</h6>
                                    <h6>Canada</h6>
                                    <h6>Korea</h6>
                                    <h6>Argentina</h6>
                                </div>
                                <div className="ms-3">
                                    <h6>Australia</h6>
                                    <h6>Franch</h6>
                                    <h6>Bangladesh</h6>
                                    <h6>Uk</h6>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="">Patients</h4>
                        <div className="">
                            <h6>Find a Doctor</h6>
                            <h6>Immediate Care Locations</h6>
                            <h6>International Patients</h6>
                            <h6>myAngelHopehealth</h6>
                            <h6>Emergency Department Locations</h6>
                            <h6>Billing & Insurance</h6>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="">Get Involved</h4>
                        <div className="">
                            <h6>Contact a Doctor</h6>
                            <h6>Health Plan</h6>
                            <h6>Emergency</h6>
                            <h6>Billing</h6>
                            <h6>Nondiscrimination</h6>
                            <h6>Report Broken Links</h6>
                            <h6>Privecy Policy</h6>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="">AngelHope</h4>
                        <div className="">
                            <h6>Contact a Department</h6>
                            <h6>Your Feedback</h6>
                            <h6>Contact Media Team</h6>
                            <h6>Browse FAQs</h6>
                            <h6>Read Patient Stories</h6>
                            <h6>Download Our Apps</h6>
                            <h6>Subscribe to our Newsletter</h6>
                            <h6>Share Your Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row text-center text-light" style={{backgroundColor: 'gray'}}>
                    <hr />
                    <p>Copyright &copy; 2021 || All right reserved by AngelHope Specialized Hospital</p>
                </div>
        </div>
    );    
};    

export default Footer;