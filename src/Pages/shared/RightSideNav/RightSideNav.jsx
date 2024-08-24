import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3  rounded-t-lg mb-6">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline text-blue-800 rounded-t-lg w-full">
          <FaGoogle />
          Login With Google
        </button>

        <button className="btn btn-outline rounded-t-lg w-full">
          <FaGoogle />
          Login With Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold mb-3">Find Us On</h2>

        <a
          href="#"
          className="text-lg flex items-center border p-4 rounded-t-lg w-full"
        >
          <FaFacebook className="mr-2 text-[#3B599C] "></FaFacebook>
          <span>Facebook</span>
        </a>
        <a href="#" className="text-lg flex items-center border-x p-4  w-full">
          <FaTwitter className="mr-2 text-[#3B599C] "></FaTwitter>
          <span>Twitter</span>
        </a>

        <a
          href="#"
          className="text-lg flex items-center border p-4 rounded-b-lg w-full"
        >
          <FaInstagram className="mr-2 text-[#D82D7E] "></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      <div className="p-4 space-y-3  rounded-t-lg mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl font-semibold">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
