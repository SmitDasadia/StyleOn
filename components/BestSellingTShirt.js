/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BestSellingTshirt = () => {
    const BestSellingTshirt = [
        {
            title: 'Git Hub The Place Where I Fork (Blue/M) ',
            imageSrc: 'https://m.media-amazon.com/images/I/61tTsLOfIeL._UX679_.jpg',
            imageAlt: 'Git Hub The Place Where I Fork (Blue/M)',
            href: '/product/Git-Hub-The-Place-Where-I-Fork(S,Blue)',
            price: "499"
        },
        {
            title: 'In Case of Fire (Black/M)',
            imageSrc: 'https://m.media-amazon.com/images/I/61eXSXrp43L._UX679_.jpg',
            imageAlt: 'Declare Variable Not War',
            href: 'http://localhost:3000/product/In%20Case%20of%20Fire(M,Black)',

            price: "499"
        },
        {
            title: 'Developer (Black/S)',
            imageSrc: 'https://m.media-amazon.com/images/I/41GzGVqvMpL.jpg',
            imageAlt: 'Developer (Black/S)',
            href: '/product/Developer(Black,S)',
            price: "399"
        },
        {
            title: 'Java Script Developer',
            imageSrc: 'https://m.media-amazon.com/images/I/51hEsTvylGL._UX679_.jpg',
            imageAlt: 'Java Script Developer',
            href: '/product/JavaScript-Developer(S,Blue)',

            price: "499"
        },





    ]
    return (
        <div>
            
            <div className="bg-white min-h-screen">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:text-4xl  text-gray-800 flex mx-auto justify-center text-center mt-10 mb-10 font-heading text-4xl font-bold">
                        Top Selling T-Shirts
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {BestSellingTshirt.map((product) => (
                            <Link href={product.href} key={product.title} legacyBehavior>
                                <div className="group relative cursor-pointer">
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:scale-105 hover:bg-gray-700 lg:aspect-none lg:h-80 ">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-110"
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
