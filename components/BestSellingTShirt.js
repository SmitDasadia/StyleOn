/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BestSellingTshirt = () => {
    const BestSellingTshirt = [
        {
            title: '1st Rule of Programming ',
            imageSrc: 'https://m.media-amazon.com/images/I/61G0fjIIlqL._UX679_.jpg',
            imageAlt: '1st Rule of Programming',
            href: '/product/1st-Rule-of-Programming(XL,Blue)',
            price: "499"
        },
        {
            title: 'Declare Variable Not War',
            imageSrc: 'https://m.media-amazon.com/images/I/612ZV9YrvBL._UX679_.jpg',
            imageAlt: 'Declare Variable Not War',
            href: '/product/Declare-Variable-Not-War(S,Black)',
            
            price: "399"
        },
        {
            title: 'In Case of Fire',
            imageSrc: 'https://m.media-amazon.com/images/I/61eXSXrp43L._UX679_.jpg',
            imageAlt: 'In Case of Fire',
            href: '/product/In%20Case%20of%20Fire(L,Black)',
            price: "499"
        },
        {
            title: 'Java Script Developer',
            imageSrc: 'https://m.media-amazon.com/images/I/51hEsTvylGL._UX679_.jpg',
            imageAlt: 'Java Script Developer',
            href: '/product/JavaScript-Developer(S,Blue)',
           
            price: "499"
        },
        {
            title: 'Its not a Bug, Its a Feature',
            imageSrc: 'https://m.media-amazon.com/images/I/61naaxPalDL._UX679_.jpg',
            imageAlt: 'Its-not-a-Bug,-Its-a-Feature',
            href: '/product/Its-not-a-Bug,-Its-a-Feature-(M,Black)',
           
            price: "499"
        },
        {
            title: 'Git Hub The Place Where I Fork',
            imageSrc: 'https://m.media-amazon.com/images/I/61tTsLOfIeL._UX679_.jpg',
            imageAlt: 'Git Hub The Place Where I Fork',
            href: '/product/Git-Hub-The-Place-Where-I-Fork(S,Blue)',
           
            price: "499"
        },
        {
            title: 'Give Me <br/> ',
            imageSrc: 'https://m.media-amazon.com/images/I/61-lXIEMabL._UX679_.jpg',
            imageAlt: 'Give Me <br/> ',
            href: "/product/Give-Me-br(S,Black)",
           
            price: "499"
        },
        {
            title: 'AWS ',
            imageSrc: 'https://m.media-amazon.com/images/I/51oLn9Q3Q7L._UX679_.jpg',
            imageAlt: 'AWS ',
            href: '/product/AWS(S,Blue)',
            
            price: "499"
        },



    ]
    return (
        <div>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:text-4xl  text-gray-800 flex mx-auto justify-center text-center mb-10 font-heading text-4xl font-bold">
                        Top Selling
                    </div>
                    <div className="flex flex-wrap -m-4 justify-center">
                        {BestSellingTshirt.map((BestSellingTshirt) => (
                            <Link href={BestSellingTshirt.href} key={BestSellingTshirt.title} legacyBehavior>
                                <div  className="lg:w-1/4 md:w-1/4 sm:w-1/4 w-full p-4 cursor-pointer  m-5">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt={BestSellingTshirt.imageSrc} className="m-auto block h-[50vh] md:h-[45vh]" src={BestSellingTshirt.imageSrc} />
                                    </a>
                                    <div className="mt-4 text-center md:text-left">
                                        <h2 className="text-gray-900 title-font text-md font-medium">{BestSellingTshirt.title}</h2>
                                    </div>
                                    <div className='mt-1'>
                                        <div className="inline-flex items-center justify-center p-1">
                                            {BestSellingTshirt.color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                                            </button>}
                                            {BestSellingTshirt.color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                            </button>}
                                            {BestSellingTshirt.color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-black"></div>
                                            </button>}
                                            {BestSellingTshirt.color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                            </button>}
                                            {BestSellingTshirt.color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                            </button>}
                                            {BestSellingTshirt.color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                            </button>}
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <span className='border border-gray-300 px-1 mx-1'>{BestSellingTshirt.size}</span>
                                    </div>
                                    <div className='mt-1 text-right text-md'>
                                        <p>₹{BestSellingTshirt.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section> */}
            <div className="bg-white min-h-screen">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:text-4xl  text-gray-800 flex mx-auto justify-center text-center mt-10 mb-10 font-heading text-4xl font-bold">
                        Top Selling T-Shirts
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {BestSellingTshirt.map((product) => (
                            <Link href={product.href} key={product.title} legacyBehavior>
                                <div className="group relative cursor-pointer">
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 hover:bg-gray-700 lg:aspect-none lg:h-80 cur">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-lg">
                                                <div>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.title}
                                                </div>
                                            </h3>
                                            {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                        </div>
                                        <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
                                    </div>
                                </div>
                            </Link>

                        ))}

                    </div>
                </div>
            </div>


        </div>
    );
};

export default BestSellingTshirt;
