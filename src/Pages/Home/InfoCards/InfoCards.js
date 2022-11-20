import React from 'react';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const totalInfo = [
        {
            id:1,
            title: 'Opening Hours',
            detail: 'Opne at 9:00am to 5:00pm everyday',
            icon: Clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            title: 'Visit Our Location',
            detail: 'Opne at 9:00am to 5:00pm everyday',
            icon: Marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            title: 'Contact Us Now',
            detail: 'Opne at 9:00am to 5:00pm everyday',
            icon: Phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                totalInfo.map(info=><InfoCard
                key={info.id}
                info= {info}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;