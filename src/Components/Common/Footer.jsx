import React from 'react'
import { FaXTwitter, FaSquareInstagram, FaFacebookF,FaPhone } from "react-icons/fa6"
import {FaTripadvisor} from "react-icons/fa"

import Link from 'next/link'

const Footer = () => {
  return (
      <div className=" bg-status-purple-80 w-full ">
          <div className=' container mx-auto w-full'>
              <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                  <div className="lg:w-1/3">
                      <Link href="" className='flex justify-center space-x-3 lg:justify-start'>
                          <div className="w-full flex items-center justify-between md:w-auto ">
                              <FaTripadvisor className="w-6 h-6 text-black" />
                              <span className="w-full text-md font-bold text-black">
                                  RentARide
                              </span>
                          </div>
                      </Link>
                      <p className='pt-2 text-grey-50'>Alule Bus Stop, Ibadan,Nigeria</p>
                      <div className='inline-flex items-center space-x-4'>
                          <FaPhone className="text-grey-50" />
                          <span className='text-grey-50'>+2349056789432</span>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                      <div className="space-y-3">
                          <h3 className=" capitalize text-sm text-grey-50">Our Services</h3>
                          <ul className="space-y-1">
                              <li>
                                  <Link href="#">cars</Link>
                              </li>
                              <li>
                                  <Link href="#">Career</Link>
                              </li>
                              <li>
                                  <Link href="#">Packages</Link>
                              </li>
                              <li>
                                  <Link href="#">Price</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="space-y-3">
                          <h3 className=" capitalize text-sm text-grey-50">Support</h3>
                          <ul className="space-y-1">
                              <li>
                                  <Link href="#">Dowmload</Link>
                              </li>
                              <li>
                                  <Link href="#">Help Center</Link>
                              </li>
                              <li>
                                  <Link href="#">Partner with us</Link>
                              </li>
                              <li>
                                  <Link href="#">FAQs</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="space-y-3">
                          <h3 className="capitalize text-sm text-grey-50">About RentARide</h3>
                          <ul className="space-y-1">
                              <li>
                                  <Link href="#">Our Story</Link>
                              </li>
                              <li>
                                  <Link href="#">Why Chooose Us</Link>
                              </li>
                              <li>
                                  <Link href="#">Adevertise</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="space-y-3">
                          <div className="capitalize text-sm text-grey-50">Social media</div>
                          <div className="flex justify-start space-x-3">
                              <Link href="#" title="Facebook" className="flex items-center p-1">
                                  <FaFacebookF className="w-5 h-5 text-grey-50" />
                              </Link>
                              <Link href="#" title="Twitter" className="flex items-center p-1">
                                  <FaXTwitter className="w-5 h-5 text-grey-50" />
                              </Link>
                              <Link href="#" title="Instagram" className="flex items-center p-1">
                                  <FaSquareInstagram className="w-5 h-5 text-grey-50" />
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="py-6 text-sm text-center"> All rights reserved.</div>
      </div>        
  )
}
export default Footer;