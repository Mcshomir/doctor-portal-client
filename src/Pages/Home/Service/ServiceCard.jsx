import React from 'react';

const ServiceCard = ({ data }) => {
    const { name, icon, descriptions } = data
    return (
        <div className="card  bg-base-100 shadow-xl p-2">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p>{descriptions}</p>

            </div>
        </div>
    );
};

export default ServiceCard;