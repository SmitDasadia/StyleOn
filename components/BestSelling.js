/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BestSelling = () => {
    const BestSelling = [
        {
            title: '1st Rule of Programming',
            imageSrc: 'https://m.media-amazon.com/images/I/61G0fjIIlqL._UX679_.jpg',
            imageAlt: '1st Rule of Programming',
            href: '/product/1st-Rule-of-Programming(XL,Blue)',
            color: 'Blue',
            size: 'XL',
            price: "499"
        },
        {
            title: 'PSG Jersey Messi 2022-23',
            imageSrc: 'https://m.media-amazon.com/images/I/51It2KrC7UL._UX679_.jpg',
            imageAlt: 'PSG Home Football Jersey Messi 2022-23',
            href: '/product/PSG-Home-Football-Jersey-Messi-2022-23(XL,Blue)',
            color: 'Blue',
            size: 'L',
            price: "499"
        },
        {
            title: 'Mens Black Kurtas',
            imageSrc: 'https://th.bing.com/th/id/R.6ba72ce1b9b55b869bbf21dcc2fa30b3?rik=Vau684xcR8b6ZQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0414%2f6620%2f0213%2fproducts%2fPlain_Black_Kurta3_1200x1200.jpg%3fv%3d1601308404&ehk=0SorVaDqUVTD2A4YozxFJCTbrS093MFYTOdN8n%2fYHSM%3d&risl=&pid=ImgRaw&r=0',
            imageAlt: 'Mens Black Kurtas',
            href: '/product/Mens-Kurtas(XL,Black)',
            color: 'Black',
            size: 'XL',
            price: "2499"
        },
        {
            title: 'Mens Black Kurtas',
            imageSrc: 'https://th.bing.com/th/id/R.6ba72ce1b9b55b869bbf21dcc2fa30b3?rik=Vau684xcR8b6ZQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0414%2f6620%2f0213%2fproducts%2fPlain_Black_Kurta3_1200x1200.jpg%3fv%3d1601308404&ehk=0SorVaDqUVTD2A4YozxFJCTbrS093MFYTOdN8n%2fYHSM%3d&risl=&pid=ImgRaw&r=0',
            imageAlt: 'Mens Black Kurtas',
            href: '/product/Mens-Kurtas(XL,Black)',
            color: 'Black',
            size: 'XL',
            price: "2499"
        },
        {
            title: '1st Rule of Programming',
            imageSrc: 'https://m.media-amazon.com/images/I/61G0fjIIlqL._UX679_.jpg',
            imageAlt: '1st Rule of Programming',
            href: '/product/1st-Rule-of-Programming(XL,Blue)',
            color: 'Blue',
            size: 'XL',
            price: "499"
        },
        {
            title: 'PSG Jersey Messi 2022-23',
            imageSrc: 'https://m.media-amazon.com/images/I/51It2KrC7UL._UX679_.jpg',
            imageAlt: 'PSG Home Football Jersey Messi 2022-23',
            href: '/product/PSG-Home-Football-Jersey-Messi-2022-23(XL,Blue)',
            color: 'Blue',
            size: 'L',
            price: "499"
        },
        {
            title: 'Mens Black Kurtas',
            imageSrc: 'https://th.bing.com/th/id/R.6ba72ce1b9b55b869bbf21dcc2fa30b3?rik=Vau684xcR8b6ZQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0414%2f6620%2f0213%2fproducts%2fPlain_Black_Kurta3_1200x1200.jpg%3fv%3d1601308404&ehk=0SorVaDqUVTD2A4YozxFJCTbrS093MFYTOdN8n%2fYHSM%3d&risl=&pid=ImgRaw&r=0',
            imageAlt: 'Mens Black Kurtas',
            href: '/product/Mens-Kurtas(XL,Black)',
            color: 'Black',
            size: 'XL',
            price: "2499"
        },
        {
            title: 'Mens Black Kurtas',
            imageSrc: 'https://th.bing.com/th/id/R.6ba72ce1b9b55b869bbf21dcc2fa30b3?rik=Vau684xcR8b6ZQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0414%2f6620%2f0213%2fproducts%2fPlain_Black_Kurta3_1200x1200.jpg%3fv%3d1601308404&ehk=0SorVaDqUVTD2A4YozxFJCTbrS093MFYTOdN8n%2fYHSM%3d&risl=&pid=ImgRaw&r=0',
            imageAlt: 'Mens Black Kurtas',
            href: '/product/Mens-Kurtas(XL,Black)',
            color: 'Black',
            size: 'XL',
            price: "2499"
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


                        {BestSelling.map((BestSelling) => (
                            <Link href={BestSelling.href} key={BestSelling.title} legacyBehavior>
                                <div  className="lg:w-1/4 md:w-1/4 sm:w-1/4 w-full p-4 cursor-pointer  m-5">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt={BestSelling.imageSrc} className="m-auto block h-[50vh] md:h-[45vh]" src={BestSelling.imageSrc} />
                                    </a>
                                    <div className="mt-4 text-center md:text-left">
                                        <h2 className="text-gray-900 title-font text-md font-medium">{BestSelling.title}</h2>
                                    </div>

                                    <div className='mt-1'>
                                        <div className="inline-flex items-center justify-center p-1">
                                            {BestSelling.color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                                            </button>}
                                            {BestSelling.color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                            </button>}
                                            {BestSelling.color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-black"></div>
                                            </button>}
                                            {BestSelling.color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                            </button>}
                                            {BestSelling.color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                            </button>}
                                            {BestSelling.color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                            </button>}
                                        </div>

                                    </div>

                                    <div className='mt-1'>
                                        <span className='border border-gray-300 px-1 mx-1'>{BestSelling.size}</span>

                                    </div>

                                    <div className='mt-1 text-right text-md'>
                                        <p>₹{BestSelling.price}</p>
                                    </div>

                                </div>
                            </Link>

                        ))}




                    </div>


                </div>
            </section> */}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:text-4xl  text-gray-800 flex mx-auto justify-center text-center mb-10 font-heading text-4xl font-bold">
                        Top Selling
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {BestSelling.map((product) => (
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

export default BestSelling;


