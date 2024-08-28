import React from 'react';
import { FaBlog, FaEye, FaRegBookmark, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const { _id, title, details, image_url, rating, total_view, author } = singleNews;
    return (
        <div>
            <div className='flex justify-between items-center bg-[#F3F3F3] p-4 rounded my-2 '>
                <div className='flex items-center'>
                    <div>
                        <img className='w-[40px] h-[40px] rounded-full' src={author.img} alt="" />
                    </div>
                    <div className='ml-2'>
                        <p className='font-semibold'>{author.name}</p>
                        <span className='text-[#706F6F]'>{author.published_date}</span>

                    </div>
                </div>
                <div className='flex items-center text-lg'>
                    <p className='mr-3'><FaRegBookmark /></p>
                    <p><FaBlog /></p>
                </div>
            </div>
            <div className="card card-compact bg-base-100  shadow-xl mb-8">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='text-[#706F6F] justify-center mb-6'>
                        {
                            details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-blue-800 font-semibold ml-2 '>Reading More ..... </Link></p> :
                                <p>{details}</p>
                        }

                    </div>
                    <div className='border-t-2 flex items-center justify-between '>
                        <div className='flex items-center mt-6 text-[#706F6F]'>
                            <div>
                                <div className='flex items-center text-lg text-[#FF8C47] space-x-2'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <div className='text-lg ml-2 items-center'>{rating.number}</div>
                        </div>
                        <div className='mt-6 text-lg mb-4 text-[#706F6F]'>
                            <div className='flex items-center'>
                                <span className='text-xl mr-2'><FaEye /></span>
                                <p>{total_view}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsCard;