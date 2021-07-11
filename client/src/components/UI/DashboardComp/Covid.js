import Heading from "./../../UI/Heading/Heading";
import Sidebar from "./Sidebar";
import React from "react";
import Guideline from './../../UI/images/Guideline.jpg';
import VaccinePriority from './../../UI/images/Vaccineprio.jpg';
import Travel from './../../UI/images/Travel.png';
import Helpline from './../../UI/images/Helpline.jpg';
import International from './../../UI/images/International.jpg';
import Vaccine from './../../UI/images/Vaccine.jpg';
import Bedinfo from './../../UI/images/Beds.jpg';
import faq from './../../UI/images/faq.png';

const Covid = () => {
    return (
        <>
            <Heading />
            <Sidebar />
            <h2 style={{ background: "lightgrey" }} class="p-2">Aura Connect stands with #IndiaFightsCorona</h2>
            <div class="row row-cols-1 row-cols-md-4 g-5 m-5">
                <div class="col">
                    <div class="card">
                        <img src={Guideline} class="card-img-top" alt="..Guidelines" />
                        <div class="card-body">
                            <h5 class="card-title">Guidelines</h5>
                            <p class="card-text">Guidelines for effective control of COVID-19, issued by the Ministry of Home Affairs. Click below to know more</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_161725058451307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={VaccinePriority} class="card-img-top" alt="...Priority Group" />
                        <div class="card-body">
                            <h5 class="card-title">Prioritised Group</h5>
                            <p class="card-text">Prioritised Group for the vaccination, issued by the Ministry of Health and Family Welfare. Click below to know more</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_161104930451307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Travel} class="card-img-top" alt="...Travel" />
                        <div class="card-body">
                            <h5 class="card-title">Domestic Travel</h5>
                            <p class="card-text">State/UT-wise guideline for Domestic Travel by Air, Road and Rail. Click below to know more.</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_162398954051307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Helpline} class="card-img-top" alt="...Helpline" />
                        <div class="card-body">
                            <h5 class="card-title">Helpline</h5>
                            <p class="card-text">Know your State/UT helpline number for any emergency for COVID. Click below to know more.</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_159340784951307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={International} class="card-img-top" alt="...International" />
                        <div class="card-body">
                            <h5 class="card-title">International Travel</h5>
                            <p class="card-text">Country-wise guidelines for International Travel and restrictions during COVID-19. </p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_162384022351307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Vaccine} class="card-img-top" alt="...Vaccine" />
                        <div class="card-body">
                            <h5 class="card-title">Vaccine Registration</h5>
                            <p class="card-text">Know how to book your appoitment for registration, if you are 18 years or older. Click below to know more.</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_162157154351307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Bedinfo} class="card-img-top" alt="...Bedinfo" />
                        <div class="card-body">
                            <h5 class="card-title">Availability of Beds</h5>
                            <p class="card-text">State/UT-wise list of official portals to know about the availability of beds in hospitals. Click to know more.</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_162159261551307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={faq} class="card-img-top" alt="...faqs" />
                        <div class="card-body">
                            <h5 class="card-title">FAQs Vaccination</h5>
                            <p class="card-text">Frequently Asked Question on Co-WIN regarding the process of vaccination. Click below to know more</p>
                            <a href="https://static.mygov.in/rest/s3fs-public/mygov_161960430051307401.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Covid;