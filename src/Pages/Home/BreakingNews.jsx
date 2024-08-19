import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='mt-2 mb-2 flex'>
            <button className='btn btn-secondary mr-2'>Breaking News</button>
            <Marquee speed={80} pauseOnHover={true}>
            Trinity Today is a publication for our alumni and friends. Available for all to read here. Trinity Today is published by Trinity Development ...
            </Marquee>
        </div>
    );
};

export default BreakingNews;
