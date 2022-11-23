
/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/Bs';
BsCart2
const Navbar = () => {
  return (

    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky'>
      <div className="logo mx-5">
        <Link href="/" legacyBehavior>
          <a><Image src="" alt="logo" width={200} height={40} /></a>
        </Link>
      </div>
      <div className="nav ">
        <ul className='flex items-center space-x-8 font-bold md:text-md'>
          <Link href="/tshirts" legacyBehavior>
            <a><li>Tshirts</li></a>
          </Link>
          <Link href="/shorts" legacyBehavior>
            <a><li>Shorts</li></a>
          </Link>
          <Link href="/sportswear" legacyBehavior>
            <a><li>SportsWear</li></a>
          </Link>
          <Link href="/combo" legacyBehavior>
            <a><li>Combo</li></a>
          </Link>
        </ul >
      </div >
      <div className="cart absolute right-2 mx-5 top-4">
        <button><BsCart2 className='text-xl md:text-2xl' /></button>
      </div>
    </div >

  )
}

export default Navbar