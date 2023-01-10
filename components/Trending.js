/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Trending = () => {
    const trending = [
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


    ]
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:text-4xl  text-gray-800 flex mx-auto justify-center text-center mb-10 font-heading text-4xl font-bold">
                        Top Selling
                    </div>
                    <div className="flex flex-wrap -m-4 justify-center">


                        {trending.map((trending) => (
                            <Link href={trending.href} key={trending.title} legacyBehavior>
                                <div  className="lg:w-1/4 md:w-3/4 p-4 w-full border rounded-md cursor-pointer shadow-lg m-5">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt={trending.imageSrc} className="m-auto block h-[50vh] md:h-[45vh]" src={trending.imageSrc} />
                                    </a>
                                    <div className="mt-4 text-center md:text-left">
                                        <h2 className="text-gray-900 title-font text-md font-medium">{trending.title}</h2>
                                    </div>

                                    <div className='mt-1'>
                                        <div className="inline-flex items-center justify-center p-1">
                                            {trending.color.includes("White") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-white border border-gray-400"></div>
                                            </button>}
                                            {trending.color.includes("Red") && <button className="inline-flex items-center justify-center p-1">
                                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                            </button>}
                                            {trending.color.includes("Black") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-black"></div>
                                            </button>}
                                            {trending.color.includes("Blue") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                            </button>}
                                            {trending.color.includes("Green") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                            </button>}
                                            {trending.color.includes("Yellow") && <button className="inline-flex items-center justify-center p-1 ">
                                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                            </button>}
                                        </div>

                                    </div>

                                    <div className='mt-1'>
                                        <span className='border border-gray-300 px-1 mx-1'>{trending.size}</span>

                                    </div>

                                    <div className='mt-1 text-right text-md'>
                                        <p>₹{trending.price}</p>
                                    </div>

                                </div>
                            </Link>

                        ))}




                    </div>


                </div>
            </section>

        </div>
    );
};

export default Trending;


