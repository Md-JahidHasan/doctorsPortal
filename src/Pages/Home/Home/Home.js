import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import PatientReview from '../PatientReview/PatientReview';
import SecondBanner from '../SecondBanner/SecondBanner';
import ServicesPart from '../ServicesPart/ServicesPart';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServicesPart></ServicesPart>
            <SecondBanner></SecondBanner>
            <MakeAppoinment></MakeAppoinment>
            <PatientReview></PatientReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;