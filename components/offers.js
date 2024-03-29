/* eslint-disable @next/next/no-img-element */
import React from "react";



const Offers = () => {
    return (
        <>
            


            <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
                <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="flex flex-col md:flex-row items-strech justify-between  py-6 px-6 md:py-12 lg:px-12 md:w-10/12 lg:w-10/12 xl:w-6/12 2xl:w-9/12 sm:w-10/12">
                    <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="https://img.freepik.com/premium-vector/discount-flash-sale-up-50-off_55239-47.jpg?w=900" alt="" />
                        </div>
                        
                        
                    </div>
                    <div className="flex flex-col md:flex-row items-strech justify-between  py-6 px-6 md:py-12 lg:px-12 md:w-10/12 lg:w-10/12 xl:w-6/12 2xl:w-9/12 sm:w-10/12">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">
                                Save upto <span className="font-bold">50%</span>
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="https://img.freepik.com/free-photo/cyber-monday-text-jeans-with-sale-tag_23-2148285099.jpg?w=740&t=st=1675749512~exp=1675750112~hmac=d73b9ffb64bf12232af5df72010d160cc23123166c4f47c73de24f10d34ec87d" alt="" />
                        </div>
                    </div>
                  

                </div>
            </div>
          

            
        </>
    );
}



export default Offers