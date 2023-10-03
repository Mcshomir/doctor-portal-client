import React from 'react';

const InfoCard = ({ card }) => {
    const { id, icon, name, descriptions, bgClass } = card
    return (
        <div>
            <div className={`card px-2  md:card-side bg-base-100 shadow-xl ${bgClass} `}>
                <figure><img src={icon} className='md: mt-2' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{descriptions}</p>

                </div>
            </div>

        </div>
    );
};

export default InfoCard;