import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{name, id, image, description} = service;

    return (
        <div className="col-md-4 col-12 ">
            <Card className="shadow p-3 mb-5 bg-body rounded"  style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{height: '50px'}}>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0,100)}
                    </Card.Text>
                    <Link to={`/serviceDetails/${id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
              </Card>
        </div>
    );
};

export default Service;