import React from 'react';
import ReviewCard from './ReviewCard';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import image from '../../../assets/icons/quote.svg';

const PatientReview = () => {
    const testimonial = [
        {
            id:1,
            name:'Alex Grande',
            address:'Wasington',
            image: person1,
            review:'He was a ver good doctor and expert'
        },
        {
            id:2,
            name:'Marry Curry',
            address:'NewYork',
            image: person2,
            review:'He was a ver good doctor and expert'
        },
        {
            id:3,
            name:'Alex Grande',
            address:'Wasington',
            image: person3,
            review:'He was a ver good doctor and expert'
        },
    ]
    return (
        <div className='mx-6'>
            <div className='flex justify-between mt-10 mb-4'>
                <div className=''>
                    <h4 className='font-bold text-primary'>TESTIMONIAL</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img width='80px' src={image} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    testimonial.map(data=><ReviewCard
                        key={data.id}
                        data={data}
                    ></ReviewCard>)
                }
            </div>
            
        </div>
    );
};

export default PatientReview;