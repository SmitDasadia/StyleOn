/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { BsHandbag } from 'react-icons/Bs';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/Io';
import { CiDeliveryTruck } from 'react-icons/Ci';


const Navbar = () => {
  const ref = useRef()
  const toogleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
    console.log("cart")
  }

  return (
    <>

      <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky'>
        <div className="logo mx-5">
          <Link href="/" legacyBehavior>
            <a><Image src="/" alt="logo" width={200} height={40} /></a>
          </Link>
        </div>
        <div className="nav ">
          <ul className='flex items-center space-x-8 font-bold md:text-md'>
            <Link href="/tshirts" legacyBehavior>
              <a><li>Tshirts</li></a>
            </Link>
            <Link href="/shorts" legacyBehavior>
              <a><li>Shorts</li></a>
            </Link>
            <Link href="/sportswear" legacyBehavior>
              <a><li>SportsWear</li></a>
            </Link>
            <Link href="/combo" legacyBehavior>
              <a><li>Combo</li></a>
            </Link>
          </ul >
        </div >
        <div onClick={toogleCart} className="w-90 cart absolute right-2 mx-5 top-4 cursor-pointer">
          <button><BsHandbag className='text-xl md:text-2xl' /></button>
        </div>
        <div ref={ref} className="sidebar absolute top-0 right-0 bg-pink-400 p-10 transform transition-transform translate-x-full">
          <h2 className='font-bold text-xl text-center'>Your Bag</h2>
          <span className='text-xl md:text-2xl items-center'><CiDeliveryTruck /></span>
          <h2 className='text-center'>Free Shipping & Free Returns!</h2>
          <span onClick={toogleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><IoMdClose /></span>
          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li class="flex py-6">
                  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://m.media-amazon.com/images/I/61WM3Hvg+UL._UY741_.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-black-900">
                        <h3>
                          <a href="#">Messi PSG Home Football Jersey</a>
                        </h3>
                        <p class="ml-4">₹499.00</p>
                      </div>
                      <p class="mt-1 text-sm ">Blue</p>
                    </div>
                    <div class="flex flex-1 items-center justify-between text-sm">
                      <IoMdRemove /><p>Qty 1</p><IoMdAdd />

                      <div class="flex">
                        <button type="button" class="font-medium  hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="flex py-6">
                  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://m.media-amazon.com/images/I/61WM3Hvg+UL._UY741_.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-black-900">
                        <h3>
                          <a href="#">Messi PSG Home Football Jersey</a>
                        </h3>
                        <p class="ml-4">₹499.00</p>
                      </div>
                      <p class="mt-1 text-sm ">Blue</p>
                    </div>
                    <div class="flex flex-1 items-center justify-between text-sm">
                      <IoMdRemove /><p>Qty 1</p><IoMdAdd />

                      <div class="flex">
                        <button type="button" class="font-medium  hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-200 py-6 px-4 sm:px-6 m-4">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

            <div class="mt-6">
              <a href='#' class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-indigo-700">Clear Bag</a>
            </div>
            <div class="mt-6">
              <a href='#' class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            </div>


          </div>
        </div>
      </div>

    </>

  )
}

export default Navbar