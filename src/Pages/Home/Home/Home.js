import React from 'react';
import Gallary from '../Gallary/Gallary';
import Slider from '../Header/Slider/Slider';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Newsletter></Newsletter>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;