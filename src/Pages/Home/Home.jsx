import React, { useEffect, useState } from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        fetch('/public/news.json')
        .then(res=> res.json())
        .then(data=>setNews(data))
    },[])

    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <LeftSideNav/>
                    </div>
                <div className='md:col-span-2'>
                    <h2 className='font-semibold text-xl'>Dragon News Home: {news.length}</h2>
                    
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;