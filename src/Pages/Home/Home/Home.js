import React from 'react';
import Navigation from '../Header/Navbar/Navigation';
import Slider from '../Header/Slider/Slider';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;