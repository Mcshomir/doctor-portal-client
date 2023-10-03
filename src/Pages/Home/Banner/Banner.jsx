import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div
                style={{ background: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className=" rounded-lg shadow-2xl lg:w-1/2" />
                    <div>
                        <h1 className="text-5xl font-bold">SmileBright Dentistry!</h1>
                        <p className="py-6">Welcome to SmileBright Dentistry, where we're dedicated to transforming your dental experience into a journey of comfort, care, and confidence. Our team of experienced and compassionate dental professionals is committed to providing you and your family with exceptional oral health care in a warm and welcoming environment.!</p>
                        <PrimaryButton>Getting Stared</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;