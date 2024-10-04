import React from 'react'
import blackLogo from './assets/blackLogo.png'
import whiteLogo from './assets/whiteLogos.png'

const Navbar = () => {
  return (
    <>
        <nav className="w-full h-20 p-4 flex justify-between items-center bg-[#FAFAF8] sticky top-0 z-50">
            <img src={blackLogo} alt="logo" className="h-5 pl-10 w-auto"/>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button 
                    id="hamburger" 
                    className="flex items-center justify-center text-gray-800 hover:text-black focus:outline-none"
                    onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        menu.classList.toggle('hidden');
                    }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5 font-sans mr-10">
                <div className="pop-up relative pt-2 text-gray-800 hover:text-black text-md font-medium group"> 
                    <a href="#" className="px-2 py-2">Claude</a>
                    <ul className="absolute left-0 hidden mt-0 w-30 bg-white rounded-md shadow-2xl border border-gray-100 text-gray-400 group-hover:block hover:text-black cursor-pointer">
                        <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Overview</li>
                        <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Team</li>
                        <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Enterprise</li>
                        <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">API</li>
                    </ul>
                </div>
                
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Researchers</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Company</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Careers</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">News</a>
            </div>

            {/* Mobile Menu */}
            <div className="fixed inset-0 bg-black text-4xl shadow-md hidden z-50" id="mobile-menu">
                <div className="flex flex-col p-4 h-full">
                    {/* Logo and Close Button in Flex Container */}
                    <div className="flex justify-between items-end mx-6 mb-14">
                        <img src={whiteLogo} alt="logo" className='h-7'/>
                        <button 
                            className="text-white text-4xl"
                            onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                menu.classList.add('hidden'); // Hide the mobile menu
                            }}
                        >
                            &times; {/* Close Icon */}
                        </button>
                    </div>

                    {/* Claude with Dropdown */}
                    <div className="relative group">
                        <div className="text-white hover:text-gray-500 text-md font-medium py-2 flex justify-between items-center cursor-pointer px-6">
                            <span>Claude</span>
                            <svg className="w-96 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                        <ul className="absolute left-0 hidden bg-white rounded-2xl ml-60 shadow-md w-44 border border-none text-white group-hover:block text-center">
                            <li className="px-4 py-2 text-gray-400 hover:text-black text-3xl cursor-pointer">Overview</li>
                            <li className="px-4 py-2 text-gray-400 hover:text-black text-3xl cursor-pointer">Team</li>
                            <li className="px-4 py-2 text-gray-400 hover:text-black text-3xl cursor-pointer">Enterprise</li>
                            <li className="px-4 py-2 text-gray-400 hover:text-black text-3xl cursor-pointer">API</li>
                        </ul>
                    </div>

                    <div className="text-white hover:text-gray-500 text-md font-medium py-2  px-6">
                        <a href="#">Researchers</a>
                    </div>
                    <div className="text-white hover:text-gray-500 text-md font-medium py-2 px-6">
                        <a href="#">Company</a>
                    </div>
                    <div className="text-white hover:text-gray-500 text-md font-medium py-2 px-6">
                        <a href="#">Careers</a>
                    </div>
                    <div className="text-white hover:text-gray-500 text-md font-medium py-2 px-6">
                        <a href="#">News</a>
                    </div>
                </div>
            </div>      
        </nav>
    </>
  )
}

export default Navbar