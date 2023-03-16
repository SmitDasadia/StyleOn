/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Benifits = () => {
  const benifits = [
    {
      name: 'Free & Fast Delivery',
      icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
    },
    {
      name: 'Secure Payment',
      icon: 'https://cdn-icons-png.flaticon.com/512/4575/4575124.png',
    },
    
    {
      name: '24X7 Support',
      icon: 'https://cdn-icons-png.flaticon.com/512/4233/4233839.png',
    },
    {
      name: 'Easy Cancellation Policy',
      icon: 'https://cdn-icons-png.flaticon.com/512/8037/8037312.png',
    },
    
   
  ]


  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto justify-center items-center">
       
          <div className="flex flex-wrap -m-4 text-center">
            {benifits.map((benifits) => (
              <div key={benifits.name} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg> */}
                  <img src={benifits.icon} alt={benifits.name} className="text-indigo-500 w-24 h-24 mb-3 inline-block"/>
                  <h2 className="title-font font-bold text-xl text-gray-900">{benifits.name}</h2>

                </div>
              </div>

            ))}


          </div>
        </div>
      </section>
    </div>
  )
}

export default Benifits