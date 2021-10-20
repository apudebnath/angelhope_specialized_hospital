import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin, faTumblr } from "@fortawesome/free-brands-svg-icons";
const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const linked = <FontAwesomeIcon icon={faLinkedin} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const tumblr = <FontAwesomeIcon icon={faTumblr} />

const Service = ({service}) => {
    const{name, id, image, description} = service;

    return (
        <div className="col-md-4 col-12 ">
            <Card className="shadow p-2 mb-5 bg-body rounded"  style={{ width: '21rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{height: '50px'}}>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0,100)}
                    </Card.Text>
                    <Link to={`/serviceDetails/${id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                    <div className="fs-4 text-center text-secondary pt-3 ">
                            <span className="ms-4">{facebook}</span>
                            <span className="mx-3">{twitter}</span>
                            <span className="">{insta}</span>
                            <span className="mx-3">{linked}</span>
                            <span className="">{tumblr}</span>
                            <span className="mx-3">{youtube}</span>
                    </div>
                </Card.Body>
              </Card>
        </div>
    );
};

export default Service;