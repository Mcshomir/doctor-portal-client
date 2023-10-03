import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import markar from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    const infoCard = [
        {
            id: 1,
            name: "Opening Hours",
            descriptions: "Open 3.00 pm to 9.00 pm everyday",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary "
        },
        {
            id: 2,
            name: "Our Locations",
            descriptions: "Khulumbariya Bazar, Soilokupa, jhinaidha ",
            icon: markar,
            bgClass: "bg-gradient-to-r from-primary to-secondary "
        },
        {
            id: 3,
            name: "Contuct-us",
            descriptions:
                "shomir.kumar11@gmail.com || 01915205801",


            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary "
        }
    ]
    return (
        <div className='grid gap-6 mt-12 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                infoCard.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;