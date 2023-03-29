/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const myaccount = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('myuser')) {
            router.push('/')
        }
    },[])
    return (
        <>
        <div className="container p-12 mx-auto ">
            
           

            <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
                <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-bold text-center">My Account</h2>
            </div>

            {/* change Delivery details */}

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
                                        className="w-full px-4 py-3 text-sm   border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>


                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor='phonenumber' className="block mb-3 text-sm font-semibold ">Phone Number</label>
                                    <input type="text" id='phonenumber' name='phonenumber' placeholder="Phone Number"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor='email'
                                        className="block mb-3 text-sm font-semibold ">Email</label>
                                    <input type="text" id='email' name='email' placeholder="Email"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor='address'
                                        className="block mb-3 text-sm font-semibold ">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs lg:text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md"
                                        type="text" id='address' name='address' cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>

                            <div className="space-x-0 lg:flex lg:space-x-4">
                            <div className="w-full lg:w-1/2 ">
                                    <label htmlFor='pincode'
                                        className="block mb-3 text-sm font-semibold ">Pincode</label>
                                    <input name="pincode" type="text" placeholder="Pincode" id='pincode'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='city'
                                        className="block mb-3 text-sm font-semibold ">City</label>
                                    <input type="text" id='city' name='city' placeholder="City"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                                
                            </div>

                            <div className="space-x-0 lg:flex lg:space-x-4 pt-1">
                            <div className="w-full lg:w-1/2">
                                    <label htmlFor='state'
                                        className="block mb-3 text-sm font-semibold ">State</label>
                                    <input name="state" type="text" id='state' placeholder="State"
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='country'
                                        className="block mb-3 text-sm font-semibold ">Country</label>
                                    <input name="country" type="text" placeholder="Country" id='country'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" />
                                </div>
                               
                            </div>



                        </div>
                    </form>

                    <div className="mt-6 p-1 mx-auto ">
                        <button  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#111] py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update Deatils</button>
                    </div>
                    <h2 className="mb-4 font-bold md:text-xl text-heading text-center py-10">2. Change Password
                    </h2>

                    {/* Change Password */}

                    <form className="justify-center w-full mx-auto " method="post" action='true'>
                        <div className="">
                    
                            <div className="space-x-0 lg:flex lg:space-x-4 pt-1">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='currentPassword'
                                        className="block mb-3 text-sm font-semibold "> Current Password</label>
                                    <input name="currentPassword" type="password" placeholder="currentPassword" id='currentPassword'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor='newPassword'
                                        className="block mb-3 text-sm font-semibold ">New Password</label>
                                    <input name="newPassword" type="password" placeholder="newPassword" id='newPassword'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor='confirmPassword'
                                        className="block mb-3 text-sm font-semibold ">Confirm Password</label>
                                    <input name="confirmPassword" type="password" placeholder="confirmPassword" id='confirmPassword'
                                        className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off"/>
                                </div>
                            </div>



                        </div>
                    </form>


                    <div className="mt-6 p-1 mx-auto ">
                        <button  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#111] py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update Password</button>
                    </div>

                    

                    
                </div>


            </div>




        </div>
        
        </>
    )
}

export default myaccount