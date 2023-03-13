/* eslint-disable @next/next/no-img-element */

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
// import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { BsTruck } from 'react-icons/Bs';
import { FiUserCheck, FiUser, FiShoppingBag, FiMenu, FiTrash2,FiX, FiMinus,FiPlus } from 'react-icons/Fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navigation = {
  categories: [
    // {
    //   id: 'women',
    //   name: 'Women',
    //   featured: [
    //     {
    //       name: 'New Arrivals',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
    //       imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    //     },
    //     {
    //       name: 'Basic Tees',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
    //       imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: 'clothing',
    //       name: 'Clothing',
    //       items: [
    //         { name: 'Tops', href: '#' },
    //         { name: 'Dresses', href: '#' },
    //         { name: 'Pants', href: '#' },
    //         { name: 'Denim', href: '#' },
    //         { name: 'Sweaters', href: '#' },
    //         { name: 'T-Shirts', href: '#' },
    //         { name: 'Jackets', href: '#' },
    //         { name: 'Activewear', href: '#' },
    //         { name: 'Browse All', href: '#' },
    //       ],
    //     },
    //     {
    //       id: 'accessories',
    //       name: 'Accessories',
    //       items: [
    //         { name: 'Watches', href: '#' },
    //         { name: 'Wallets', href: '#' },
    //         { name: 'Bags', href: '#' },
    //         { name: 'Sunglasses', href: '#' },
    //         { name: 'Hats', href: '#' },
    //         { name: 'Belts', href: '#' },
    //       ],
    //     },
    //     {
    //       id: 'brands',
    //       name: 'Brands',
    //       items: [
    //         { name: 'Full Nelson', href: '#' },
    //         { name: 'My Way', href: '#' },
    //         { name: 'Re-Arranged', href: '#' },
    //         { name: 'Counterfeit', href: '#' },
    //         { name: 'Significant Other', href: '#' },
    //       ],
    //     },
    //   ],
    // },

  ],
  pages: [
    { name: 'Tshirt', href: '/tshirts' },
    { name: 'SportsWear', href: '/sportswear' },
    { name: 'Shorts', href: '/shorts' },
    { name: 'Ethnix', href: '/ethnix' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar1({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, removeItemFromCart }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const [dropdown, setDropDown] = useState(false)
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
    // console.log(userName.value)
  }



  return (
    <div className="bg-white top-0 z-10 shadow-md">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <FiX className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 block p-2 font-blod text-gray-900 ">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>



                {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div> */}

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#111] px-4 text-sm font-bold text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹799
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 top-0 z-10 py-2 ">
          <div>
            <div className="flex  items-center">
              <button
                type="button"
                className="p-2 lg:hidden"
                onClick={() => setOpen(true)}
              >
               
                <FiMenu className="h-6 w-6 text-black " aria-hidden="true" />
              </button>

              {/* Logo */}
              <Link href='/' legacyBehavior>
                <div className="ml-2 flex mx-auto justify-center items-center cursor-pointer">
                  <a>
                    <img
                      className="h-6 w-auto"
                      src="https://cdn.shopify.com/s/files/1/0549/4895/4134/t/82/assets/logo-black.svg?v=140515931841125915371649784351"
                      alt="Style.com"
                    />
                  </a>
                </div>

              </Link>

              {/* <Link href='/' legacyBehavior>
                <div className="ml-4 flex mx-auto justify-center items-center lg:ml-0 sm:mx-auto cursor-pointer md:items-start">
                  <a>
                    <span className="sr-only">Style.com</span>
                    <img
                      className="h-6"
                      src="https://cdn.shopify.com/s/files/1/0549/4895/4134/t/82/assets/logo-black.svg?v=140515931841125915371649784351"
                      alt="Style.com"
                    />
                  </a>
                </div>
              </Link> */}

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center mx-auto justify-center text-center text-sm font-bold text-gray-700 hover:text-gray-800 md:items-center"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>


              <div className="ml-auto flex items-center">
                <a onClick={() => { setDropDown(true) }} onMouseLeave={() => { setDropDown(false) }}  >
                  {dropdown && <div
                    onClick={() => { setDropDown(true) }} onMouseLeave={() => { setDropDown(false) }}
                    className="absolute right-10 bg-slate-50 top-24 flex items-center justify-center rounded-md w-52 font-semibold text-sm border py-3 z-50 cursor-pointer">
                    {/* <span  onClick={() => { setDropDown(true) }} className="absolute top-5 right-2 cursor-pointer text-2xl"><IoMdClose /></span> */}
                    <ul>
                      <Link href={'/myaccount'} legacyBehavior>
                        <li className='px-3 py-3 hover:text-blue-800'>Account</li>
                      </Link>
                      <Link href={'/myOrders'} legacyBehavior>
                        <li className='px-3 py-3 hover:text-blue-800'>Orders</li>
                      </Link>
                      <div className='px-3 py-3 '>
                        <li onClick={logout} className='py-2 rounded-md border border-transparent bg-black px-10 text-xs font-semiblod text-white shadow-sm hover:bg-slate-900'>Logout</li>
                      </div>





                    </ul>
                  </div>}

                  {user.value &&
                    <>
                      <FiUserCheck className='text-2xl md:text-2xl mx-7 my-5 cursor-pointer' />

                    </>
                  }

                </a>
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                  </div> */}

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                {/* <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div> */}

                {/* Cart */}
                {!user.value && <Link href={'/login'} legacyBehavior>
                  <a><FiUser className='text-2xl md:text-2xl mx-5 my-5 cursor-pointer' /></a>
                </Link>}
                <button onClick={toogleCart}>
                  
                    <FiShoppingBag className='text-2xl md:text-2xl mx-1 my-5 cursor-pointer' />
                  
                </button>

                {/* <div className="ml-1 flow-root lg:ml-6">
                  <button onClick={toogleCart} className="group -m-2 flex items-center p-2 text-xl md:text-2xl">
                    <BsHandbag
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <FiShoppingBag
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />


                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div> */}
              </div>


            </div>
          </div>

        </nav>

        <div ref={ref} className={`h-screen overflow-y-scroll sidebar absolute top-0 right-0 bg-slate-100 p-10 transform transition-transform z-50 ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
          <h1 className='font-bold text-3xl text-center'>Your Bag</h1>
          {/* <span className='text-xl md:text-2xl items-center'><CiDeliveryTruck /></span> */}
          <h2 className='flex flex-1 items-center justify-center text-sm py-4'><BsTruck className='text-lg md:text-2xl mx-3' />Free Shipping & Free Returns!</h2>
          <span onClick={toogleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><FiX /></span>



          {Object.keys(cart).length == 0 &&
            <>
              <p className='text-center py-20'>Oh no, your bag is empty!</p>
              <div className=" py-6 px-4 sm:px-6 m-4">
                <div className="mt-6">
                  <a href={'/'} className="flex items-center justify-center rounded-md border border-transparent bg-[#111] px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900">Start Shopping</a>
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
                        <img src={cart[k].img} className="h-full w-full object-cover object-center" alt='item' />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-black-900">
                            <h3>
                              <p className='font-blod text-xs'>{cart[k].name}</p>
                              <p className="text-blue-500">₹{cart[k].price}</p>
                            </h3>
                          </div>
                          <p className="mt-1 text-sm ">{cart[k].size}/{cart[k].variant}</p>
                        </div>
                        <div className="flex flex-1 items-center justify-between text-sm">
                          {/* <IoMdRemove className='cursor-pointer' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /><p>Qty:{cart[k].qty}</p><IoMdAdd className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} /> */}

                          <div className='flex font-semibold items-center justify-centerw-1/3 pt-5 text-lg'>
                            <FiMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                            <p>{cart[k].qty}</p><FiPlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='cursor-pointer mx-2' />
                          </div>

                          <div className="flex font-semibold pt-5 text-lg">
                            <button type="button" className=" hover:text-slate-800" onClick={() => { removeItemFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }}><FiTrash2 /></button>
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
                  <div className="flex items-center justify-center rounded-md border border-transparent bg-[#111] px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900" onClick={clearCart}>Clear Bag</div>
                </div>
                <div className="mt-6">
                  <Link href="/checkout" legacyBehavior><a className="flex items-center justify-center rounded-md border border-transparent bg-[#111] px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-slate-900">Checkout</a></Link>
                </div>
              </div>


            </>
          }




        </div>

      </header>

    </div>
  )
}