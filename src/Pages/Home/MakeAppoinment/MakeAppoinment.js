import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import image from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const MakeAppoinment = () => {
    return (
        <section className='mt-16'>
            <div className=" " 
                style={{backgroundImage:`url(${image})`}}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="w-1/2 -mt-32 hidden md:block" alt=''/>
                    <div>
                        <h3 className='text-primary font-bold'>APPOINMENT</h3>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <ButtonPrimary>Appoinment</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;