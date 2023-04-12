/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Product from '../models/Product';
const mongoose = require('mongoose');

const Tshirts = ({ products, totalProducts }) => {
    const [showFilters, setShowfilters] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');

    // Function to handle color filter
    const handleColorFilter = (color) => {
        setSelectedColor(color);
    }

    // Filter products by selected color
    const filteredProducts = selectedColor === '' ? products : Object.values(products).filter(product => product.color.includes(selectedColor));


    return (
        <div>
            <section className="text-gray-600 body-font ">
                <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
                    <p className=" text-sm leading-3 text-gray-600 font-normal mb-2">Home / Tshirts</p>
                    <div className=" flex justify-between items-center mb-4">
                        <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Tshirts</h2>

                        {/*  filters Button (md and plus Screen) */}
                        <button onClick={() => setShowfilters(!showFilters)} className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-[#111] text-base leading-4 font-normal text-white justify-center items-center rounded-md">
                            <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filters
                        </button>
                    </div>
                    <p className=" text-xl leading-5 text-gray-600 font-medium">{totalProducts} Tshirts</p>

                    {/* Filters Button (Small Screen)  */}

                    <button onClick={() => setShowfilters(!showFilters)} className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full bg-[#111] text-base leading-4 font-normal text-white justify-center items-center rounded-md py-3 px-2 mb-2">
                       
                        Filters
                    </button>
                </div>

                <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " + (showFilters ? "hidden" : "block")}>
                    {/* Cross button Code  */}
                    <div onClick={() => setShowfilters(true)} className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                        <svg className=" lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 1L1 25" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 1L25 25" stroke="#27272A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Colors Section */}
                    <div>
                        <div className=" flex space-x-2">

                            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Color</p>
                        </div>
                        <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                            <button onClick={() => handleColorFilter('')} className={`mx-1 rounded-full w-8 h-8 bg-white focus:outline-none ${selectedColor === '' && 'bg-white scale-150'}`}>All</button>
                            
                            <button onClick={() => handleColorFilter('Black')} className={`mx-1 rounded-full w-8 h-8 bg-black border-2 focus:outline-none ${selectedColor === 'Black' && 'bg-black scale-150'}`}></button>
                            <button onClick={() => handleColorFilter('Red')} className={`mx-1 rounded-full w-8 h-8 bg-red-500 focus:outline-none ${selectedColor === 'Red' && 'bg-red-500 scale-150'}`}></button>
                            <button onClick={() => handleColorFilter('Blue')} className={`mx-1 rounded-full w-8 h-8 bg-blue-500 focus:outline-none ${selectedColor === 'Blue' && 'bg-blue-500 scale-150'}`}></button>
                        </div>
                    </div>

                    <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />



                    {/* Size Section */}
                    <div>
                        <div className=" flex space-x-2">

                            <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Size</p>
                        </div>
                        <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                            <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                <input className="w-4 h-4 mr-2" type="checkbox" id="Large" name="large" value="Large" />
                                <div className=" inline-block">
                                    <div className=" flex space-x-6 justify-center items-center">
                                        <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Large">
                                            Large
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-center items-center ">
                                <input className="w-4 h-4 mr-2" type="checkbox" id="Medium" name="medium" value="Medium" />
                                <div className=" inline-block">
                                    <div className=" flex space-x-6 justify-center items-center">
                                        <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Medium">
                                            Medium
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex md:justify-center md:items-center items-center justify-end ">
                                <input className="w-4 h-4 mr-2" type="checkbox" id="Small" name="small" value="Small" />
                                <div className=" inline-block">
                                    <div className=" flex space-x-6 justify-center items-center">
                                        <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Small">
                                            Small
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                <input className="w-4 h-4 mr-2" type="checkbox" id="Mini" name="mini" value="Mini" />
                                <div className=" inline-block">
                                    <div className=" flex space-x-6 justify-center items-center">
                                        <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Mini">
                                            Mini
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                        <button className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                            Apply Filter
                        </button>
                    </div>
                </div>



                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">

                        {Object.keys(filteredProducts).map((item) => {

                            return <Link passHref={true} key={filteredProducts[item]._id} href={`/product/${filteredProducts[item].slug}`} legacyBehavior>
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md cursor-pointer shadow-lg m-5 hover:shadow-2xl hover:scale-105">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="m-auto block h-[50vh] w-[80vh]" src={filteredProducts[item].img} />
                                    </a>
                                    <div className="mt-4 text-center md:text-left">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                            {filteredProducts[item].category}
                                        </h3>
                                        <h2 className="text-gray-900 title-font text-md font-medium">{filteredProducts[item].title}</h2>
                                    </div>

                                    <div className='mt-1'>
                                        {filteredProducts[item].color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                                            <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                                        </button>}
                                        {filteredProducts[item].color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                        </button>}
                                        {filteredProducts[item].color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                                            <div className="w-4 h-4 rounded-full bg-black"></div>
                                        </button>}
                                        {filteredProducts[item].color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        </button>}
                                        {filteredProducts[item].color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                                            <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                        </button>}
                                        {filteredProducts[item].color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                                            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                        </button>}
                                    </div>

                                    <div className='mt-1'>
                                        {filteredProducts[item].size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                                        {filteredProducts[item].size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                                        {filteredProducts[item].size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                                        {filteredProducts[item].size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                                        {filteredProducts[item].size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                                        {filteredProducts[item].size.includes("XXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXL</span>}
                                        {filteredProducts[item].size.includes("XXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXL</span>}
                                        {filteredProducts[item].size.includes("XXXXXL") && <span className='border border-gray-300 px-1 mx-1'>XXXXXL</span>}
                                    </div>

                                    <div className='mt-1 text-right text-md font-bold text-black'>
                                        <p>₹{filteredProducts[item].price}</p>
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
    let totalProducts = await Product.find().count();
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
        props: { products: JSON.parse(JSON.stringify(tshirts)), totalProducts: JSON.parse(JSON.stringify(totalProducts))  }, // will be passed to the page component as props
    }
}

export default Tshirts