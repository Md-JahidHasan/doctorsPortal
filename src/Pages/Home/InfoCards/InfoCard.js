import React from 'react';

const InfoCard = ({info}) => {
    const {id, title, detail, icon, bgClass} = info;
    return (
        <div className={`card md:card-side shadow-xl ${bgClass} p-4 text-white`}>
            <figure><img  src={icon} alt="Movie"/></figure>
            <div className=" p-2">
                <h3 className="card-title">{title}</h3>
                <p className='text-sm'>{detail}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;