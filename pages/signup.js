/* eslint-disable @next/next/no-img-element */
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { HiOutlineLockClosed } from 'react-icons/Hi';
import { set } from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames';
import Head from "next/head";


const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0);
  const [checks, setChecks] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('myuser')) {
      router.push('/')
    }
  },)

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      const value = e.target.value;
      setPassword(value);
      const newChecks = {
        length: value.length > 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[$@!%*?&{}]/.test(value),
      };
      setChecks(newChecks);
      setStrength(Object.values(newChecks).filter(Boolean).length);
    }
  }

  const handleCheckChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setChecks((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    setStrength(Object.values({ ...checks, [name]: checked }).filter(Boolean).length);
  };

  const getPasswordStrengthClass = () => {
    switch (strength) {
      case 0:
        return 'bg-gray-400';
      case 1:
        return 'bg-red-600';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-400';
      case 4:
        return 'bg-green-600';
      case 5:
        return 'bg-blue-700';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signUp`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let respose = await res.json()
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
    setTimeout(() => {
      router.push('http://localhost:3000/login')
    }, 4000);
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
      <Head>
        <title>StyleOn.com - SignUp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-full items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Create an Account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={'/login'} legacyBehavior>
                <a className="mx-2 font-medium text-indigo-600 hover:text-indigo-500">login</a>
              </Link>

            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm">
              <div>

                <label className="block mb-4">
                  <label htmlFor='name' className="mb-5 text-gray-900 font-semibold leading-normal">Name *</label>
                  <input value={name} onChange={handleChange} className=" w-full  font-medium placeholder-gray-400   bg-white rounded border border-gray-300 focus:border-[#111] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="name" type="name" placeholder="Enter Your Name" name='name' />
                </label>

                <label className="block mb-4">
                  <label htmlFor='email' className="mb-5 text-gray-900 font-semibold leading-normal">Email Address *</label>
                  <input value={email} onChange={handleChange} className=" w-full  font-medium placeholder-gray-400   bg-white rounded border border-gray-300 focus:border-[#111] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="email" type="email" placeholder="Enter Your Email" name='email' />
                </label>

                <label className="block mb-5">
                  <label htmlFor='password' className="mb-5 text-gray-900 font-semibold leading-normal">Password *</label>
                  <input value={password} onChange={handleChange} className=" w-full  font-medium placeholder-gray-400   bg-white rounded border border-gray-300 focus:border-[#111] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="password" type="password" placeholder="********" name='password' />

                  {password && <div>
                    <div
                      className={classNames(
                        'h-3 mt-2 rounded border transition-colors',
                        getPasswordStrengthClass()
                      )}
                    />
                    <div className="text-sm text-gray-600 mt-1">
                      Password strength: {strength} / 5
                    </div>
                    <ul className="list-disc list-inside mt-1 text-sm text-gray-800">

                      <label htmlFor="length-check" className="flex items-center">
                        <input
                          type="checkbox"
                          name="uppercase"
                          id="uppercase-check"
                          checked={checks.length}
                          onChange={handleCheckChange}
                          className="mr-2"
                        />
                        Minimum 8 characters
                      </label>

                      <label htmlFor="uppercase-check" className="flex items-center">
                        <input
                          type="checkbox"
                          name="uppercase"
                          id="uppercase-check"
                          checked={checks.uppercase}
                          onChange={handleCheckChange}
                          className="mr-2"
                        />
                        At least one uppercase letter
                      </label>

                      <label htmlFor="lowercase-check" className="flex items-center">
                        <input
                          type="checkbox"
                          name="uppercase"
                          id="uppercase-check"
                          checked={checks.lowercase}
                          onChange={handleCheckChange}
                          className="mr-2"
                        />
                        At least one lowercase letter
                      </label>

                      <label htmlFor="number-check" className="flex items-center">
                        <input
                          type="checkbox"
                          name="uppercase"
                          id="uppercase-check"
                          checked={checks.number}
                          onChange={handleCheckChange}
                          className="mr-2"
                        />
                        At least one number
                      </label>

                      <label htmlFor="specail-check" className="flex items-center">
                        <input
                          type="checkbox"
                          name="uppercase"
                          id="uppercase-check"
                          checked={checks.special}
                          onChange={handleCheckChange}
                          className="mr-2"
                        />
                        At least one special letter
                      </label>


                    </ul>

                  </div>}


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
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#111] py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

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