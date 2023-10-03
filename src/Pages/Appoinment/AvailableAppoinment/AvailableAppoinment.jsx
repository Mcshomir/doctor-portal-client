import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {

    const [tretment, setTretment] = useState(null);
    const date = format(selectedDate, "PP")

    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinments', date],
        queryFn: () => fetch(`https://doctors-portal-server-one-sigma.vercel.app/appoinment?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <span className="loading loading-bars flex justify-center align-middle mx-auto loading-lg"></span>
    }

    return (
        <div>
            <div className='pt-20'>
                <p className='text-primary text-center '>You have selected data: {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    appoinmentOptions.map(appoinmentOption => <AppoinmentOption
                        key={appoinmentOption._id}
                        appoinmentOption={appoinmentOption}
                        setTretment={setTretment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                tretment &&
                <AppoinmentModal
                    tretment={tretment}
                    setTretment={setTretment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></AppoinmentModal>
            }
        </div>
    );
};

export default AvailableAppoinment;