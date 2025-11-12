import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const TopNavbar = () => {
  return (
    <section className="bg-secondary py-3 pl-4 text-white sticky top-0 z-999">
      <div className="flex gap-2 xl:gap-4 flex-col xl:flex-row justify-center items-center xl:justify-normal">
        <div className="flex gap-2 items-center ">
          <FiPhoneCall />
          <p>+91 1234567890</p>
        </div>{" "}
        <span className="text-white/50 hidden xl:block"> |</span>
        <div className="flex gap-2 items-center">
          <IoMailOpenOutline />
          <p>info@randomemail.com</p>
        </div>
        <span className="text-white/50 hidden xl:block"> |</span>
        <div className="flex gap-2 items-center">
          <CiLocationOn />
          <p>UK | USA | AUS</p>
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;
