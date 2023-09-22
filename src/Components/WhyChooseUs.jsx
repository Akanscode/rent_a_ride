import React from 'react'
import Image from 'next/image'
import { whychooseus } from './Data'

const WhyChooseUs = () => {
  return (
  <section className="bg-pink-100/60 w-full">
          <div className="container w-full mx-auto">
              <div> 
                  <div className="grid  lg:gap-8 lg:grid-cols-2 items-center">
                      <div className="mt-6 lg:col-start-1 lg:row-start-1">
					<Image src="/assets/carImage1.png" width={600} height={400} alt="carimage" className="mx-auto rounded-full shadow-lg " />
				</div>
				<div className="lg:col-start-2">
					<h3 className="text-2xl text-status-purple-80 font-bold tracking sm:text-3xl pt-5"> Why Choose Us</h3>
					<p className="text-lg">Experience excellence with our rental deal.</p>
                          <div className="mt-4 space-y-2">
                              {whychooseus.map((val, id) => (
                                  <div className='flex' key={id}>
                                      <div className="flex-shrink-0">
                                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                              {val.icon}
                                          </div>
                                      </div>
                                      <div className="ml-4 ">
                                          <h4 className="text-lg font-medium text-grey-100 capitalize ">{val.title }</h4>
                                          <p className="mt-2 text-status-purple-50 font-sm">{ val.text}</p>
                                      </div>
                                  </div>
                              ))}	
						</div>
					</div>
                  </div>
              </div>
          </div>
      </section>
      
    
  )
}

export default WhyChooseUs
