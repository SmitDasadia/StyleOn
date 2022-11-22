/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/Bs';
BsCart2
const Navbar = () => {
  return (

    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center py-2'>
      <div className="logo mx-5">
        <Image src="" alt="logo" width={200} height={40} />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href="/" legacyBehavior>
            <a><li>Tshirts</li></a>
          </Link>
          <Link href="/" legacyBehavior>
            <a><li>Shorts</li></a>
          </Link>
          <Link href="/" legacyBehavior>
            <a><li>SportsWear</li></a>
          </Link>
          <Link href="/" legacyBehavior>
            <a><li>Combo</li></a>
          </Link>
        </ul >
      </div >
      <div className="cart absolute right-2 mx-5 top-4">
        <button><BsCart2 className='text-xl md:text-2xl'/></button>
      </div>
    </div >


  )
}

export default Navbar