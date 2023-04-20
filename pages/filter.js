/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react'
import Link from 'next/link'
import Product from '../models/Product';
const mongoose = require('mongoose');

const Tshirts = ({ products, totalProducts }) => {
  const [sortOrder, setSortOrder] = useState('fea');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const sortedProducts = Object.values(products).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder == 'desc') {
      return b.price - a.price;
    } else if (setSortOrder === 'fea') {
      return products
    }
  }).filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);



  return (
    <div>

      <section className="text-black body-font ">



        <div className="container px-5 py-24 mx-auto">

          <div className="flex justify-between items-center">
            <h1 className="text-gray-900 title-font text-lg font-medium">T-shirts</h1>
            <div className="flex space-x-2">
              <label htmlFor="sort-order">Sort by:</label>
              <select
                id="sort-order"
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="bg-white border border-gray-300 rounded-md p-1">
                <option value="fea">Featured</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="price-range">Price range:</label>
              <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
              <input
                id="price-range"
                type="range"
                min="0"
                max="1000"
                value={priceRange[0]}
                onChange={e => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="appearance-none bg-[#111] h-2 w-40 rounded-md"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="appearance-none bg-[#111] h-2 w-40 rounded-md"
              />
            </div>

          </div>

          <div className="flex flex-wrap -m-4 justify-center">

            {Object.keys(sortedProducts).map((item) => {

              return <Link passHref={true} key={sortedProducts[item]._id} href={`/product/${sortedProducts[item].slug}`} legacyBehavior>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md cursor-pointer shadow-lg m-5 hover:shadow-2xl hover:scale-105">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto block h-[50vh] w-[80vh]" src={sortedProducts[item].img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {sortedProducts[item].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-md font-medium">{sortedProducts[item].title}</h2>
                  </div>

                  <div className='mt-1'>
                    {sortedProducts[item].color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                      <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                    </button>}

                  </div>

                  <div className='mt-1'>
                    {sortedProducts[item].size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}

                  </div>



                  <div className='mt-1 text-right text-md font-bold text-black'>
                    <p>₹{sortedProducts[item].price}</p>
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
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
  }
  let products = await Product.find({ category: "Tshirt" });
  let totalProducts = await Product.find({ category: "Tshirt" }).count();
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
      } else {
        tshirts[item.title].color = []
        tshirts[item.title].size = []

      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)), totalProducts: JSON.parse(JSON.stringify(totalProducts)) }, // will be passed to the page component as props
  }
}

export default Tshirts