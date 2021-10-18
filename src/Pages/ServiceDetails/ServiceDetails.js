import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const ServiceDetails = () => {
    const {ServiceId} = useParams();
    const [items, setItems] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/dataJson/main/breakfast.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    const item = items?.find(service => service?.id == ServiceId)

    const handleBook = () => {
        history.push("/bookSpecialist");
    }
    return (
        <div className="container text-center my-5">
            <h2 className="pb-3">ServiceDetails : {ServiceId}</h2>
            <div className="row justify-content-center">
            <div className="col-md-12">
                <img className="w-25" src={item?.image} alt="" />
                <h2>Name: {item?.name}</h2>
                <h4>Price: ${item?.price}</h4>
                <p>Review:{item?.review}</p>
                <p>Description: {item?.description}</p>
                <button onClick={handleBook}>Book Specialist</button>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;