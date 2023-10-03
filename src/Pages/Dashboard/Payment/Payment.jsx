import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import { useNavigation } from 'react-day-picker';

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
console.log("ami promise", stripePromise)
const Payment = () => {
    // const navigation = useNavigation();

    console.log(stripePromise)
    const booking = useLoaderData()
    const { tretment, price, appoinmentDate, slot } = booking;
    // if (navigation.state === "loading") {
    //     return <h3>loading...</h3>
    // }

    return (
        <div>
            <h1 className='text-3xl'>Payment for {tretment} </h1>
            <p className='text-xl'>Plz pay {price} for your appoinment  on {appoinmentDate} at {slot}</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;