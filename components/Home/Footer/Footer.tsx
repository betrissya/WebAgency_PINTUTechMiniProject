import React from 'react'
import Logo from "@/components/Helper/Logo";
import { FaFacebookF, FaYoutube, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-blue-950 dark:bg-gray-900">
        {/* top part */}
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* 1st part */}
            <div>
                {/* LOGO */}
                <Logo />
                {/* description */}
                <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
                Conditions Terms of Use Ours feturesin Services ew Guests ListThe
                Team List Guests ListThe Team List
                </p>
                {/* social links */}
                <div className="flex items-center space-x-4 mt-6">
                    {/* facebook icon */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300">
                        <FaFacebookF className="w-6 h-6 text-white" />
                    </div>
                    {/* YouTube icon */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300">
                        <FaYoutube className="w-6 h-6 text-white" />
                    </div>
                    {/* instagram icon */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300">
                        <FaInstagram className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>
            {/* 2nd part */}
            <div className="lg:mx-auto">
                <h1 className="text-lg font-bold text-white">Address</h1>
                <div className="mt-8">
                    {/* address */}
                    <div className="flex items-center space-x-5">
                        <FaPaperPlane className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">
                            Old City Street, USA <br /> 1212 New york-3500
                        </p>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center space-x-5 mb-5 mt-5">
                        <FaPaperPlane className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">014 574837493</p>
                    </div>
                    {/* Email */}
                    <div className="flex items-center space-x-5 mb-5 mt-5">
                        <FaPaperPlane className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">
                            example@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            {/* 3rd part */}
            <div className="lg:mx-auto">
                <h1 className="text-lg font-bold text-white">More Services</h1>
                <div className="mt-8">
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                        <p className="font-medium text-sm text-white">UI Design</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                        <p className="font-medium text-sm text-white">Web App</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                        <p className="font-medium text-sm text-white">Digital Marketing</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                        <p className="font-medium text-sm text-white">Video Editing</p>
                    </div>
                </div>
            </div>
            {/* 4th part */}
            <div className="mx-auto">
                <h1 className="text-lg font-bold text-white">Newsletter</h1>
                <div className="mt-8">
                    <p className="font-medium text-sm text-white">
                        It is a long established fact that a reader will be distracted
                    </p>
                    <div className="mt-5 flex items-center space-x-4">
                        <Image src={"/images/f.jpg"} alt="img" width={80} height={25} />
                        <div className="flex-1">
                            <div className="flex items-center">
                                <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                                <p className="text-white text-sm font-semibold">
                                    25 October, 2026
                                </p>
                                </div>
                                <h1 className="mt-2 text-white font-bold">
                                    The standard chunk of Lorem Ipsum
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom part */}
            <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
                <p className="mt-8 text-gray-300">
                    © Webdev Warriors 2025 | All Rights Reserved
                </p>
        </div>
    </div>
  )
}

export default Footer