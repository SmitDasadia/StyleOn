/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#111]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font  items-center md:justify-start justify-center text-white">
            <h2  className="h-8 text-4xl w-auto">StyleOn</h2>
            </a>
            <p className="mt-2 text-sm text-white">Wear High Quality Cloths!</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" font-semiblod text-white tracking-widest text-sm mb-3 font-bold ">Categories</h2>
              <nav className="list-none mb-10">
                <Link href={'/tshirts'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Tshirts</li></a>
                </Link>
                <Link href={'/shorts'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Shorts</li></a>
                </Link>
                <Link href={'/sportswear'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Sportswear</li></a>
                </Link>
                <Link href={'/ethnix'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Ethnix</li></a>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold">Policies</h2>
              <nav className="list-none mb-10">
                <Link href={'/privacy'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Privacy Policy</li></a>
                </Link>
               
                <Link href={'/refund'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Refund Policy</li></a>
                </Link>
                <Link href={'/termofservice'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Terms of Service</li></a>
                </Link>
                <Link href={'/termofservice'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Cookies & Usage</li></a>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold">Support</h2>
              <nav className="list-none mb-10">
                <Link href={'/privacy'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>T-Shirt Guide</li></a>
                </Link>
                <Link href={'/shipping'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Customer Services</li></a>
                </Link>
                <Link href={'/refund'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Return & Exchanges</li></a>
                </Link>
                
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold">Company Info</h2>
              <nav className="list-none mb-10">
                <Link href={'/about'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>About Us</li></a>
                </Link>
                <Link href={'/contact'} legacyBehavior>
                  <a className="text-gray-600 hover:text-white"><li>Contact Us</li></a>
                </Link>
              </nav>
            </div>
            
          </div>
        </div>
        <div className="bg-[#111]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2023 Style.com — All Right Recevied
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer