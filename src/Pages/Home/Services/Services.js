import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/angelhope-data/main/HospitalData.js')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="container"> 
            <div className=" row text-center justify-content-around my-5">
                <h2 className="fs-1">Our Services</h2>
                <p className="fs-5">The specialized care physicians at AngelHope are here for you in all stages of your life.</p>
                
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
