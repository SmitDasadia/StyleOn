/* eslint-disable @next/next/no-img-element */
import React from "react";

const BestSeller = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Top Selling</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">

                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png" alt="A chair with designed back" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in red color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png" alt="A chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png" alt="A sofa chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in brown color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    );
};

export default BestSeller;
