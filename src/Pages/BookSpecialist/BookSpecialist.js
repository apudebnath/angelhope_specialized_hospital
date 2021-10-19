import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const BookSpecialist = () => {
    return (
        <div className="my-5">
            <h2 className="text-center">Book a Specialist Doctor</h2>

            <div className="container">
                <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" placeholder="Patient's First Name" />
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" placeholder="Patient's Last Name" />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridDeasease">
                        <Form.Control type="text" placeholder="Deasease Type" />
                      </Form.Group>
                    </Row>
                  
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                  
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>
    
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                  
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default BookSpecialist;