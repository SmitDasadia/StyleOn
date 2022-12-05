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
import { MdDeleteOutline } from 'react-icons/Md';




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

    }

    return (

        <div class="container p-12 mx-auto">
            <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
                <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-medium text-center">CheckOut</h2>
            </div>
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">

                <div class="flex flex-col md:w-full">

                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form class="justify-center w-full mx-auto" method="post" action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label htmlFor='name' class="block mb-3 text-sm font-semibold text-gray-500">Your Name</label>
                                    <input placeholder="First Name" type="text" id='name' name='name'
                                        class="w-full px-4 py-3 text-sm  bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>


                                <div class="w-full lg:w-1/2 ">
                                    <label htmlFor='phonenumber' class="block mb-3 text-sm font-semibold text-gray-500">Phone Number</label>
                                    <input type="text" id='phonenumber' name='phonenumber' placeholder="Phone Number"
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label htmlFor='email'
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input type="text" id='email' name='email' placeholder="Email"
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label htmlFor='address'
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        class="w-full px-4 py-3 text-xs lg:text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                        type="text" id='address' name='address' cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>

                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label htmlFor='city'
                                        class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input type="text" id='city' name='city' placeholder="City"
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                                <div class="w-full lg:w-1/2">
                                    <label htmlFor='state'
                                        class="block mb-3 text-sm font-semibold text-gray-500">State</label>
                                    <input name="state" type="text" id='state' placeholder="State"
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                            </div>

                            <div class="space-x-0 lg:flex lg:space-x-4 pt-1">
                                <div class="w-full lg:w-1/2">
                                    <label htmlFor='country'
                                        class="block mb-3 text-sm font-semibold text-gray-500">Country</label>
                                    <input name="country" type="text" placeholder="City" id='country'
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label htmlFor='pincode'
                                        class="block mb-3 text-sm font-semibold text-gray-500">Pincode</label>
                                    <input name="pincode" type="text" placeholder="City" id='pincode'
                                        class="w-full px-4 py-3 text-sm bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" />
                                </div>
                            </div>


                            
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold">Order Summary
                        </h2>
                        {Object.keys(cart).map((k) => {
                            return <>
                                <div key={k} class="mt-8">
                                    <div class="flex flex-col space-y-4">
                                        <div class="flex space-x-4">
                                            <div>
                                                <img src={cart[k].img} alt="image"
                                                    class="w-20 h-20" />
                                            </div>
                                            <div>
                                                <h2 class="text-sm font-bold">{cart[k].name}</h2>
                                                <p class="text-sm">{cart[k].size}/{cart[k].variant}</p>
                                                <span class="text-blue-600">{cart[k].price}</span>
                                            </div>
                                            <div className='flex font-semibold items-center justify-centerw-1/3 pt-5'>
                                                <IoMdRemove onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                                                <p>{cart[k].qty}</p><IoMdAdd onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                                            </div>

                                            <div className="flex pt-5">
                                                <button type="button" className="font-medium   hover:text-slate-800" onClick={() => { removeItemFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }}><MdDeleteOutline /></button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </>
                        })}
                        {/* 
                    <h4 className="mb-4 text-3xl font-heading font-medium">Discount code</h4>
                    <label className="block mb-3 text-lg text-darkBlueGray-400">Apply code:</label>
                    <div className="relative mb-3 lg:mb-10">
                      <input className="flex-grow outline-none px-5 pr-36 py-4 w-full leading-7 bg-white border-2 border-blue-500 rounded-3xl" 
                      type="text"/>
                        <a className="absolute top-1/2 transform -translate-y-1/2 right-1 -translate-x-px w-auto xl:w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Apply</a>
                    </div> */}

                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6 m-4">
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

                            <div className="mt-6">
                                <Link href={'/order'} legacyBehavior>
                                    <a><button className="w-full rounded-md border border-transparent bg-green-600 px-6 py-3 text-sm font-medium text-black shadow-sm hover:bg-green-400" >Pay<span className="mr-2 text-base"></span>₹{subTotal}</button></a>
                                </Link>
                            </div>




                        </div>



                    </div>
                </div>


            </div>
        </div>


    )
}

export default Checkout