import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const AppoinmentModal = ({ tretment, selectedDate, setTretment, refetch }) => {
    console.log('shomir tretment', tretment);

    const { user } = useContext(AuthContext);
    const { name, slots, price } = tretment;  // tretment is appoinment option just different name !
    const date = format(selectedDate, 'PP')
    const handleClick = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone);
        const booking = {
            appoinmentDate: date,
            tretment: `${tretment.name}`,
            patient: name,
            slot,
            email,
            phone,
            price



        }

        fetch("https://doctors-portal-server-one-sigma.vercel.app/bookings", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    setTretment(null);
                    toast.success('Booking Confrimed !')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box " >
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close!</label>
                    </div>
                    <h3 className="font-bold text-2xl pb-5">{name}!</h3>
                    <form onSubmit={handleClick} className='grid grid-cols-1 gap-4'>
                        <input type="text" value={date} className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }

                        </select>
                        <input name="name" type="text" placeholder="Your name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />

                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Your email" className="input input-bordered w-full " />

                        <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full " />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default AppoinmentModal;