import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-blue-950 ">
      <div className="container mx-auto px-36 grid grid-cols-2 gap-4">
        <div className="  -skew-x-40 bg-orange-500  h-12 grid grid-cols-2 justify-items-center content-center ">
          <div className=" flex items-center">
            <IoIosMail className="skew-x-40 text-white text-xl mr-2"/>
            <p className=" text-white skew-x-40">carlous27@yahoo.com</p>
          </div>
          <div className=" flex items-center ">
            <FaPhoneAlt className="skew-x-40 text-white mr-2 "/>
            <p className=" text-white skew-x-40 ">+23490933886885</p>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="mr-3">
            <FaFacebook className="text-orange-500 hover:text-white text-2xl" />
          </button>
          <button className="mr-3">
            <FaTwitter className="text-orange-500  hover:text-white text-2xl" />
          </button>{" "}
          <button className="mr-3">
            <FaLinkedin className="text-orange-500 hover:text-white text-2xl" />
          </button>{" "}
          <button className="mr-3">
            <FaInstagram className="text-orange-500   hover:text-white text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
