/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Order from '../models/Order'
import mongoose from 'mongoose'

const orders = () => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='h-screen'>
      <div className="container mx-auto">


        <section class="py-3">
          <div class="container px-4 mx-auto">
            <div class="pt-6 pb-8 rounded-xl">
              <div class="px-6">
                <h1 className='text-3xl font-semibold text-center p-10'>My Orders</h1>
                <div class="w-full mt-6 pb-6 overflow-x-auto">
                  <table class="w-full min-w-max">
                    <thead>
                      <tr class="text-left">
                        <th class="p-0">
                          <div class="py-3 px-6 rounded-l-xl bg-black">
                            <span class="text-xs text-white font-semibold">NAME</span>
                          </div>
                        </th>
                        <th class="p-0">
                          <div class="py-3 px-6 bg-black">
                            <span class="text-xs text-white font-semibold">INDUSTRY</span>
                          </div>
                        </th>
                        <th class="p-0">
                          <div class="py-3 px-6 bg-black">
                            <span class="text-xs text-white font-semibold">LOCATION</span>
                          </div>
                        </th>
                        <th class="p-0">
                          <div class="py-3 px-6 bg-black">
                            <span class="text-xs text-white font-semibold">ENROLLMENT</span>
                          </div>
                        </th>
                        <th class="p-0">
                          <div class="py-3 px-6 rounded-r-xl bg-black">
                            <span class="text-xs text-white font-semibold">LAST CONTACT</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b-2 border-black hover:bg-gray-200 py-10'>
                        <td class="p-0">
                          <div class="flex items-center h-16 px-6">
                            <div class="flex items-center">
                              <div class="flex items-center justify-center w-10 h-10 mr-3 bg-opacity-20 rounded-md">
                                <img src="trizzle-assets/logos/artemis.svg" alt="" />
                              </div>
                              <span class="text-sm text-black font-medium">Artemis</span>
                            </div>
                          </div>
                        </td>
                        <td class="p-0">
                          <div class="flex items-center h-16 px-6">
                            <span class="inline-block px-2 py-1 text-xs text-white font-medium bg-gray-700 rounded-full">NO-CODE</span>
                          </div>
                        </td>
                        <td class="p-0">
                          <div class="flex items-center h-16 px-6">
                            <span class="text-sm text-black font-medium">Warsaw, Poland</span>
                          </div>
                        </td>
                        <td class="p-0">
                          <div class="flex items-center h-16 px-6">
                            <span class="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            <span class="text-sm font-medium text-black">Enrolled</span>
                          </div>
                        </td>
                        <td class="p-0">
                          <div class="flex items-center h-16 px-6">
                            <span class="text-sm text-black font-medium">June 06, 2022</span>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
  }
  let orders = await Order.findOne()


  return {
    props: { orders: orders }, // will be passed to the page component as props
  }
}

export default orders