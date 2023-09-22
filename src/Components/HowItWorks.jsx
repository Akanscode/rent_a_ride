import React from "react";
import { logo, steps } from "./Data";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-white w-full ">
      <div className="container mx-auto w-full">
        <div className="relative py-16 lg:py-20">
          <div className=" -mt-28 overflow-hidden bg-white rounded-lg shadow-lg w-full ">
            <div className="  md:px-24 py-10 ">
              <form>
                <div className="flex items-center justify-between  md:space-x-10 flex-col md:flex-row ">
                  <div className="flex-1">
                    <label className="block mb-2 font-bold text-grey-100 uppercase">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="search your location"
                      className="block w-full px-2 py-3 mt-1 placeholder-grey-50 bg-white border border-grey-30 rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block mb-2 font-bold text-grey-100">
                      PICKUP DATE
                    </label>

                    <input
                      type="text"
                      placeholder="select date"
                      className="block w-full px-2 py-3 mt-1 placeholder-grey-50 bg-white border border-grey-30 rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 font-bold text-grey-100">
                      RETURN DATE
                    </label>

                    <input
                      type="text"
                      placeholder="select date"
                      className="block w-full px-2 py-3 mt-1 placeholder-grey-50 bg-white border border-grey-30 rounded-md focus:outline-none"
                    />
                  </div>
                  <button className="px-4 py-3 mt-8 bg-status-purple-90 text-white rounded-md">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*================== logo=============*/}
          <div className="mt-4 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-items-center gap-6 mx-auto">
            {logo.map((val, id)=>(
              <div className="p-2" key={id}>
              <Image
                            src={val.cover}
                            className=" object-cover"
                            alt={val.title}
                            width={50}
                            height={50}
                          />
              </div>
            ))}

            </div>
          </div>

          {/*==========how it works==========*/}
          <div className="mt-6">
            <div className="mx-auto  lg:-w-xl text-center">
            <p className="inline-block px-3 py-2 mb-4 text-md font-semibold tracking-wider text-status-purple-100 uppercase rounded-full bg-grey-50 space-mono">
              how it works
            </p>
            <h4 className="font-bold text-md text-status-purple-100 tracking-wider  ">
              Rent a car with the 3 following steps
            </h4>
            </div>

            <div className="flex flex-wrap  justify-center sm:-m-4 -mx-4 -mb-10 pt-8 md:space-y-0 space-y-6">
            {steps.map((val, id)=>((
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center" key={id}>
                <div className="w-20 h-20 flex items-center justify-center rounded-md bg-white shadow-lg shadow-status-purple-40 text-status-purple-100 mb-5 flex-shrink-0">
                 <div> {val.cover}</div>
                </div>
                <div className="flex-grow ">
                  <h5 className="text-grey-80 text-[0.98rem] font-medium mb-3">{val.title}</h5>
                  <p className=" text-[0.70rem] text-grey-50">{val.text}</p>
                </div>
              </div>
            )))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
