/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-css-tags */
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';




const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, removeItemFromCart }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [pincode, setPincode] = useState("")
    const [disabled, setDisabled] = useState(true)


    const [myuser, setmyuser] = useState({ value: null })

    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'))

        if (!myuser) {
            Router.push('/')
        }
        if (myuser && myuser.token) {

            setmyuser(myuser);
            setEmail(myuser.email);
        }
        fetchData(myuser.token);


    }, [])

    useEffect(() => {
        if (phone.length > 3 && address.length > 3 && pincode.length > 3) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [phone, address, pincode])





    const getPinCode = async (pin) => {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes(pin)) {

            setCity(pinJson[pin][0])

            setState(pinJson[pin][1])

            setCountry(pinJson[pin][2])
        } else {
            setCity("")

            setState("")

            setCountry("")
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
        setPincode(res.pincode)
        getPinCode(res.pincode)



    }

    const handleChange = async (e) => {


        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
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

                getPinCode(e.target.value)
            } else {
                setCity("")

                setState("")

                setCountry("")

            }
        }




    }



    const initiatePayment = async () => {
        let orderId = Math.floor(Math.random() * Date.now())

        const data = { cart, subTotal, orderId, email: email, name, address, pincode, phone };

        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })


        let txnRes = await a.json();
        if (txnRes.success) {
            let txnToken = txnRes.txnToken;

            console.log(txnToken);




            function onScriptLoad() {
                var config = {
                    "root": "",
                    "flow": "DEFAULT",
                    "data": {
                        "orderId": orderId, /* update order id */
                        "token": txnToken, /* update token value */
                        "tokenType": "TXN_TOKEN",
                        "amount": subTotal /* update amount */
                    },
                    "handler": {
                        "notifyMerchant": function (eventName, data) {
                            console.log("notifyMerchant handler function called");
                            console.log("eventName => ", eventName);
                            console.log("data => ", data);
                        }
                    }
                };



                window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                    // after successfully updating configuration, invoke JS Checkout
                    window.Paytm.CheckoutJS.invoke();
                }).catch(function onError(error) {
                    console.log("error => ", error);
                });
            }
        } else {
            console.log('not vaild mkey')
            if (txnRes.cartClear) {
                clearCart()
            }
            toast.error(txnRes.error, {
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
        <div>
        <Head>
        <title>StyleOn.com - Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        </div>

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
                <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
                <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}  ></Script>

                <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
                    <h2 className="text-5xl xl:text-4xl leading-normal font-heading font-bold text-center">CheckOut</h2>
                </div>
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
                                            className="block mb-3 text-sm font-semibold ">Email </label>

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
                                            className="block mb-3 text-sm font-semibold ">Pincodes </label>



                                        <input value={pincode} onChange={handleChange} name="pincode" type="text" placeholder="Available pinocdes are 360001,380001,391740,395003,382010,943001,913061" id='pincode'
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

                        <h2 className="mb-4 font-bold md:text-xl text-heading text-center py-10">2. Review Cart Items
                        </h2>

                        <div className='bg-slate-100 '>
                            <ol className='list-decimal'>
                                {Object.keys(cart).length != 0 && Object.keys(cart).map((k) => {
                                    return <>
                                        <div key={cart[k].slug} className="m-6">
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
                                <div >Subtotal  ₹{subTotal}</div>

                            </div>

                        </div>

                        <div className="mt-6 p-1 mx-auto ">
                            <button disabled={disabled} onClick={initiatePayment} className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-2 text-xl font-medium text-white shadow-sm hover:bg-slate-900 disabled:bg-slate-600">Pay ₹{subTotal}</button>
                        </div>
                    </div>


                </div>




            </div>


        </>
    )
}

export default Checkout