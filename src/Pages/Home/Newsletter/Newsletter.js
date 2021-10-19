import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import banner from '../../../images/newsletter.jpg';
import image1 from '../../../images/about2.jpg';
import image2 from '../../../images/community1.jpg';
import image3 from '../../../images/community2.jpg';
import image4 from '../../../images/community4.jpg';

const Newsletter = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}} className="d-flex justify-content-center align-items-center">
                <div className="container text-light">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2>Stay in touch</h2>
                            <p>Subscribe to AngelHope Health newsletters andpublications to stay in the know on latestdevelopments to help you and your family.</p>
                        </div>
                        <div className="col-md-6 col-12 me-auto">
                            <Form>
                                <Row className="align-items-center pt-5">
                                  <Col sm={6} className="my-1">
                                    <Form.Label    htmlFor="inlineFormInputEmail"            visuallyHidden>
                                      Email
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputEmail" placeholder="Your Email" />
                                  </Col>
                                  <Col xs="auto" className="my-1">
                                    <Button type="submit">NewsLetter</Button>
                                  </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-5">
                    <div className="col-md-3">
                        <img className="img-fluid border rounded" src={image1} alt=""/>
                        </div>
                    <div className="col-md-3">
                        <img className="img-fluid border rounded" src={image2} alt=""/>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid border rounded" src={image3} alt=""/>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid border rounded" src={image4} alt=""/>
                    </div>
                </div>
        </div>
    );
};

export default Newsletter;