import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AppoinmentOption = ({ appoinmentOption, setTretment }) => {

    const { name, slots, price } = appoinmentOption;
    return (
        <div>
            <div className="card w-96 bg-secondary text-primary-content">
                <div className="card-body text-center">
                    <h2 className=" text-2xl text-center">{name}</h2>
                    <p>{slots?.length > 0 ? slots[0] : "Try another day !"}</p>
                    <p> {slots?.length} {slots?.length > 1 ? "space " : "space"} available !</p>
                    <p>Price:${price}</p>
                    <div className="card-actions justify-center ">

                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTretment(appoinmentOption)}
                            htmlFor="my-modal"
                            className="btn btn-primary"
                        >Book Appoinment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;