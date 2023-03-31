/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { React, useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myaccount = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAdress] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [country, setCountry] = useState(null)
    const [pincode, setPincode] = useState(null)
    const [currentPassword, setcurrentPassword] = useState(null)
    const [newPassword, setnewPassword] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState(null)
    const [myuser, setmyuser] = useState({ value: null })

    const router = useRouter()
    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'))
        if (!myuser) {
            router.push('/')
        }
        if (myuser && myuser.token) {

            setmyuser(myuser)
            setEmail(myuser.email)
        }
        fetchData(myuser.token);
    }, [])


    const handleChange = async (e) => {


        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'address') {
            setAdress(e.target.value)
        }

        else if (e.target.name == 'pincode') {
            setPincode(e.target.value)
            if (e.target.value.length == 6) {

                const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
                let pinJson = await pins.json()
                if (Object.keys(pinJson).includes(e.target.value)) {

                    setCity(pinJson[e.target.value][0])

                    setState(pinJson[e.target.value][1])

                    setCountry(pinJson[e.target.value][2])
                } else {
                    setCity("")

                    setState("")

                    setCountry("")
                }
            } else {
                setCity("")

                setState("")

                setCountry("")

            }
        }

        else if (e.target.name == 'currentPassword') {
            setcurrentPassword(e.target.value)
        }
        else if (e.target.name == 'newPassword') {
            setnewPassword(e.target.value)
        }
        else if (e.target.name == 'confirmPassword') {
            setconfirmPassword(e.target.value)
        }


    }

    const fetchData = async (token) => {
        let data = { token: token }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })


        let res = await a.json();
        console.log(res)
        setName(res.name);
        setAdress(res.address);
        setPhone(res.phone);
        setPincode(res.pincode);
        setCity(res.city);
        setState(res.state);
        setCountry(res.country);

    }

    const handleUserSubmit = async () => {
        let data = { token: myuser.token, name, address, phone, pincode, city, state, country }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })


        let res = await a.json();
        console.log(res)
        if (res.success) {

            toast.success('You details successfully updated!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }

    const handlePasswordUpdate = async () => {
        let res;
        if (newPassword == confirmPassword) {

            let data = { token: myuser.token, currentPassword, newPassword, confirmPassword }
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatePassword`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })



            res = await a.json();

        } else {
            res = { success: false }
        }
        console.log(res)
        if (res.success) {

            toast.success('You password successfully updated!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setnewPassword("");
            setcurrentPassword("");
            setconfirmPassword("");

        } else {
            toast.error('error in password updation!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }




    return (
        <>
            <div className="container p-12 mx-auto ">
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />



                <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
                    <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-bold text-center">My Account</h2>
                </div>

                {/* change Delivery details */}

                <div className="flex flex-col w-full px-0 mx-auto md:flex-col">

                    <div className="flex flex-col w-full">

                        <h2 className="mb-4 font-bold md:text-xl text-heading text-center py-10">1. Shipping Address
                        </h2>

                        <form className="justify-center w-full mx-auto " method="POST" action='true'>
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor='name' className="block mb-3 text-sm font-semibold ">Your Name</label>
                                        <input value={name} onChange={handleChange} placeholder="Your Name" type="text" id='name' name='name'
                                            className="w-full px-4 py-3 text-sm   border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>


                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor='phonenumber' className="block mb-3 text-sm font-semibold ">Phone Number</label>
                                        <input value={phone} onChange={handleChange} type="text" id='phonenumber' name='phone' placeholder="Your 10 Digit Phone Number"
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor='email'
                                            className="block mb-3 text-sm font-semibold ">Email [Cannot be changed] </label>

                                        {myuser && myuser.token ? <input value={myuser.email} type="text" id='email' name='email' placeholder="Email"
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" readOnly />
                                            :
                                            <input value={email} onChange={handleChange} type="text" id='email' name='email' placeholder="Email"
                                                className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />}

                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor='address'
                                            className="block mb-3 text-sm font-semibold ">Address</label>
                                        <textarea
                                            value={address} onChange={handleChange}
                                            className="w-full px-4 py-3 text-xs lg:text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                                            type="text" id='address' name='address' cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>



                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor='pincode'
                                            className="block mb-3 text-sm font-semibold ">Pincodes [  360001,380001,391740,395003,382010]</label>



                                        <input value={pincode} onChange={handleChange} name="pincode" type="text" placeholder="Pincode" id='pincode'
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor='city'
                                            className="block mb-3 text-sm font-semibold ">City</label>
                                        <input value={city} onChange={handleChange} type="text" id='city' name='city' placeholder="City"
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>

                                </div>

                                <div className="space-x-0 lg:flex lg:space-x-4 pt-1">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor='state'
                                            className="block mb-3 text-sm font-semibold ">State</label>
                                        <input value={state} onChange={handleChange} name="state" type="text" id='state' placeholder="State"
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor='country'
                                            className="block mb-3 text-sm font-semibold ">Country</label>
                                        <input value={country} onChange={handleChange} name="country" type="text" placeholder="Country" id='country'
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" />
                                    </div>

                                </div>



                            </div>
                        </form>

                        <div className="mt-6 p-1 mx-auto ">
                            <button onClick={handleUserSubmit} className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#111] py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update Deatils</button>
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
                                        <input value={currentPassword} onChange={handleChange} name="currentPassword" type="password" placeholder="currentPassword" id='currentPassword'
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor='newPassword'
                                            className="block mb-3 text-sm font-semibold ">New Password</label>
                                        <input value={newPassword} onChange={handleChange} name="newPassword" type="password" placeholder="newPassword" id='newPassword'
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off" />
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor='confirmPassword'
                                            className="block mb-3 text-sm font-semibold ">Confirm Password</label>
                                        <input value={confirmPassword} onChange={handleChange} name="confirmPassword" type="password" placeholder="confirmPassword" id='confirmPassword'
                                            className="w-full px-4 py-3 text-sm  border-2 outline-none focus:ring-2 focus:ring-[#111] focus:ring-opacity-50 rounded-md" autoComplete="off" />
                                    </div>
                                </div>



                            </div>
                        </form>


                        <div className="mt-6 p-1 mx-auto ">
                            <button onClick={handlePasswordUpdate} className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#111] py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update Password</button>
                        </div>




                    </div>


                </div>




            </div>

        </>
    )
}

export default myaccount