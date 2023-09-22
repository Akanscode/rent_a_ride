import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 z-10 w-full transition-all ease-in">
      <div className="container mx-auto w-full">
        <div className="flex  items-center justify-between w-full py-6 md:py-4 absolute">
          <div className="w-full flex items-center justify-between md:w-auto ">
            <FaTripadvisor className="w-6 h-6 text-black" />
            <span className="w-full text-md font-bold text-black">
              RentARide
            </span>
          </div>

          <nav className=" hidden lg:flex  h-0 lg:h-auto overflow-hidden  lg:pt-0 w-auto md:space-y-0 lh:p-0 md:bg-transparent lg:w-auto transition-all duration-300">
            <div className="w-full p-6 lg:p-2 bg-grey-100 bg-opacity-95 backdrop-blur-xl lg:items-center flex flex-col lg:flex-row lg:bg-transparent transition-all ease-in">
              <Link href="/" className="nav-link ">
                Home
              </Link>
              <Link href="/" className="nav-link ">
                Rental deals
              </Link>
              <Link href="/" className="nav-link">
                Why choose us
              </Link>
              <Link href="/" className="nav-link">
                How it works
              </Link>{" "}
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
            </div>
          </nav>

          {/**=======mobile menu ======== */}
          <div className="flex lg:hidden" onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div className="">
            <nav
              className={
                nav
                  ? "fixed left-0 top-0 flex flex-col items-center pt-5 w-[50%] h-full border-r border-r-slate-800 bg-[#000300] ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed left-[-100%] "
              }
            >
              <Link href="/" className="nav-link ">
                Home
              </Link>
              <Link href="/" className="nav-link ">
                Rental deals
              </Link>
              <Link href="/" className="nav-link">
                Why choose us
              </Link>
              <Link href="/" className="nav-link">
                How it works
              </Link>{" "}
              <div className="flex flex-col items-center space-y-6 py-10">
                <buttn
                  href="/"
                  className="px-6 py-2 font-medium space-mono text-white bg-status-purple-90 rounded-md cursor-pointer"
                >
                  Sign up
                </buttn>
                <button className="px-6 py-2 font-medium space-mono text-white bg-status-purple-90 rounded-md cursor-pointer">
                  Sign in
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
