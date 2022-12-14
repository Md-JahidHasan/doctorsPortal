import React from 'react';
import Chair from '../../../assets/images/chair.png'
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;