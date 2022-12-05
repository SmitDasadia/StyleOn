/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { BsHandbag, BsTruck } from 'react-icons/Bs';
import { MdDeleteOutline } from 'react-icons/Md';
import { HiOutlineUser } from 'react-icons/Hi';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/Io';




const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal, removeItemFromCart }) => {
  const ref = useRef()
  const toogleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
    console.log("cart")
  }

  return (


    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-white'>
      <div className="logo mx-5">
        <Link href="/" legacyBehavior>
          <a><img src="https://cdn.shopify.com/s/files/1/0549/4895/4134/t/82/assets/logo-black.svg?v=140515931841125915371649784351" alt="logo" width={200} height={40} /></a>
        </Link>
      </div>
      <div className="nav ">
        <ul className='flex items-center space-x-8 font-bold md:text-md'>
          <Link href={'/tshirts'} legacyBehavior>
            <a><li>Tshirts</li></a>
          </Link>
          <Link href={'/shorts'} legacyBehavior>
            <a><li>Shorts</li></a>
          </Link>
          <Link href={'/sportswear'} legacyBehavior>
            <a><li>SportsWear</li></a>
          </Link>
          <Link href={'/combo'} legacyBehavior>
            <a><li>Combo</li></a>
          </Link>
        </ul >
      </div >

      <div className="w-90 cart absolute right-2 mx-5 top-4 cursor-pointer flex">
        <Link href={'/login'} legacyBehavior>
          <a><HiOutlineUser className='text-xl md:text-2xl mx-2 my-1' /></a>
        </Link>

        <button onClick={toogleCart}><BsHandbag className='text-xl md:text-2xl mx-2' /></button>
      </div>
      <div ref={ref} className={`h-[100vh] overflow-y-scroll sidebar absolute top-0 right-0 bg-slate-100 p-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
        <h1 className='font-bold text-3xl text-center'>Your Bag</h1>
        {/* <span className='text-xl md:text-2xl items-center'><CiDeliveryTruck /></span> */}
        <h2 className='flex flex-1 items-center justify-center text-sm py-4'><BsTruck className='text-lg md:text-2xl' />Free Shipping & Free Returns!</h2>
        <span onClick={toogleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><IoMdClose /></span>



        {Object.keys(cart).length == 0 &&
          <>
            <p className='text-center py-20'>Oh no, your bag is empty!</p>
            <div className=" py-6 px-4 sm:px-6 m-4">
              <div className="mt-6">
                <a href={'/'} className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900">Start Shopping</a>
              </div>
            </div>


          </>
        }

        {Object.keys(cart).length != 0 && Object.keys(cart).map((k) => {
          return <>
            <div key={k} className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={cart[k].img} className="h-full w-full object-cover object-center" />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-black-900">
                          <h3>
                            <p className='font-blod'>{cart[k].name}</p>
                            <p className="text-blue-500">₹{cart[k].price}</p>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm ">{cart[k].variant}/{cart[k].size}</p>
                      </div>
                      <div className="flex flex-1 items-center justify-between text-sm">
                        {/* <IoMdRemove className='cursor-pointer' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /><p>Qty:{cart[k].qty}</p><IoMdAdd className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /> */}

                        <div className='flex font-semibold items-center justify-centerw-1/3 pt-5'>
                          <IoMdRemove onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                          <p>{cart[k].qty}</p><IoMdAdd onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                        </div>

                        <div className="flex pt-5">
                          <button type="button" className="font-medium   hover:text-slate-800" onClick={() => { removeItemFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }}><MdDeleteOutline /></button>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            {/* <ol>
              <li key={k}>
                <div className='item flex my-5'>
                  <div className='w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                  <div className='flex font-semibold items-center justify-centerw-1/3'>
                  <IoMdRemove className='cursor-pointer mx-2' /><p>1</p><IoMdAdd className='cursor-pointer mx-2'/>
                  </div>
                </div>
              </li>
            </ol> */}



          </>
        })}

        {Object.keys(cart).length != 0 &&
          <>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 m-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{subTotal}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

              <div className="mt-6">
                <div className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900" onClick={clearCart}>Clear Bag</div>
              </div>
              <div className="mt-6">
                <Link href="/checkout" legacyBehavior><a className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900">Checkout</a></Link>
              </div>
            </div>


          </>
        }




      </div>




    </div >



  )
}

export default Navbar