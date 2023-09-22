import React from 'react'
import { populardeal } from './Data';
import {FaStar} from "react-icons/fa"
import Image from 'next/image';



const RentalDeal = () => {
  return (
     <div className="bg-white w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20">
          <div className="mx-auto mb-10 lg:-w-xl text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-grey-20 uppercase rounded-full bg-status-purple-60 space-mono">
             POPULAR RENTAL DEAL
            </p>
            <h4 className="font-bold text-md text-grey-90 tracking-wider capitalize  ">
              The rental deals people choice
            </h4>
            
          </div>
          <div className="flex flex-col lg:flex-row  space-x-2">
            {populardeal.map((val, id) => (
              <div
                key={id}
                className="relative w-full bg-white mb-6 shadow-lg rounded-xl mt-16"
              >
                <div className="px-px mx-auto">
                  <div className=" mx-4 -mt-6">
                   
                      <Image
                        className="object-cover object-center w-full h-36"
                        src={val.coverImage}
                        alt="card-image"
                        width={100}
                        height={80}
                      />
                   
                  </div>
                  <div className=" md:p-2 mt-5 ">
                      <div className="flex items-center space-x-px md:space-x-2">
                        <FaStar className="w-4 h-3 text-yellow-400" />
                        <span className=" text-[0.70rem] font-bold text-grey-50 uppercase tracking-wider">
                          {val.rate}
                        </span>
                      </div>
                  
                      <h5 className="  mt-2">{val.carname}</h5>
                            <div className='flex flex-row  flex-wrap justify-between p-2'>
                                <span className='text-grey-50 text-xs '>{val.totalpassenger }</span>
                                <span className='text-grey-50 text-xs '>{val.automaticText }</span>
                                 
                            </div>
                            <div className='flex flex-row justify-between p-2'>
                                <span className='text-grey-50 text-xs '>{val.airconditontext}</span>
                                <span className='text-grey-50 text-xs  '>{val.totaldoortext}</span>
                                
                            </div>
                            <hr className='p-2'/>
                            <div className="flex  justify-between">
                                <span className="text-grey-40 mr-3 md:ml-0 text-sm pr-3 py-1 ">
                                    {val.priceperrent}
                                </span>
                                <button className="inline-flex items-center text-xs font-bold text-status-purple-80  hover:transition hover:delay-150 hover:ease-in-out">
                                    Rent Now
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
                  </div>
                  <div className='flex items-center justify-center'>
                       <button className="inline-flex items-center text-xs py-4 px-4 font-bold text-status-purple-80 rounded-full border-2 border-grey-50 shadow-md  hover:transition hover:delay-150 hover:ease-in-out">
                          Sell All Vehicles
                          <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                          </span>
                        </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default RentalDeal
