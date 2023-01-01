/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Product from '../../models/Product'
import mongoose from 'mongoose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ addToCart, product, variants, buyNow }) => {

  const router = useRouter()
  const { slug } = router.query

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)

  const checkPincode = async () => {
    const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      setService(true)
      toast.success('Your PinCode is serviceable!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else {
      setService(false)
      toast.error('Sorry,Your PinCode is not serviceable!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  }

  const onChangePinCode = (e) => {
    setPin(e.target.value)
  }

  const refershVarint = (newsize, newcolor) => {
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]['slug']}`;
    window.location = url;
  }


  return (
    <>
      <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <ToastContainer
          position="top-left"
          autoClose={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-4 mx-auto ">
          <div className="flex flex-wrap -mx-4">
            {/* <div className="w-full px-4">
        <ul className="flex flex-wrap items-center mb-16">
          <li className="mr-6">
            <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
              <span>Home</span>
              <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li className="mr-6">
            <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
              <span>Store</span>
              <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li><a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#">Apple iPhone 12 PRO</a></li>
        </ul>
      </div> */}
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                  {/* <a className="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
              <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z" fill="currentColor"></path>
              </svg>
            </a> */}
                  {/* <a className="h-30 block mb-4 mr-2 sm:mr-0" href="#">
              <img className="h-full w-full" src="uinel-assets/images/ecommerce-product-info/placeholder1.png" alt=""/>
            </a>
            <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
              <img className="h-full w-full" src="uinel-assets/images/ecommerce-product-info/placeholder2.png" alt=""/>
            </a>
            <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500" href="#">
              <img className="h-full w-full" src="uinel-assets/images/ecommerce-product-info/placeholder4.png" alt=""/>
            </a>
            <a className="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
              <img className="h-full w-full" src="uinel-assets/images/ecommerce-product-info/placeholder3.png" alt=""/>
            </a> */}
                  {/* <a className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
              <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z" fill="currentColor"></path>
              </svg>
            </a> */}
                </div>
                <div className="w-full sm:w-9/12 px-10">
                  <img className="mb-5" src={product.img} alt={product.title} />
                  {/* <p className="text-sm text-gray-300">Roll over image to zoom in</p> */}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md mb-3">
                <span className="text text-gray-400 tracking-wider">Style.com</span>
                <h2 className="mt-6 mb-4 text-xl md:text-xl lg:text-xl font-heading font-medium">{product.title} ({product.color}/{product.size})</h2>
                {/* <h3 className="mt-6 mb-4 text-xl md:text-sm lg:text-xl font-heading font-medium"></h3> */}
                <p className="flex items-center mb-6">
                  <span className="text-3xl text-blue-500 font-medium">₹{product.price}</span>
                </p>
                {/* <p className="text-sm  text-gray-400"></p> */}
              </div>
              {/* <div className="flex mb-6 items-center">
          <div className="inline-flex mr-4">
            <button className="mr-1">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
            <button className="mr-1">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
            <button className="mr-1">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
            <button className="mr-1">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
            <button>
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
          </div>
          <span className="text-md text-gray-400">4.59</span>
        </div> */}
              <div className="mb-6">
                <h4 className="mb-3 font-heading font-medium">
                  <span>Color:</span>
                  {/* <span className="text-gray-400">Silver</span> */}
                </h4>

                {Object.keys(variants).includes('White') && Object.keys(variants['White']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'White') }} className="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </button>}
                {Object.keys(variants).includes('Black') && Object.keys(variants['Black']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'Black') }} className="inline-flex items-center justify-center p-1 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-black"></div>
                  </button>}
                {Object.keys(variants).includes('Blue') && Object.keys(variants['Blue']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'Blue') }} className="inline-flex items-center justify-center p-1 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                  </button>}
                {Object.keys(variants).includes('Red') && Object.keys(variants['Red']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'Red') }} className="inline-flex items-center justify-center p-1 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-red-600"></div>
                  </button>}
                {Object.keys(variants).includes('Yellow') && Object.keys(variants['Yellow']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'Yellow') }} className="inline-flex items-center justify-center p-1 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                  </button>}
                {Object.keys(variants).includes('Green') && Object.keys(variants['Green']).includes(size) &&
                  <button onClick={() => { refershVarint(size, 'Green') }} className="inline-flex items-center justify-center p-1 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-green-600"></div>
                  </button>}

              </div>

              <div className="Size mb-10">
                <h4 className="mb-3 font-heading font-medium">Size:</h4>
                {/* <select onChange={(e) => { refershVarint(e.target.value, color) }} className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">

                  {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                  {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                  {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                  {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                  {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                </select> */}

                <select value={size} onChange={(e) => { refershVarint(e.target.value, color) }} className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                  {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                  {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                  {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                  {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                  {Object.keys(variants[color]).includes('2XL') && <option value={'2XL'}>2XL</option>}
                  {Object.keys(variants[color]).includes('3XL') && <option value={'3XL'}>3XL</option>}
                  {Object.keys(variants[color]).includes('4XL') && <option value={'4XL'}>4XL</option>}
                  {Object.keys(variants[color]).includes('5XL') && <option value={'5XL'}>5XL</option>}

                </select>

                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center r">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 cursor-pointe" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>

              <div className="pincode mb-10">
                <h4 className="mb-3 font-heading font-medium">Pincode:</h4>
                <input onChange={onChangePinCode} className=" px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" placeholder="Enter Your Pincode" /> <button
                  className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-xl" onClick={checkPincode}>
                  Check
                </button>
                {/* {service && service != null && <div className="text-green-800">This Pincode is Servivceable!</div>}
                {!service && service != null && <div className="text-red-800">Sorry! This Pincode is not Servivceable!</div>} */}
              </div>
              <div className="flex flex-wrap -mx-2 mb-12">
                <button onClick={() => { buyNow(slug, 1, product.price, product.title, size, color, product.img) }} className="w-full md:w-2/3 py-3 px-2 mb-2 md:mb-0">

                  <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-900 rounded-xl cursor-pointer">BuyNow</a>

                </button>

                <button className="w-full md:w-2/3 py-3 px-2 mb-2 md:mb-0">
                  <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-900 rounded-xl cursor-pointer"
                    onClick={() => { addToCart(slug, 1, product.price, product.title, size, color, product.img) }}>Add to Bag</a>
                </button>
                {/* <div className="w-full md:w-1/3 px-2">
                  <a className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl" href="#">
                    <span className="mr-2">Wishlist</span>
                    <svg width="23" height="22" viewbox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div> */}
              </div>
              <div>
                <h4 className="mb-6 font-heading font-medium">More information</h4>
                {/* <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 className="text-lg font-heading font-medium">Shipping &amp; returns</h3>
                  <span>
                    <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                    </svg>
                  </span>
                  
                  
                </button> */}
                {/* <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 className="text-lg font-heading font-medium">Product details</h3>
                  <span>
                    <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                    </svg>
                  </span>
                </button> */}
                <div>
                  <div className="border-t border-b py-4 mt-7 border-gray-200">
                    <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                      <p className="text-base leading-4 text-gray-800">Desc</p>
                      <button
                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                        aria-label="show or hide"
                      >
                        <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                      {product.desc}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-b py-4 border-gray-200">
                    <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                      <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                      <button
                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                        aria-label="show or hide"
                      >
                        <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
  let product = await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title, category: product.category })
  let colorSizeSlug = {}// {red:{xl:{slug:'hacker-Tshirt(S,Red)'}}}
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    } else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }

  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  }
}

export default Slug