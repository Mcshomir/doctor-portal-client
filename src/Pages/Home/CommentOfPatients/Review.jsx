import React from 'react';

const Review = ({ reviewData }) => {
    const { name, img, location, review } = reviewData;
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">

                    <p>{review}</p>
                    <div className="card-actions justify-end align-middle">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h3>{name}</h3>
                            <h5>{location}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;