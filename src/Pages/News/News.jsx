import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid  md:grid grid-cols-4 mt-4'>
                <div className='col-span-3'>
                    <h2>News Details</h2>
                    <Link to='/'>
                        <button className='btn btn-secondary btn-sm'><FaArrowLeft /> All News in this Category</button>
                    </Link>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;