"use client";

import StartingHeaderImage from "../../components/StartingHeaderImage";
import React from "react";
import Image from "next/image";
import contactUs from "../../public/Images/contact-us.jpg";
import contactImage from "../../public/Images/illustration/Contact us-bro.svg";

const Contact = () => {
  return (
    <>
      <StartingHeaderImage title="Contact Us" imageSrc={contactUs} />

      {/* Main Container Centered Horizontally + Vertically */}
      <section className="min-h-screen flex justify-center items-center bg-primary px-4 py-10">
        {/* Inner wrapper */}
        <div className="w-full max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-10  p-8 rounded-xl ">
          {/* Left: Form */}
          <form className="w-full space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-button py-2 px-2 rounded outline-none focus:border-2 focus:border-black/40"
            />

            <div className="flex flex-col xl:flex-row gap-3">
              <input
                type="text"
                placeholder="Company Name*"
                className="w-full border border-button py-2 px-2 rounded outline-none focus:border-2 focus:border-black/40"
              />
              <select
                className="w-full border border-button py-2 px-2 rounded  text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Service Type*
                </option>
                <option value="bookkeeping">Bookkeeping Service</option>
                <option value="accounting">Accounting Service</option>
                <option value="financial-reporting">
                  Financial Reporting & Analytics
                </option>
                <option value="business-strategy">
                  Business Strategy Consulting
                </option>
                <option value="back-office">Back Office Solutions</option>
                <option value="tax-preparation">Tax Preparation</option>
                <option value="payroll">Payroll Services</option>
              </select>
            </div>

            <div className="flex flex-col xl:flex-row gap-3">
              <input
                type="number"
                placeholder="Phone Number*"
                className="w-full border border-button py-2 px-2 rounded outline-none focus:border-2 focus:border-black/40"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-button py-2 px-2 rounded outline-none focus:border-2 focus:border-black/40"
              />
            </div>

            <textarea
              className="border border-button p-2 w-full h-40 rounded outline-none focus:border-2 focus:border-black/40"
              placeholder="Write your message..."
            ></textarea>

            <button className="bg-button text-white w-full xl:w-auto py-2 px-6 rounded font-semibold cursor-pointer">
              Send Message
            </button>
          </form>

          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <Image
              src={contactImage}
              width={100}
              height={100}
              alt="Contact Illustration"
              className="w-[80%] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
