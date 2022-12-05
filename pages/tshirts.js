/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
const mongoose = require('mongoose');

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length === 0 && <p>Out Of Stcok</p>}
            {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} legacyBehavior>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md cursor-pointer shadow-lg m-5">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto block h-[50vh]" src={products[item].img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {products[item].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-md font-medium">{products[item].title}</h2>
                  </div>

                  <div className='mt-1'>
                    {products[item].color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                      <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                    </button>}
                    {products[item].color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    </button>}
                    {products[item].color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                      <div className="w-4 h-4 rounded-full bg-black"></div>
                    </button>}
                    {products[item].color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                      <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                    </button>}
                    {products[item].color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                      <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    </button>}
                    {products[item].color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                      <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    </button>}
                  </div>

                  <div className='mt-1'>
                    {products[item].size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                    {products[item].size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                    {products[item].size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                    {products[item].size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                    {products[item].size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                    {products[item].size.includes("XXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXL</span>}
                    {products[item].size.includes("XXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXL</span>}
                    {products[item].size.includes("XXXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXXL</span>}
                  </div>

                  <div className='mt-1 text-right text-md'>
                    <p>₹{products[item].price}</p>
                  </div>

                </div>
              </Link>
            })}




          </div>


        </div>
      </section>

    </div>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
          family: 4,
      })
  }
  let products = await Product.find({ category: "Tshirt" })
  let tshirts = {}
  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.avialableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.avialableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.avialableQty > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}

export default Tshirts