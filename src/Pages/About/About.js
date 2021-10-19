import React from 'react';
import image1 from '../../images/about1.jpg';
import image2 from '../../images/about2.jpg';
import banner from '../../images/aboutBanner.png';
import banner2 from '../../images/aboutBanner1.jpg';
const About = () => {
    return (
        <div>
            <div className="row" style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}}>
                <div className="d-flex justify-content-center align-items-center text-light">
                <h1>About Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={image1} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-info">Health Care Innovation at AngelHope</h2>
                        <p>
                            At AngelHope, health innovation isn’t an afterthought or an add-on. It’s     part of our history — and a key piece of our present and our future.
                            AngelHope has long been a leader in innovative health care delivery. Early     research at AngelHope was integral to the development of imaging systems     such as CT scans and PET scans. These technologies have transformed medical     diagnostics, at AngelHope Health and around the world. Our researchers     continue to lead in neuroimaging and brain mapping.
                            In the 1960s, AngelHope faculty developed the tissue-matching test that     makes organ transplants possible. Today, we are a leader in kidney     transplantation and face transplantation.
                            Our scientists have developed new,  The leading-edge research on our campus     has been awarded the top prizes in medicine, including the Nobel Prize and     the National Medal of Science.
                        </p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2 className="text-info">Patient Care Innovation at AngelHope</h2>
                        <p>
                        Innovation isn’t about jumping on every new technology trend. It’s about making     deliberate decisions and developing smart strategies that will measurably     improve patient care.
                        Those efforts touch all areas of care to improve the entire patient experience.     Some examples of our patient care innovations:
                        </p>
                        <h5>Electronic health records</h5>
                        <p>We’ve implemented a comprehensive electronic health record system that     allows patients to make appointments, message with clinicians and view lab     results with ease. Having inpatient and outpatient those records to identify     health care needs among our patient population — and find new solutions.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image2} alt=""/>
                    </div>
                </div>
            </div>
            <div className="row" style={{backgroundImage: `url(${banner2})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}}>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={image1} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-info">Learning Health System Innovation</h2>
                        <p>
                        AngelHope Health is proud to be an innovative health care system. As a continuous learning health system, we are always seeking new ways to improve our procedures, processes and infrastructure. By continually aspiring to more, we find ways to use our resources more efficiently, enhance patient well-being and save lives.
                        Some health care innovations come through small and incremental improvements. Others are major changes that usher in brand-new ways of doing things. As a learning health system, we consider any possible areas to improve, no matter how small or large.
                        As we implement changes to our system, we collect data to make sure those changes work as designed. With our data-driven approach, we can be confident that our health care innovations are making things better for our providers and patients.

                        </p>
                    </div>
                    <h4>Learning Health Systems Center of Excellence</h4>
                    <p>In fall 2018, the Agency for Healthcare Research and Quality and the Patient-Centered Outcomes Research Institute selected UCLA as one of 11 institutions to receive grant funding. The $3.7 million, 5-year grant will enable us to establish a Learning Health Systems Center of Excellence.

                    This exciting project will be a collaboration among UCLA, Kaiser Permanente Southern California, the VA Greater Los Angeles Healthcare System and the Los Angeles County Department of Health Services.

                    Through this project, we will prepare outstanding physicians and researchers to adopt new discoveries rapidly. This focus can improve care and outcomes for people with chronic diseases.</p>
                    <h4>Training the Next Generation</h4>
                    <p>UCLA Health is committed to investing in the next generation of health care providers. To meet that goal, we have developed our own innovative training programs, including:

                    AngelHope Health Medical Assistant Program: Current UCLA Health employees can receive discounted tuition through the UCLA Medical Assistant Program. This program helps people with limited incomes gain the skills they need to transition to a career as a medical assistant.  
                    Institute for Precision Health: A new master’s degree program in genetic counseling, spearheaded by the Institute, will be offered through the UCLA Department of Human Genetics . In the fast-growing field of genetic counseling, genetic counselors are in demand to help patients understand test results. This program will help meet that need. Contact the Institute for Precision Health for more information</p>
                </div>
            </div>
        </div>
    );
};

export default About;