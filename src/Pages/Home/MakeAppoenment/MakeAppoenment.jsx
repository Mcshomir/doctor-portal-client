import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoentment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppoenment = () => {
    return (
        <section>
            <div className="hero "
                style={{
                    background: `url(${appoentment})`
                }}
            >
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" hidden md:block -mt-32 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='text-white'>
                        <h2 className='text-primary pb-8'>Appenment !</h2>
                        <h1 className="text-5xl font-bold">Make an appointment Today!</h1>
                        <p className="py-6">Ready to prioritize your oral health? Don't wait – make an appointment today and embark on your journey to a healthier, brighter smile. Our friendly team is eager to provide you with top-notch care, ensuring your comfort and well-being every step of the way. Take the first step now!</p>
                        <PrimaryButton>Getting Stared</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoenment;