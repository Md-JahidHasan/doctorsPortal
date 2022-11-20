import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bgimage from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header>
            <div 
            className="hero "
            style={{
                background:`url(${bgimage})`,
                backgroundSize: 'cover'
                }}>
                <div className="hero-content flex-col md:flex-row-reverse md:p-20">
                    <img src={chair} className="md:w-2/5 rounded-lg shadow-2xl" alt='' />
                    <div className=' shadow-2xl rounded-lg'>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;