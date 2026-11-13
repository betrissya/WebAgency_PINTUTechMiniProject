import React from 'react'
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
        <div>
            <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
                Our Services
                </h1>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
                Provided Features
            </h1>
        </div>
        {/* service cards*/}
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="0">
                <ServiceCard title="Design and develop" icon="/images/s1.png" />
            </div>
            <div 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="100">
                <ServiceCard title="Account Settings" icon="/images/s2.png" />
            </div>
            <div
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="200">
                <ServiceCard title="Notification Manage" icon="/images/s3.png" />
            </div>
            <div
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="300">
                <ServiceCard title="Customer Support" icon="/images/s4.png" />
            </div>
            <div
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="400">
                <ServiceCard title="Email Marketing" icon="/images/s5.png" />
            </div>
            <div
                data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delat="500">
                <ServiceCard title="Digital Agency" icon="/images/s6.png" />
            </div>
        </div>
    </div>
  );
};

export default Services