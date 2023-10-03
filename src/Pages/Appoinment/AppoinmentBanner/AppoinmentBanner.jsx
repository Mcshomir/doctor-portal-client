import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div style={{ background: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-1/2 mx-10'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;