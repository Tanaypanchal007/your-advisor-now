"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import Logo from "../public/Images/Logos/YourAdviorNow.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <section className="w-full sticky top-28 xl:top-12 bg-primary z-999 shadow-xl">
      <nav>
        {/* ✅ Header (Logo + Menu) */}
        <div className="flex justify-between items-center py-3 px-3 xl:px-4 xl:py-0">
          {/* Logo */}
          <Image
            src={Logo}
            alt="Your Advisor Now Logo"
            className="w-44 h-auto ml-3 cursor-pointer" // Adjust size here
            priority
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-1 text-[17px]">
            <li className="hover:bg-secondary-navbar p-4 transition-all duration-300 cursor-pointer">
              <Link href="/">Home</Link>
            </li>

            {/* About Dropdown */}
            <li className="relative group hover:bg-secondary-navbar py-4 px-2  transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-1">About</div>
              <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md w-[230px]">
                <li>
                  <Link
                    href="/about/our-team"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/how-it-work"
                    className="block w-full pl-1 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    How it work?
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="relative group hover:bg-secondary-navbar py-4 px-2  transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-1">Services</div>
              <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md w-[260px]">
                <li>
                  <Link
                    href="/services/bookkeeping-service"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Bookkeeping Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accounting-service"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Accounting Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-reporting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Financial Reporting and Analytics Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business-strategy-consulting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Business Strategy Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/back-office-solutions"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Back Office Solutions & Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Industries Dropdown */}
            <li className="relative group hover:bg-secondary-navbar py-4 px-2  transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-1">Industries</div>
              <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md w-[260px]">
                <li>
                  <Link
                    href="/industries/corporate-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Corporate Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/franchise-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Franchise Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/real-estate-and-property"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Real Estate and Property
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/management-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Management Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/manufacturing-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Manufacturing Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/automotive-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Automotive Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/hospitality-and-restaurant-accounting"
                    className="block w-full pl-1 border-b border-gray-400 text-sm py-2 hover:bg-secondary-navbar"
                  >
                    Hospitality and Restaurant Accounting
                  </Link>
                </li>
              </ul>
            </li>

            <li className="hover:bg-secondary-navbar py-4 px-2 transition-all duration-300 cursor-pointer">
              <Link href="/why-us">Why Us?</Link>
            </li>
            <li className="hover:bg-secondary-navbar py-4 px-2 transition-all duration-300 cursor-pointer">
              <Link href="/facts">Facts</Link>
            </li>
            <li className="hover:bg-secondary-navbar py-4 px-2  transition-all duration-300 cursor-pointer">
              <Link href="/blogs">Blogs</Link>
            </li>
            <button className="bg-secondary text-white m-2 px-3 rounded-full">
              <Link href="/contact">Contact Us</Link>
            </button>
          </ul>

          {/* Hamburger Icon */}
          <div
            className="lg:hidden text-2xl text-secondary cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoClose className="bg-secondary text-white h-9 w-9 p-1 rounded" />
            ) : (
              <FaBars className="bg-secondary text-white h-9 w-9 p-1 rounded" />
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu (Fixed Links + Full Click Area) */}
        <div
          className={`lg:hidden overflow-hidden bg-white transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col text-gray-800 font-medium w-full px-2">
            {/* Home */}
            <li
              className="border-b border-gray-300 py-3 hover:bg-secondary-navbar cursor-pointer"
              onClick={() => {
                window.location.href = "/";
                setMenuOpen(false);
              }}
            >
              Home
            </li>

            {/* About Dropdown */}
            <li className="border-b border-gray-300">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex justify-between items-center w-full py-3 font-semibold"
              >
                <span>About</span>
                {aboutOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              <ul
                className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                  aboutOpen ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <li
                  className="py-2 border-t border-gray-200 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/about/our-team";
                    setMenuOpen(false);
                  }}
                >
                  Our Team
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/about/how-it-work";
                    setMenuOpen(false);
                  }}
                >
                  How it work?
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="border-b border-gray-300">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full py-3 font-semibold"
              >
                <span>Services</span>
                {servicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              <ul
                className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                  servicesOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/services/bookkeeping-service";
                    setMenuOpen(false);
                  }}
                >
                  Bookkeeping Service
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/services/accounting-service";
                    setMenuOpen(false);
                  }}
                >
                  Accounting Service
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/services/financial-reporting";
                    setMenuOpen(false);
                  }}
                >
                  Financial Reporting and Analytics Services
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/services/business-strategy-consulting";
                    setMenuOpen(false);
                  }}
                >
                  Business Strategy Consulting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/services/back-office-solutions";
                    setMenuOpen(false);
                  }}
                >
                  Back Office Solutions & Services
                </li>
              </ul>
            </li>

            {/* Industries Dropdown */}
            <li className="border-b border-gray-300">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex justify-between items-center w-full py-3 font-semibold"
              >
                <span>Industries</span>
                {industriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              <ul
                className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                  industriesOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/industries/corporate-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Corporate Accounting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/industries/franchise-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Franchise Accounting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/industries/real-estate-and-property";
                    setMenuOpen(false);
                  }}
                >
                  Real Estate and Property
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/industries/management-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Management Accounting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/industries/manufacturing-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Manufacturing Accounting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href = "/industries/automotive-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Automotive Accounting
                </li>
                <li
                  className="py-2 text-sm hover:bg-secondary-navbar cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/industries/hospitality-and-restaurant-accounting";
                    setMenuOpen(false);
                  }}
                >
                  Hospitality and Restaurant Accounting
                </li>
              </ul>
            </li>

            {/* Remaining Links */}
            <li
              className="border-b border-gray-300 py-3 hover:bg-secondary-navbar cursor-pointer"
              onClick={() => {
                window.location.href = "/why-us";
                setMenuOpen(false);
              }}
            >
              Why Us?
            </li>
            <li
              className="border-b border-gray-300 py-3 hover:bg-secondary-navbar cursor-pointer"
              onClick={() => {
                window.location.href = "/facts";
                setMenuOpen(false);
              }}
            >
              Facts
            </li>
            <li
              className="border-b border-gray-300 py-3 hover:bg-secondary-navbar cursor-pointer"
              onClick={() => {
                window.location.href = "/blogs";
                setMenuOpen(false);
              }}
            >
              Blogs
            </li>
            <li
              className="py-3 hover:bg-secondary-navbar cursor-pointer"
              onClick={() => {
                window.location.href = "/contact";
                setMenuOpen(false);
              }}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
