/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Product from '../models/Product';
const mongoose = require('mongoose');

import { FiFilter, FiX } from 'react-icons/Fi';
const SportsWear = ({ products, totalProducts }) => {
    const [showFilters, setShowfilters] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [sortOrder, setSortOrder] = useState('fea');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [search, setSearch] = useState("");

    // Function to handle color filter
    const handleColorFilter = (color) => {
        setSelectedColor(color);
    }

    // Function to handle size filter
    const handleSizeFilter = (size) => {
        setSelectedSize(size);
    }

    // Function to handle price range filter


    const handleSearch = (event) => {
        setSearch(event.target.value);
    };



    const filteredProducts = Object.values(products).filter(product => (
        (selectedColor === '' || product.color.includes(selectedColor))
        && (selectedSize === '' || product.size.includes(selectedSize))

    ));






    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder == 'desc') {
            return b.price - a.price;
        } else if (setSortOrder === 'fea') {
            return products
        }
    })

    const searchedProducts = sortedProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) && product.price >= priceRange[0] && product.price <= priceRange[1]
    );


    return (
        <div>

            <Head>
                <title>StyleOn.com - SportsWear</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {Object.keys(searchedProducts).length == 0 &&
                <h1>Out of stock</h1>}

            {Object.keys(searchedProducts).length == 0 &&
                <Fragment>
                    <div className="flex justify-center items-center min-h-screen bg-gray-100">
                        <div className=" max-w-md w-full mx-auto overflow-hidden">
                            <div className="flex justify-center items-center px-4 py-2">
                                <h1 className="text-5xl font-bold text-gray-800">Out of Stock</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center py-6">

                                <p className="text-gray-600 text-center px-4 mb-6">
                                    We are sorry, but SportsWear are currently out of stock. Please check back later or contact us for more information.
                                </p>
                                <Link href={'/'} className=" bg-[#111] hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-md">
                                    Return to Homepage
                                </Link>

                            </div>
                        </div>
                    </div>
                </Fragment>}


            {Object.keys(searchedProducts).length != 0 &&
                <section className="text-black body-font ">

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">SportsWear
                                <p className="text-xl leading-5 text-gray-600 font-medium py-2 px-2">{totalProducts} SportsWear</p>
                            </h1>

                            <div className="flex items-center">
                                <div className='mx-3'>
                                    <input className="px-4 py-2 border rounded-md"
                                        placeholder="Search products by title"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)} />



                                </div>


                                <button onClick={() => setShowfilters(!showFilters)} className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-3 px-6 bg-[#111] text-base leading-4 font-normal text-white justify-center items-center rounded-md">



                                    <FiFilter className='mx-1 text-center'></FiFilter>Filters
                                </button>










                            </div>
                        </div>


                    </main>


                    <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">




                        {/* Filters Button (Small Screen)  */}

                        <button onClick={() => setShowfilters(!showFilters)} className="cursor-pointer mt-2 block sm:hidden hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full bg-[#111] text-base leading-4 font-normal text-white justify-center items-center rounded-md py-3 px-2 mb-2">

                            Filters
                        </button>
                    </div>



                    <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-slate-100 w-full " + (showFilters ? "hidden" : "block")}>
                        {/* Cross button Code  */}
                        <div onClick={() => setShowfilters(true)} className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                            <FiX className='h-10 w-10'></FiX>
                        </div>

                        <div className="mt-1 mb-5">
                            <p className='text-3xl font-bold py-3'>Sort By</p>
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

                        <div className='mt-1 mb-5'>
                            <p className='text-3xl font-bold py-3'>Size</p>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === '' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('')}>All</button>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === 'S' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('S')}>S</button>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === 'M' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('M')}>M</button>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === 'L' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('L')}>L</button>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === 'XL' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('XL')}>XL</button>
                            <button className={`border border-gray-300 px-1 mx-1 rounded-md text-xl hover:border-black ${selectedSize === 'XXL' && 'bg-gray-200 border-gray-900'}`} onClick={() => handleSizeFilter('XXL')}>XXL</button>
                        </div>


                        <div className='mt-1 mb-5'>
                            <p className='text-3xl font-bold py-3'>Color</p>
                            <button className={`border  w-8  h-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-1 mx-1 ${selectedColor === '' && 'scale-125'}`} onClick={() => handleSizeFilter('')}></button>

                            <button className={`border border-gray-300 w-8  h-8 bg-black rounded-full px-1 mx-1 ${selectedColor === 'Black' && 'scale-125'}`} onClick={() => handleColorFilter('Black')}></button>
                            <button className={`border border-gray-300 w-8  h-8 bg-white rounded-full px-1 mx-1 ${selectedColor === 'White' && ' scale-125'}`} onClick={() => handleColorFilter('White')}></button>
                            <button className={`border border-gray-300 w-8  h-8  bg-blue-600 rounded-full px-1 mx-1 ${selectedColor === 'Blue' && ' scale-125'}`} onClick={() => handleColorFilter('Blue')}></button>
                            <button className={`border border-gray-300 w-8  h-8 bg-red-500  rounded-full px-1 mx-1 ${selectedColor === 'Red' && 'scale-125'}`} onClick={() => handleColorFilter('Red')}></button>

                        </div>

                        <div className="mt-1 mb-5">
                            <p className='text-3xl font-bold py-3'>Price Range</p>
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



                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 justify-center">

                            {Object.keys(searchedProducts).map((item) => {

                                return <Link passHref={true} key={searchedProducts[item]._id} href={`/product/${searchedProducts[item].slug}`} legacyBehavior>
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md cursor-pointer shadow-lg m-5 hover:shadow-2xl hover:scale-105">
                                        <a className="block relative rounded overflow-hidden">
                                            <img alt="ecommerce" className="m-auto block h-[50vh] w-[80vh]" src={searchedProducts[item].img} />
                                        </a>
                                        <div className="mt-4 text-center md:text-left">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                {searchedProducts[item].category}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-md font-medium">{searchedProducts[item].title}</h2>
                                        </div>

                                        <div className='mt-1'>
                                            {searchedProducts[item].color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                                            </button>}
                                            {searchedProducts[item].color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                            </button>}
                                            {searchedProducts[item].color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-black"></div>
                                            </button>}
                                            {searchedProducts[item].color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                            </button>}
                                            {searchedProducts[item].color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                            </button>}
                                            {searchedProducts[item].color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                            </button>}
                                        </div>

                                        <div className='mt-1'>
                                            {searchedProducts[item].size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                                            {searchedProducts[item].size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                                            {searchedProducts[item].size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                                            {searchedProducts[item].size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                                            {searchedProducts[item].size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                                            {searchedProducts[item].size.includes("XXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXL</span>}
                                            {searchedProducts[item].size.includes("XXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXL</span>}
                                            {searchedProducts[item].size.includes("XXXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXXL</span>}
                                        </div>



                                        <div className='mt-1 text-right text-md font-bold text-black'>
                                            <p>₹{searchedProducts[item].price}</p>
                                        </div>

                                    </div>
                                </Link>
                            })}




                        </div>


                    </div>
                </section>

            }




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
    let products = await Product.find({ category: "SportsWear" });


    let totalProducts = await Product.find({ category: "SportsWear" }).count();
    let sportswear = {}
    for (let item of products) {
        if (item.title in sportswear) {
            if (!sportswear[item.title].color.includes(item.color) && item.avialableQty > 0) {
                sportswear[item.title].color.push(item.color)
            }
            if (!sportswear[item.title].size.includes(item.size) && item.avialableQty > 0) {
                sportswear[item.title].size.push(item.size)
            }
        } else {
            sportswear[item.title] = JSON.parse(JSON.stringify(item))
            if (item.avialableQty > 0) {
                sportswear[item.title].color = [item.color]
                sportswear[item.title].size = [item.size]
            } else {
                sportswear[item.title].color = []
                sportswear[item.title].size = []

            }
        }
    }
    return {
        props: { products: JSON.parse(JSON.stringify(sportswear)), totalProducts: JSON.parse(JSON.stringify(totalProducts)) }, // will be passed to the page component as props
    }
}

export default SportsWear