import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('/public/categories.json')
        .then(res=>res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div className='space-y-6'>
            <h2 className="text-2xl font-semibold">All Caterogy</h2>
            {
                category.map(singleCategory=> <NavLink 
                    className='block px-4 text-lg text-[#9F9F9F]'
                    to={`/category/${category.id}`}  
                    key={setCategory.id

                    }>{singleCategory.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;