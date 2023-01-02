/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function ShopByCategory() {
    const callouts = [
        {
            name: 'T-Shirts',
          
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'TShirts',
            href: '#',
        },
        {
            name: 'Self-Improvement',
            description: 'Journals and note-taking',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]
    return (
        <>

            
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900 text-center">SHOP BY CATEGORIES</h2>

                        <div className="mt-6 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-1 lg:space-y-0 py-3">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div className="relative h-60 w-56 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={callout.href}>
                                            <span className="absolute flex inset-0 justify-center text-center" />
                                            {callout.name}
                                        </a>
                                    </h3>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
