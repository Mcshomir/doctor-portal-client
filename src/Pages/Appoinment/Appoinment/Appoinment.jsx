import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <AvailableAppoinment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;