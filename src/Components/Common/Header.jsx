import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaTripadvisor } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("#home");
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className="fixed bg-status-purple-20 z-50 inset-x-0">
      <div className=" h-20 w-full shadow-md top-0 right-0 left-0 flex justify-center items-center  xl:px-[6%] ">
        <div className="container mx-auto w-full">
          <nav className="w-full h-full flex items-center justify-between">
            <Link href="#home">
              <div className="w-full flex items-center justify-between md:w-auto ">
                <FaTripadvisor className="w-6 h-6 text-black" />
                <span className="w-full text-md font-bold text-black">
                  RentARide
                </span>
              </div>
            </Link>

            {/* desktop */}
            <ul className="lg:flex items-center gap-2 hidden">
              <Link
                href="/#"
                className={`nav-link   ${active === "#home" ? "nav_link" : ""}`}
                onClick={() => setActive("#home")}
              >
                Home
              </Link>
              <Link
                href="#retaldeals"
                className={`nav-link  ${
                  active === "#retaldeals" ? "nav_link" : ""
                }`}
                onClick={() => setActive("#retaldeals")}
              >
                Retal deals
              </Link>
              <Link
                href="#whychooseus"
                className={`nav-link  ${
                  active === "#whychooseus" ? "nav_link" : ""
                }`}
                onClick={() => setActive("#whychooseus")}
              >
                Why choose us
              </Link>
              <Link
                href="#howitworks"
                className={`nav-link ${
                  active === "#howitwork" ? "nav-link" : ""
                }`}
                onClick={() => setActive("#howitworks")}
              >
                How it works
              </Link>
              <span className="flex items-center">|</span>
              <Link
                href="/"
                className="p-2 font-medium text-status-purple-100 hover:text-status-purple-100 cursor-pointer transition ease-in "
              >
                Sign up
              </Link>
              <button className="px-2 py-1 font-sm space-mono text-white bg-status-purple-90 rounded-md cursor-pointer">
                Sign in
              </button>
            </ul>
            {/* menu */}
            <div
              className="lg:hidden grid place-items-center bg-color-gray-400 text-white p-1 rounded-sm cursor-pointer"
              onClick={() => setShowSideNav(!showSideNav)}
              whiletap={{ scale: 1.1 }}
            >
              <HiOutlineSquares2X2 className="h-8 w-8" />
            </div>
          </nav>

          {/* mobile links */}
          <MobileNav
            setActive={setActive}
            active={active}
            setShowSideNav={setShowSideNav}
            showSideNav={showSideNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
