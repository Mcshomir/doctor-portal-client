import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Service = () => {
    const serviceData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            descriptions: "Enhance your smile's strength with our Fluoride Treatment. Protects teeth, prevents decay, and promotes lasting oral wellness.",
            icon: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            descriptions:
                "Restore teeth seamlessly with our Cavity Filling. Say goodbye to discomfort and hello to a confident smile.",
            icon: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            descriptions:
                "Unveil a dazzling smile with Teeth Whitening. Reveal your pearly whites and boost your confidence!",
            icon: whitening
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>

                <h2 className=' text-[#19D3AE]'>OUR SERVICES</h2>
                <p className='text-3xl'>Services We Provide</p>


            </div>

            <div>
                <div className='grid gap-6 mt-12  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        serviceData.map(data => <ServiceCard
                            key={data.id}
                            data={data}
                        ></ServiceCard>)
                    }
                </div>




            </div>
        </div >
    );
};

export default Service;