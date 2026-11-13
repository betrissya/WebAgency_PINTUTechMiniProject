import React from 'react'

const Order = () => {
  return (
    <div 
        data-aos="zoom-in" 
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
        className="py-20 bg-[#eff3f6] dark:bg-gray-900">
        <div>
            <h1 className="text-red-500 dark:text-red-300 font-semibold text-center">
                Booking
            </h1>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
                Book service online
            </h1>
        </div>
          <p className="mt-6 text-gray-500 dark:text-gray-300 leading-8 text-center sm:w-[80%] lg:w-[60%] mx-auto">
          The fastest way to talk to one of our Customer Service agents about your
          bookings. Yes - any cancellation fees are determined by the property.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          quis. Quasi natus dolorum illo quam voluptatem nostrum quod inventore
          excepturi!
        </p>
        <div className="text-center mt-10">
            <button className="text-white rounded-full px-14 py-4 cursor-pointer bg-pink-600 hover:bg-pink-700 transition-all duration-200">
                Book Now
            </button>
        </div>
    </div>
  )
}

export default Order