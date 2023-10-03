import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import Review from './Review';
const CommentOfPatients = () => {
    const patienctsReview = [
        {
            id: 1,
            name: "Shomir kumar",
            review: "Highly skilled and compassionate. The doctor's expertise and care made my dental experience exceptional. I highly recommend their services.",
            location: "Rajbari",
            img: person1
        },
        {
            id: 2,
            name: "Akash Biswas",
            review: "Outstanding dentist. Professional, attentive, and gentle. My fears vanished, and my smile is better than ever. Grateful for the excellent care.",
            location: "Magura",
            img: person2
        },
        {
            id: 3,
            name: "Puja Biswas",
            review:
                "Exemplary dentist. Painstakingly thorough, excellent communicator. Transformed my oral health. A true partner in my well-being. Highly satisfied.",
            location: "Dhaka",
            img: person3
        }
    ]
    return (
        <div className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testmonial !</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24 ' src={quote} alt="" />
                </div>

            </div>
            <div className='grid gap-6 mt-12 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    patienctsReview.map(reviewData => <Review
                        key={reviewData.id}
                        reviewData={reviewData}
                    ></Review>)

                }

            </div>
        </div>
    );
};

export default CommentOfPatients;