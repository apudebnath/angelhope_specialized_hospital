import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../../images/slider/banner4.jpg';
import slider2 from '../../../../images/slider/banner5.jpg';
import slider3 from '../../../../images/slider/banner6.jpg';
const Slider = () => {
    return (
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
              />
              <Carousel.Caption className="pb-5">
                <h5 className="text-light"style={{fontSize: '60px'}}>Your best care begins at AngelHope</h5>
                <p className=" text-light" style={{fontSize: '30px', fontWeight: '200'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />
              <Carousel.Caption className="pb-5">
                <h5 className="text-light"style={{fontSize: '60px'}}>Second slide label</h5>
                <p className=" text-light" style={{fontSize: '30px', fontWeight: '200', color: '#9ba1ec'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
              />
              <Carousel.Caption className="pb-5">
                <h5 className="text-light"style={{fontSize: '60px'}}>Third slide label</h5>
                <p className=" text-light" style={{fontSize: '30px', fontWeight: '200'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Slider;