import React from 'react'
import { testimoninal } from './Data'

const Testimony = () => {
  return (
      <div className='bg-white w-full'>
          <div className=' container mx-auto w-full'>
              <div className='relative py-16 md:py-20 '>
                  <div className="mx-auto mb-10 lg:-w-xl text-center">
                      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-grey-20 uppercase rounded-full bg-status-purple-60 space-mono">
                          TESTIMONIALS
                      </p>
                      <h4 className="font-bold text-md text-grey-90 tracking-wider capitalize  ">
                          What do our customers say about us?
                      </h4>
                  </div>
                  <div className='grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2'>
                      {testimoninal.map((testimony, id) => (
                          <div key={id} className='flex flex-col items-center mx-12 lg:mx-0'>
                              <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
				                <p className="px-6 py-1 text-lg italic">{testimony.text}.</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                              </div>
                              <span className="w-12 h-1 my-2 rounded-lg bg-status-purple-70"></span>
                              <p>{testimony.testimoninalname }</p>
                          </div>
                      )) }
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Testimony