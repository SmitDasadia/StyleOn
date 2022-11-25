/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { HiOutlineLockClosed } from 'react-icons/Hi';


const Signup = () => {
  return (
    <div>
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            {/* <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 class="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">Create an Account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={'/signup'} legacyBehavior>
                <a class="mx-2 font-medium text-indigo-600 hover:text-indigo-500">login</a>
              </Link>

            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label class="block mb-4">
                  <label htmlFor='name' class="mb-2 text-gray-900 font-semibold leading-normal">Name *</label>
                  <input class="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="loginEmailAddress" type="name" placeholder="Enter your name" name='name' />
                </label>
                <label class="block mb-4">
                  <label htmlFor='email' class="mb-2 text-gray-900 font-semibold leading-normal">Email Address *</label>
                  <input class="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="loginEmailAddress" type="email" placeholder="Enter email address" name='email' />
                </label>
                <label class="block mb-5">
                  <label htmlFor='password' class="mb-2 text-gray-900 font-semibold leading-normal">Password *</label>
                  <input class="px-4 py-3.5 w-full  font-medium placeholder-gray-400  bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" id="loginPassword" type="password" placeholder="********" name='password' />
                </label>

              </div>
              {/* <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
          
        </div> */}

            </div>

            <div class="flex items-center justify-center">
              {/* <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div> */}

              {/* <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div> */}
            </div>

            <div>
              <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiOutlineLockClosed class="h-5 w-5 text-white group-hover:text-white" />
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