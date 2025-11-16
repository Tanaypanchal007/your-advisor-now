import React from "react";
import Link from "next/link";
import footerImg from "../public/Images/footer-img.jpg";

const Footer = () => {
  return (
    <footer className="relative text-white pt-10 mt-10 overflow-hidden z-998">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/footer-img.jpg')",
          opacity: 0.2,
        }}
      ></div>

      {/* Dark Overlay (optional for more contrast) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col xl:flex-row gap-10 xl:gap-20 px-8 xl:px-20">
        {/* Left Logo Section */}
        <div>
          <h1 className="text-secondary text-4xl xl:text-5xl font-bold">
            Your Advisor Now
          </h1>
          <p className="text-gray-300 mt-2 max-w-sm">
            Trusted advisory services to help your business grow and stay
            compliant with industry standards.
          </p>
        </div>

        {/* Services Menu */}
        <div>
          <h1 className="text-xl font-semibold mb-3">Services</h1>
          <ul className="ml-3 flex flex-col gap-2">
            <li>
              <Link href="/services/bookkeeping-service">
                Bookkeeping Service
              </Link>
            </li>
            <li>
              <Link href="/services/accounting-service">
                Accounting Service
              </Link>
            </li>
            <li>
              <Link href="/services/financial-reporting">
                Financial Reporting & Analytics
              </Link>
            </li>
            <li>
              <Link href="/services/business-strategy-consulting">
                Business Strategy Consulting
              </Link>
            </li>
            <li>
              <Link href="/services/back-office-solutions">
                Back Office Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries Menu */}
        <div>
          <h1 className="text-xl font-semibold mb-3">Industries</h1>
          <ul className="ml-3 flex flex-col gap-2">
            <li>
              <Link href="/industries/corporate-accounting">
                Corporate Accounting
              </Link>
            </li>
            <li>
              <Link href="/industries/franchise-accounting">
                Franchise Accounting
              </Link>
            </li>
            <li>
              <Link href="/industries/real-estate-and-property">
                Real Estate & Property
              </Link>
            </li>
            <li>
              <Link href="/industries/management-accounting">
                Management Accounting
              </Link>
            </li>
            <li>
              <Link href="/industries/manufacturing-accounting">
                Manufacturing Accounting
              </Link>
            </li>
            <li>
              <Link href="/industries/automotive-accounting">
                Automotive Accounting
              </Link>
            </li>
            <li>
              <Link href="/industries/hospitality-and-restaurant-accounting">
                Hospitality & Restaurant
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 mt-10 text-center bg-secondary/70 text-gray-300 text-sm border-t border-gray-500/30 py-4">
        © 2025 Your Advisor Now. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
