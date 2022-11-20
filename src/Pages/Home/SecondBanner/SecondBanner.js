import React from 'react';
import Image from '../../../assets/images/treatment.png'
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const SecondBanner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col md:flex-row md:m-20">
                <img src={Image} className="w-1/2 rounded-lg shadow-2xl" />
                <div className='p-4 '>
                <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <ButtonPrimary>Services</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;