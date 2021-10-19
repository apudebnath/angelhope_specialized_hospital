import React from 'react';
import banner from '../../images/communityBanner.jpg';
import image1 from '../../images/community1.jpg';
import image2 from '../../images/community2.jpg';
import image3 from '../../images/community3.jpg';
import image4 from '../../images/community4.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Community = () => {
    return (
        <div>
            <div className="row" style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', height: '350px'}}>
                <div className="d-flex justify-content-center align-items-center text-light">
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className='pb-5'>
                        <h2 className="text-info">AngelHope Health Office of Community</h2>
                        <h5>AngelHope Health is more than just a collection of hospitals and clinics. We are an engaged member of our broader community, and we take our responsibility for community service seriously.</h5>
                        <p>Whether expert physicians are providing basic health care to unhoused populations on the streets of Los Angeles, outreach teams are supporting healthier communities through our Sound Body Sound Mind program, or staff are caring for service members injured in war as part Operation Mend, AHOC Health is about serving people with dignity and respect.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image1} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-warning">What is the AngelHope Office of Community?</h2>
                        <h5>In November 2018, the Office of Community was formed to establish trust in UCLA Health by having a direct on the ground street presence and engaging in equitable and impactful health and wellness initiatives in strategic alignment with internal stakeholders and key community partners.</h5>
                        <p>
                           The Office of Community envisions a culture in which active community engagement and equitable and accessible health and wellness initiatives are embraced as UCLA Health core workplace values, with UCLA Health positioned as the most trusted health care provider across the diverse communities of Southern California. 
                        </p>
                    </div>
                    <div>
                        <p>In Fiscal Year 2019-2020, Office of Community efforts were focused on providing COVID safety education and wide distribution of personal protective equipment (PPE) for the community through our corporate and community partnerships. Additionally, the Office of Community supported the annual Los Angeles Care Harbor event, which provided free medical, dental, vision and preventive care to over 1,000 homeless, underinsured and underserved Angelenos. The Office of Community participated in outreach efforts for veterans through the UCLA Veterans Affairs Relations and Programs and coordinated multiple events with our community partners in targeted underserved communities.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                    <img className="img-fluid" src={image2} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image3} alt=""/>
                    </div>
                </div>
                <div>
                    <h3>Our expanded and unified approach</h3>
                    <p>The Office of Community works closely with many national and local foundations, such as the American Heart Association (AHA), Leukemia & Lymphoma Society (LLS), American Cancer Society (ACS), American Red Cross and others on important community engagement and education initiatives. 
                    The Office of Community also serves as an important community interface and sponsor of many health-specific awareness campaigns that have much deeper reach and impact than simply fundraising, such as the annual Kidney Fair, Tour de Pier pancreatic cancer event, March of Dimes and National Alliance on Mental Illness, and many others.
                    The office has increasingly worked with the Health Equity, Diversity and Inclusion team to involve doctors and nurses who want to be engaged in community outreach efforts, and brought together volunteers to work the Magic Johnson Park opening in Watts, where they provided food and other giveaways.
                    The Office of Community has expanded their scope beyond just helping the local community. In the fall of 2020, they oversaw global humanitarian outreach efforts as part of UCLA Operation Beirut and AHOC Aid to Armenia. Looking forward, they hope to serve as the glue and connective tissue that brings together all community outreach and engagement efforts across AHOC Health.</p>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2 className="text-info">Community Health Needs Assessment and Implementation Strategy</h2>
                        <p>
                        Serving the community is one of our highest priorities. Download our latest community health needs assessments and implementation strategies in PDF format below.

                        AHOC Health (UCLA) is required by the IRS (REG 106499-12) to conduct a Community Health Needs Assessment (CHNA) and adopt an implementation strategy at least once every three (3) years for each of our hospitals - Ronald Reagan UCLA Medical Center; UCLA Santa Monica Medical Center; and Resnick Neuropsychiatric Hospital at UCLA.
                        </p>
                        <Link to="/aboutus"><Button>Know More</Button></Link>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;