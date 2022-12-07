/* eslint-disable @next/next/no-img-element */
import { React, useState } from 'react'
import Link from 'next/link'
import { HiOutlineLockClosed } from 'react-icons/Hi';
import { set } from 'mongoose';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch('http://localhost:3000/api/signUp', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let respose = await res.json()
    console.log(respose)
    setName('')
    setEmail('')
    setPassword('')
    toast.success('Your account has been created.', {
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

  return (
    <div>
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
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">Create an Account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={'/signup'} legacyBehavior>
                <a className="mx-2 font-medium text-indigo-600 hover:text-indigo-500">login</a>
              </Link>

            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="block mb-4">
                  <label htmlFor='name' className="mb-2 text-gray-900 font-semibold leading-normal">Name *</label>
                  <input value={name} onChange={handleChange} className="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="name" type="name" placeholder="Enter your name" name='name' />
                </label>
                <label className="block mb-4">
                  <label htmlFor='email' className="mb-2 text-gray-900 font-semibold leading-normal">Email Address *</label>
                  <input value={email} onChange={handleChange} className="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="email" type="email" placeholder="email" name='email' />
                </label>
                <label className="block mb-5">
                  <label htmlFor='password' className="mb-2 text-gray-900 font-semibold leading-normal">Password *</label>
                  <input value={password} onChange={handleChange} className="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="password" type="password" placeholder="********" name='password' />
                </label>

              </div>
              {/* <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
          
        </div> */}

            </div>

            <div className="flex items-center justify-center">
              {/* <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div> */}

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div> */}
            </div>

            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiOutlineLockClosed className="h-5 w-5 text-white group-hover:text-white" />
                </span>
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup