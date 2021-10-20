import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const ServiceDetails = () => {
    const {ServiceId} = useParams();
    const [items, setItems] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/angelhope-data/main/HospitalData.js')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    const item = items?.find(service => service?.id == ServiceId)

    const handleBook = () => {
        history.push("/bookSpecialist");
    }

    return (
        <div>
            <div className="text-center" style={{ backgroundImage:`url(${item?.bannerImg})`, backgroundRepeat: 'no-repeat', height: 300,   }}>
                <h2 className=" pt-5 text-light" style={{fontSize: '60px'}}>{item?.name}</h2>
                <p className="px-5 text-light" style={{fontSize: '22px', fontWeight: '200'}}>{item?.description}</p>
            </div>   
            <div className="container my-5">
                <h4 className="pb-3">ServiceDetails : {ServiceId}</h4>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={item?.image} alt="" />
                        <h4 className="pt-3">Estimated Cost: ${item?.price}</h4>
                        <h3>Review:{item?.review}</h3>
                    </div>
                    <div className="col-md-6 col-12">    
                        
                        <p>{item?.longDescription}</p>
                        <Button onClick={handleBook}>Book Specialist</Button>
                    </div>
                </div>
                <div>
                    <p>{item?.conditions}</p>
                    <p>{item?.team}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;