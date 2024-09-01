import React, { useContext, useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const News = () => {
  const [newsDetails, setNewsDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredNews = data.find((news) => news._id === id);
        setNewsDetails(filteredNews);
      });
  }, []);

  console.log(newsDetails);

  return (
    <div>
      <Header></Header>
      <div className="grid  md:grid grid-cols-4 mt-4">
        <div className="col-span-3">
          <h2 className="text-xl mb-4 ">News Details</h2>
          <div className="card card-compact bg-base-100 border  shadow-xl">
            <figure>
              <img
              className="w-[97%] mx-auto mt-2"
                src={newsDetails.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{newsDetails.title}</h2>
              <p>{newsDetails.details}</p>
              <div className="card-actions justify-start mt-4">
                <Link to='/'>
                <button className="btn btn-sm btn-secondary"><FaArrowLeft /> All News in this Category</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
