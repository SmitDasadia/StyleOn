/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Order from '../models/Order'
import mongoose from 'mongoose'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    delivary: 'Deliverd on 21 june 2023'
  },
  // More products...
]

const orders = () => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="mx-auto text-center text-4xl font-bold tracking-tight text-gray-900">Order History</h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-xl  font-bold">{product.delivary}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
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