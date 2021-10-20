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
                className="d-block w-100 img-fluid"
                src={slider1}
                alt="First slide"
              />
              <Carousel.Caption className="pb-2">
                <h5 className="text-light"style={{fontSize: '46px'}}>Your best care begins at AngelHope</h5>
                <p className=" text-light" style={{fontSize: '16px', fontWeight: '200'}}>Lead clinical trials and train the next generation of clinical leaders. </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={slider2}
                alt="Second slide"
              />
              <Carousel.Caption className="pb-2">
                <h5 className="text-light"style={{fontSize: '46px'}}>Our Specialist Surgeons</h5>
                <p className=" text-light" style={{fontSize: '16px', fontWeight: '200'}}>Our surgeons are some of the most skilled in the country</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={slider3}
                alt="Third slide"
              />
              <Carousel.Caption className="pb-2">
                <h5 className="text-light"style={{fontSize: '46px'}}>Excellent OT facilities</h5>
                <p className=" text-light" style={{fontSize: '16px', fontWeight: '200'}}>Lead clinical trials and train the next generation of clinical leaders. </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Slider;