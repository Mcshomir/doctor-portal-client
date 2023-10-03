import React from 'react';
import tretment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Operation = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={tretment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">
                            Welcome to our practice, where Exceptional Dental Care is offered on your terms. We understand that your oral health journey is unique, so we provide personalized treatments that accommodate your schedule and preferences. Our dedicated team delivers a comprehensive range of services, ensuring your comfort and satisfaction at every visit. Experience dental care that revolves around you – because your smile deserves nothing less.</p>
                        <PrimaryButton>Getting Stared</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Operation;