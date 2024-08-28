import React, { useEffect, useState } from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2'>
                    <h2 className='font-semibold text-xl mx-2 mb-4'>Dragon News</h2>
                    <div>
                        {
                            news.map(singleNews=> <NewsCard 
                                key={singleNews._id} singleNews={singleNews}></NewsCard>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;