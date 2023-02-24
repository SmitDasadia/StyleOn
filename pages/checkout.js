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


import { FiUserCheck, FiUser, FiShoppingBag, FiMenu, FiTrash2,FiX, FiMinus,FiPlus } from 'react-icons/Fi';




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

        <div className="container p-12 mx-auto ">
            <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
                <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-bold text-center">CheckOut</h2>
            </div>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-col">

                <div className="flex flex-col w-full">

                    <h2 className="mb-4 font-bold md:text-xl text-heading text-center py-10">1. Shipping Address
                    </h2>

                    <form className="justify-center w-full mx-auto " method="post" action='true'>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='name' className="block mb-3 text-sm font-semibold ">Your Name</label>
                                    <input placeholder="Your Name" type="text" id='name' name='name'
                                        className="w-full px-4 py-3 text-sm   border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>


                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor='phonenumber' className="block mb-3 text-sm font-semibold ">Phone Number</label>
                                    <input type="text" id='phonenumber' name='phonenumber' placeholder="Phone Number"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor='email'
                                        className="block mb-3 text-sm font-semibold ">Email</label>
                                    <input type="text" id='email' name='email' placeholder="Email"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor='address'
                                        className="block mb-3 text-sm font-semibold ">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs lg:text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                                        type="text" id='address' name='address' cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>

                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='city'
                                        className="block mb-3 text-sm font-semibold ">City</label>
                                    <input type="text" id='city' name='city' placeholder="City"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='state'
                                        className="block mb-3 text-sm font-semibold ">State</label>
                                    <input name="state" type="text" id='state' placeholder="State"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>

                            <div className="space-x-0 lg:flex lg:space-x-4 pt-1">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='country'
                                        className="block mb-3 text-sm font-semibold ">Country</label>
                                    <input name="country" type="text" placeholder="Country" id='country'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor='pincode'
                                        className="block mb-3 text-sm font-semibold ">Pincode</label>
                                    <input name="pincode" type="text" placeholder="Pincode" id='pincode'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>



                        </div>
                    </form>

                    <h2 className="mb-4 font-bold md:text-xl text-heading text-center py-10">2. Review Cart Items
                    </h2>

                    <div className='bg-slate-100 '>
                        <ol className='list-decimal'>
                            {Object.keys(cart).length != 0 && Object.keys(cart).map((k) => {
                                return <>
                                    <div key={k} className="m-6">
                                        <div className="flow-root">
                                            <div className="-my-6 divide-y divide-gray-200">
                                                <div className="flex py-6">

                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src={cart[k].img} className="h-full w-full object-cover object-center" />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-bold  sm:text-sm">
                                                                <h3>
                                                                    <p className='font-blod text-lg '>{cart[k].name}</p>
                                                                    <p className="text-blue-500 font-bold text-lg">₹{cart[k].price}</p>
                                                                </h3>
                                                            </div>
                                                            <p className="mt-1 text-lg ">{cart[k].size}/{cart[k].variant}</p>
                                                        </div>
                                                        <div className="flex flex-1 items-center justify-between ">
                                                            {/* <IoMdRemove className='cursor-pointer' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /><p>Qty:{cart[k].qty}</p><IoMdAdd className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /> */}

                                                            <div className='flex font-semibold items-center justify-centerw-1/3 pt-5 text-lg'>
                                                                <FiMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                                                                <p>{cart[k].qty}</p><FiPlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                                                            </div>

                                                            <div className="flex pt-5 text-lg">
                                                                <button type="button" className="font-medium   hover:text-slate-800" onClick={() => { removeItemFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }}><FiTrash2 /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    



                                </>
                            })}
                        </ol>
                        <div className="py-5 flex items-center justify-center text-lg font-bold text-gray-900">
                            <p>Subtotal  ₹{subTotal}</p>
                           
                        </div>

                    </div>

                    <button className="mt-6 p-1 mx-auto ">
                        <Link href="/order" legacyBehavior><button className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-2 text-xl font-medium text-white shadow-sm hover:bg-slate-900">Pay ₹{subTotal}</button></Link>
                    </button>
                </div>


            </div>




        </div>


    )
}

export default Checkout