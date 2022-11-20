import React from 'react';

const ReviewCard = ({data}) => {
    const {id, name, address, review, image} = data;
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <div className="text-center">
                <p>{review}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar p-4">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt=""/>
                        
                    </div>
                </div>
                <div className='p-2'>
                    <p className='font-bold'>{name}</p>
                    <p>{address}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewCard;