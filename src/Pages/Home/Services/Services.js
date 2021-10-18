import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/dataJson/main/breakfast.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container"> 
            <div className=" row text-center justify-content-between my-5 g-3">
                <h2>Our Services</h2>
                <p>The specialized care physicians at AngelHope are here for you in all stages of your life.</p>
                
                {
                    services?.map(service =><Service 
                        key={service.id}
                        service={service}></Service>) 
                }
            </div>
        </div>
    );
};

export default Services;
