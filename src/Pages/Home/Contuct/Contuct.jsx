import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bg1 from '../../../assets/images/appointment.png'

const Contuct = () => {
    return (
        <div className='text-center mt-20 pt-6 pb-8'
            style={{ background: `url(${bg1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div>
                <p className='text-white'>Contuct-us</p>
                <h2 className='text-white pb-7'>Stay connected with-us !</h2>
                <div>
                    <input type="email" placeholder="Eamil" className="input input-bordered w-full max-w-xs mb-2" /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-2" />  <br />
                    <textarea placeholder="message" className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-4" ></textarea>

                </div >
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contuct;