import React from 'react';
import image1 from '../../../images/about2.jpg';
import image2 from '../../../images/community1.jpg';
import image3 from '../../../images/community2.jpg';
import image4 from '../../../images/community4.jpg';
import image5 from '../../../images/gallary1.jpg';
import image6 from '../../../images/gallary2.jpg';
import image7 from '../../../images/gallary3.jpg';
import image8 from '../../../images/gallary4.jpg';
import image9 from '../../../images/gallary5.jpg';
import image10 from '../../../images/gallary6.jpg';
import image11 from '../../../images/about1.jpg';
import image12 from '../../../images/community3.jpg';

const Gallary = () => {
    return (
        <div className="my-5">
            <h2 className="text-center fs-1">Gallary</h2>
            <div className="row my-2 mx-2">
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image1} alt=""/>
                    </div>
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image2} alt=""/>
                </div>
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image3} alt=""/>
                </div>
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image4} alt=""/>
                </div>
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image5} alt=""/>
                </div>
                <div className="col-md-2 my-2">
                    <img className="img-fluid border rounded" src={image11} alt=""/>
                </div>
            </div>
            <div className="row my-2 mx-2">
                <div className="col-md-4 my-2">
                    <img className="img-fluid border rounded" src={image6} alt=""/>
                    </div>
                <div className="col-md-4 my-2">
                    <img className="img-fluid border rounded" src={image7} alt=""/>
                </div>
                <div className="col-md-4 my-2">
                    <img className="img-fluid border rounded" src={image8} alt=""/>
                </div>
            </div>
            <div className="row my-2 mx-2">
                <div className="col-md-3 my-2">
                    <img className="img-fluid border rounded" src={image10} alt=""/>
                    </div>
                <div className="col-md-3 my-2">
                    <img className="img-fluid border rounded" src={image12} alt=""/>
                </div>
                <div className="col-md-3 my-2">
                    <img className="img-fluid border rounded" src={image9} alt=""/>
                </div>
                <div className="col-md-3 my-2">
                    <img className="img-fluid border rounded" src={image4} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Gallary;