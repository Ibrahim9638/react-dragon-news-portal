import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { FaBusinessTime } from "react-icons/fa";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">All Caterogy</h2>
      {category.map((singleCategory) => (
        <NavLink
          className="block px-4 text-lg text-[#9F9F9F]"
          to={`/category/${category.id}`}
          key={setCategory.id}
        >
          {singleCategory.name}
        </NavLink>
      ))}
      <div>
        <div className="mr-2 space-y-3 mb-6">
          <img className="w-[90%]" src={image1} alt="" />
          <h2 className="font-semibold align-middle">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex items-center text-sm">
            <p>Sports</p>
            <span className="text-[#9F9F9F] ml-4 mr-2">
              <FaBusinessTime />
            </span>
            <span className="text-[#9F9F9F]">
              {moment().format("MMM DD YYYY")}
            </span>
          </div>
        </div>
        <div className="mr-2 space-y-3 mb-6">
          <img className="w-[90%]" src={image2} alt="" />
          <h2 className="font-semibold align-middle">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex items-center text-sm">
            <p>Sports</p>
            <span className="text-[#9F9F9F] ml-4 mr-2">
              <FaBusinessTime />
            </span>
            <span className="text-[#9F9F9F]">
              {moment().format("MMM DD YYYY")}
            </span>
          </div>
        </div>
        <div className="mr-2 space-y-3">
          <img className="w-[90%]" src={image3} alt="" />
          <h2 className="font-semibold align-middle">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex items-center text-sm">
            <p>Sports</p>
            <span className="text-[#9F9F9F] ml-4 mr-2">
              <FaBusinessTime />
            </span>
            <span className="text-[#9F9F9F]">
              {moment().format("MMM DD YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
