import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [tranjectionId, setTranjectionId] = useState('')
    const [procecing, seTprocecing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {

        fetch("https://doctors-portal-server-one-sigma.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async event => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setSuccess('')
        seTprocecing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError)
            return;
        }
        console.log("paymentIntent", paymentIntent)
        if (paymentIntent.status === 'succeeded') {

            //store payment info in the database !
            const payment = {
                price,
                tranjectionId: paymentIntent.id,
                email,
                bookingId: _id


            }
            fetch(`https://doctors-portal-server-one-sigma.vercel.app/payments`, {
                method: 'POST',
                headers: {

                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        setSuccess("Congratulation your tranjection is completed !")
                        setTranjectionId(paymentIntent.id)
                    }
                })

        }
        seTprocecing(false)

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-primary my-8'
                    type="submit"
                    disabled={!stripe || !clientSecret || procecing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className='text-black-400 bold'> Your tranjectionId :{tranjectionId}</p>
                </div>
            }
        </>

    );
};

export default CheckOutForm;