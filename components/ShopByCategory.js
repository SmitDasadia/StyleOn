/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

export default function ShopByCategory() {
    const callouts = [
        {
            name: 'T-Shirts',
            imageSrc: 'https://th.bing.com/th/id/OIP.3FFPgpBF2Lqz9ICfuM9B8wHaJ4?pid=ImgDet&w=600&h=800&rs=1',
            imageAlt: 'TShirts',
            href: '/tshirts',
        },
        {
            name: 'SportsWear',
            imageSrc: 'https://th.bing.com/th/id/OIP.p18KhU6maH2pJCZc9rri3wAAAA?pid=ImgDet&rs=1',
            imageAlt: 'SportsWear',
            href: '/sportswear',
        },
        {
            name: 'Shorts',
            imageSrc: 'https://i.pinimg.com/originals/dc/a5/25/dca525d33937b80ea4d1dce6c9806f3f.jpg',
            imageAlt: 'Shorts',
            href: '/shorts',
        },
        {
            name: 'Ethnix',
            imageSrc: 'https://th.bing.com/th/id/OIP.J844tuPuj1_aDQIFKLyh7AHaLH?pid=ImgDet&w=576&h=864&rs=1',
            imageAlt: 'Ethnix',
            href: '/ethnix',
        },

    ]   
    return (
        <>
            <section className="py-24 ">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="font-heading text-4xl font-bold">Shop By Category</h1>
                    </div>
                    <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto">
                        <div className="flex flex-wrap -mx-4 -mb-8">
                            {callouts.map((callouts) => (
                                <Link href={callouts.href} key={callouts.name} legacyBehavior>
                                    <div className="w-full md:w-1/4 xl:w-1/4 sm:w-2/4 px-4 mb-8 cursor-pointer">
                                        <div className="group block relative">
                                            <div className="relative h-96 w-auto mb-3">
                                                <img className="w-full h-full mb-3" src={callouts.imageSrc} alt={callouts.imageAlt} />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="font-bold   mb-1 transition duration-300">{callouts.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            ))}






                        </div>
                    </div>



                </div>
            </section>
        </>
    );
}
