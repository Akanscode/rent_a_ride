import React from "react";
import Link from "next/link";
import { HiOutlineXMark } from "react-icons/hi2";

const MobileNav = ({ setActive, active, showSideNav, setShowSideNav }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-[rgba(0,0,0,0.5)] opacity-100 z-20 duration-300 ease-in lg:hidden ${
        showSideNav
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div className="bg-grey-10 w-full h-screen max-w-md absolute top-0 right-0 grid place-items-center">
        <ul className="flex flex-col gap-4 items-center">
          <Link
            href="#home"
            className={`nav-link   ${active === "#home" ? "nav_link" : ""}`}
            onClick={() => {
              setActive("#home");
              setShowSideNav(!showSideNav);
            }}
          >
            Home
          </Link>
          <Link
            href="#retaldeals"
            className={`nav-link  ${
              active === "#retaldeals" ? "nav_link" : ""
            }`}
            onClick={() => {
              setActive("#retaldeals");
              setShowSideNav(!showSideNav);
            }}
          >
            Retal deals
          </Link>
          <Link
            href="#whychooseus"
            className={`nav-link  ${
              active === "#whychooseus" ? "nav_link" : ""
            }`}
            onClick={() => {
              setActive("#whychooseus");
              setShowSideNav(!showSideNav);
            }}
          >
            why choose us
          </Link>
          <Link
            href="#howitworks"
            className={`nav-link  ${
              active === "#howitworks" ? "nav_link" : ""
            }`}
            onClick={() => {
              setActive("#howitworks");
              setShowSideNav(!showSideNav);
            }}
          >
            How it works
          </Link>
          <div className="flex flex-col items-center space-y-6 py-10">
            <button
              href="/"
              className="px-6 py-2 font-medium space-mono text-white bg-status-purple-90 rounded-md cursor-pointer"
            >
              Sign up
            </button>
            <button className="px-6 py-2 font-medium space-mono text-white bg-status-purple-90 rounded-md cursor-pointer">
              Sign in
            </button>
          </div>
        </ul>

        {/* close btn */}
        <div
          className="absolute top-4 right-4 text-grey-80 cursor-pointer"
          onClick={() => setShowSideNav(!showSideNav)}
          whiletap={{ rotate: 360 }}
        >
          <HiOutlineXMark className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
