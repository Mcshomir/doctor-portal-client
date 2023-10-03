import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Service from '../Service/Service';
import Operation from '../Operation/Operation';
import MakeAppoenment from '../MakeAppoenment/MakeAppoenment';
import CommentOfPatients from '../CommentOfPatients/CommentOfPatients';
import Contuct from '../Contuct/Contuct';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Service></Service>
            <Operation></Operation>
            <MakeAppoenment></MakeAppoenment>
            <CommentOfPatients></CommentOfPatients>
            <Contuct></Contuct>
        </div>
    );
};

export default Home;