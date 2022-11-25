/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
// import { BsHandbag, BsTruck } from 'react-icons/Bs';
// import { MdDeleteOutline } from 'react-icons/Md';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/Io';
// import { RiSecurePaymentLine } from 'react-icons/Ri';


const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, removeItemFromCart }) => {
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
    <div>
      <section className="pt-12 pb-24 bg-blueGray-100 overflow-hidden">
        <div className="container px-4 mx-auto">

          <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
            <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-medium text-center">CheckOut</h2>
          </div>
          <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24">
            <div className="w-full md:w-8/12 lg:w-3/4 px-4 mb-14 md:mb-0">
              <div className="py-20 px-8 md:px-16 bg-white rounded-3xl">
                <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                  <div className="max-w-lg mx-auto">
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='name' className="text-lg text-darkBlueGray-400">Your name:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" id='name' name='name' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='email' className="text-lg text-darkBlueGray-400">Email:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="email" id='email' name='email' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='phoneNumber' className="text-lg text-darkBlueGray-400">Phone Number:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="phoneNumber" id='phoneNumber' name='phoneNumber' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='address' className="text-lg text-darkBlueGray-400">Address :</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <textarea className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="address" id='address' name='address' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='city' className="text-lg text-darkBlueGray-400">City:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="city" id='city' name='city' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='state' className="text-lg text-darkBlueGray-400">State:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="state" id='state' name='state' />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='country' className="text-lg text-darkBlueGray-400">Country:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="country" id='country' name='country' />
                      </div>
                    </div>

                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label htmlFor='pincode' className="text-lg text-darkBlueGray-400">PinCode:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" />
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
            <div className="w-full md:w-1/12 lg:w-1/4 px-4">
              <div>
                <h2 className="mb-7 lg:mt-6 text-3xl font-heading font-medium">Order summary</h2>
                <div className="sidebar bg-slate-100 p-2 w-[45vh] ">
                  {Object.keys(cart).map((k) => {
                    return <><div key={k} className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={cart[k].img} className="h-full w-full  object-center" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-black-900">
                                  <h3>
                                    <p className='font-blod'>{cart[k].name}</p>
                                    <p className="text-blue-500">₹{cart[k].price}</p>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm ">{cart[k].variant}/{cart[k].size}</p>
                              </div>
                              <div className="flex flex-1 items-center justify-between text-sm">
                                <IoMdRemove className='cursor-pointer' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /><p>Qty:{cart[k].qty}</p><IoMdAdd className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} />

                                
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div><div className="border-t border-gray-200 py-6 px-4 sm:px-6 m-4">
                        <div className="mt-6">
                          <div className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-900" >SubTotal <span className="mr-2 text-base"></span>₹{subTotal}</div>
                        </div>
                        <div className="mt-6">
                          <div className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-900" >Shipping <span className="mr-2 text-base"></span>₹0.00</div>
                        </div>

                        <div className="mt-6">
                          <div className="flex items-center justify-center rounded-md border border-transparent text-blue-500 bg-black px-6 py-3 text-xl font-medium shadow-sm hover:bg-slate-900">Total
                            <span className="flex items-center text-xl text-blue-500">
                              <span className="mr-2 text-base"></span>
                              <span>₹{subTotal}</span>
                            </span>
                          </div>
                        </div>


                      </div></>
                  })}



                </div>

                <div className="mt-6">
                  <Link href={'/order'} legacyBehavior><button className="inline-block w-full py-5 lg:py-3 px-10 text-lg leading-6 lg:leading-7 text-white font-medium tracking-tighter font-heading text-center bg-black hover:bg-green-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"><a ><span className="mr-2 text-base"></span>
                    <span>Pay ₹{subTotal}</span></a></button></Link>
                </div>



                {/* <h4 className="mb-4 text-3xl font-heading font-medium">Discount code</h4>
                <label className="block mb-3 text-lg text-darkBlueGray-400">Apply code:</label>
                <div className="relative mb-3 lg:mb-10">
                  <input className="flex-grow outline-none px-5 pr-36 py-4 w-full leading-7 bg-white border-2 border-blue-500 rounded-3xl" 
                  type="text"/>
                    <a className="absolute top-1/2 transform -translate-y-1/2 right-1 -translate-x-px w-auto xl:w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Apply</a>
                </div> */}

              </div>
            </div>
          </div>
         </div>
      </section >
    </div >


  )
}

export default Checkout