import React, { useState, useEffect }  from 'react';
import cap1 from './assets/cap1.png'
import cap2 from './assets/cap2.png'
import cap3 from './assets/cap3.png'
import cap4 from './assets/cap4.png'
import why1 from './assets/why1.png'
import why2 from './assets/why2.png'
import why3 from './assets/why3.png'
import why4 from './assets/why4.png'
import why5 from './assets/why5.png'
import why6 from './assets/why6.png'
import cost from './assets/cost.png'
import cost2 from './assets/cost2.png'
import header from './assets/header.gif'
import blackLogo from './assets/blackLogo.png'
import whiteLogo from './assets/whiteLogos.png'
import mq1 from './assets/mq1.png'
import mq2 from './assets/mq2.png'
import mq3 from './assets/mq3.png'
import mq4 from './assets/mq4.png'
import mq5 from './assets/mq5.png'
import mq6 from './assets/mq6.png'
import mq7 from './assets/mq7.png'
import mq8 from './assets/mq8.png'
import mq9 from './assets/mq9.png'
import mq10 from './assets/mq10.png'
import mq11 from './assets/mq11.png'
import mq12 from './assets/mq12.png'
import mq13 from './assets/mq13.png'
import mq14 from './assets/mq14.png'
import mq15 from './assets/mq15.png'
import mq16 from './assets/mq16.png'
import mq17 from './assets/mq17.png'
import mq18 from './assets/mq18.png'
import mq19 from './assets/mq19.png'
import mq20 from './assets/mq20.png'
import talk from './assets/talk.png'
import build from './assets/build.png'
import play from './assets/play.png'
import google from './assets/google.png'
import apple from './assets/apple.png'
import Marquee from 'react-fast-marquee'



const App = () => {


  return (
    <>
    <div className="bg-[#FAFAF8] h-full w-full">
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

        <div className="w-full flex flex-wrap justify-center items-center gap-10">
            <div className="h-auto w-[500px] ml-14">
                <h1 className="text-5xl sm:text-6xl md:text-7xl mt-3">Meet Claude</h1>
                <p className="w-full max-w-[600px] text-xl sm:text-2xl my-4">
                    Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, claude is here to help.
                </p>
                <a href="https://claude.ai/login?returnTo=%2F%3F">
                    <button className="h-14 w-36 rounded-lg text-white bg-black text-lg hover:border-gray-700 hover:bg-gray-700">Try Claude</button>
                </a>
                <a href="https://console.anthropic.com/login?returnTo=%2F%3F">
                    <button className="mx-3 h-14 w-48 rounded-lg border border-black hover:border-gray-400 hover:text-gray-400  text-lg ">Get API access</button>
                </a>
            </div>
            <div>
                <img src={header} alt="header" class="w-[600px] h-auto flex-shrink-0 "/>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-5xl p-1">Claude's Capabilities</h1>
            <div className="flex flex-wrap w-full mt-16 items-center justify-center">
                <div className="m-8 flex flex-col items-center justify-center w-72">
                    <img src={cap1} alt="cap1" class="h-24 w-auto"/>
                    <h1 className="mt-8 text-xl font-bold font">Advanced Reasoning</h1>
                    <p className="text-xl m-8 text-center">Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation</p>
                </div>
                <div className="m-4 flex flex-col items-center justify-center w-72">
                    <img src={cap2} alt="cap1" class="h-24 w-auto"/>
                    <h1 className="mt-8 text-xl font-bold">Vision analysis</h1>
                    <p className="text-xl m-8 text-center">Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs</p>
                </div>
                <div className="m-4 flex flex-col items-center justify-center w-72">
                    <img src={cap3} alt="cap1" class="h-24 w-auto"/>
                    <h1 className="mt-8 text-xl font-bold">Code generation</h1>
                    <p className="text-xl m-8 text-center">Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases</p>
                </div>
                <div className="m-4 flex flex-col items-center justify-center w-72">
                    <img src={cap4} alt="cap1" class="h-24 w-auto"/>
                    <h1 className="mt-8 text-xl font-bold">Multilingual processing</h1>
                    <p className="text-xl m-8 text-center">Translate between various languages in real-time, practice grammar, or create multi-lingual content</p>
                </div>
            </div>
            </div>

        <div className="flex flex-wrap items-center justify-around mt-32 bg-white">
            <div className="w-[550px] m-10 font-sans">
                <h2 className="bg-orange-500 rounded-full inline px-4 py-1 text-white text-md">NEW</h2>
                <h1 className="text-3xl font-semibold mb-3 mt-3"> Introducing Claude 3.5 Sonnet </h1>
                <p className="mb-6 w-full max-w-[600px] text-xl sm:text-2xl"> Raising the industry bar for intelligence with the speed and price required for high-volume use cases at scale. </p>
                <a href="https://www.anthropic.com/news/claude-3-5-sonnet">
                    <button className="h-12 w-44 rounded-2xl text-white bg-black text-md hover:border-gray-700 hover:bg-gray-700">Read the blog post</button>
                </a>
            </div>
            <div>
                <img src={cost} alt="cost" class="w-[500px] h-auto flex-shrink-0 p-5"/>
            </div>
        </div>
        
        <div className="flex flex-col gap-6 items-center justify-center text-center font-sans mt-20 px-4 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-4xl sm:text-5xl font-semibold">The Claude model <br />family</h1>
            <p className="w-full max-w-[600px] text-xl sm:text-2xl">
                Right-sized for any task, the Claude family of models offers the best combination of speed and performance
            </p>
            <img src={cost2} alt="cost2" className="w-full h-auto max-w-[1200px] px-4 py-10" />
        </div>


        <div className="flex flex-col gap-6 font-sans items-center justify-center mt-16">
            <h1 className="text-4xl font-semibold">Why Claude?</h1>
            <p className="w-full max-w-[700px] text-xl sm:text-2xl text-center">Anthropic builds frontier AI models backed by uncompromising integrity.</p>
            <div className="flex items-start justify-around gap-10 flex-wrap mt-16">
                <div className="flex flex-col w-[450px]">
                    <h1 className="text-2xl font-semibold">Secure</h1>
                    <p className="text-xl">With accessibility via AWS and GCP, SOC 2 Type II certification, and HIPAA compliance options, Claude adheres to the security practices your enterprise demands.</p>
                </div>
                <div className="flex flex-col bg-[#EBDBBC] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why1} alt="why1" class="h-40 w-40 mb-12 mt-10 place-self-center  group-hover:scale-110 duration-200"/>
                    <h3>Featured paper</h3>
                    <h1 className="text-2xl">Many-shot jailbreaking</h1>
                </div>
                <div className="flex flex-col bg-[#F0EFEA] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why2} alt="why1" class="h-40 w-32 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                    <h3>Featured post</h3>
                    <h1 className="text-2xl">Challenges in red teaming AI systems</h1>
                </div>
            </div>
        </div>

        

        <div className="flex flex-col gap-6 font-sans items-center justify-center mt-16">
            <div className="flex items-start justify-around gap-10 flex-wrap mt-16">
                <div className="flex flex-col w-[450px]">
                    <h1 className="text-2xl font-semibold">Trustworthy</h1>
                    <p className="text-xl">Claude combines best-in-class jailbreak resistance and misuse prevention to mitigate brand risk for our customers.</p>
                </div>
                <div className="relative flex flex-col bg-[#E6E4DD] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why3} alt="why1" class="h-36 w-32 mb-12 mt-5 place-self-center  group-hover:scale-110 duration-200"/>
                    <div className="absolute bottom-4 left-0 right-0 text-left ml-6 "> 
                        <h3>Featured paper</h3>
                        <h1 className="text-2xl text-black">Red Teaming Language Models to reduce Harms: Methods, Scaling Behaviors, and Lessons Learned.</h1>
                    </div>
                </div>
                <div className="flex flex-col bg-[#EBDBBC] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why4} alt="why1" class="h-40 w-32 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                    <h3>Featured paper</h3>
                    <h1 className="text-2xl">Evaluating and Mitigating Discrimination in Language Model Decisions.</h1>
                </div>
            </div>
        </div>     
        
        <hr/>

        <div className="flex flex-col gap-6 font-sans items-center justify-center mt-16">
            <div className="flex items-start justify-around gap-10 flex-wrap mt-16">
                <div className="flex flex-col w-[450px]">
                    <h1 className="text-2xl font-semibold">Reliable</h1>
                    <p className="text-xl">Claude empowers you to deploy AI to business critical use cases, with very low hallucination rates and very high accuracy over a long documents.</p>
                </div>
                <div className="flex flex-col bg-[#CC785C] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why5} alt="why1" class="h-36 w-36 mb-12 mt-10 place-self-center  group-hover:scale-110 duration-200"/>
                    <div className="bottom-0 left-0 right-0 text-left">
                        <h3>Featured post</h3>
                        <h1 class="text-2xl">Claude's Character</h1>
                    </div>
                </div>
                <div className="flex flex-col bg-[#F0EFEA] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                    <img src={why6} alt="why1" class="h-36 w-28 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                    <h3>Featured paper</h3>
                    <h1 className="text-2xl">Questions Decomposition improves the Faithfulness of Model-Generated Reasoning</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center my-32 bg-white'>
            <h1 className='text-4xl font-bold text-center mt-24 mb-10'>Leading companies build <br />with Claude</h1>
            <Marquee autoFill className='mt-2'>
                <img src={mq1} alt="mq1" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq2} alt="mq2" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq3} alt="mq3" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq4} alt="mq4" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq5} alt="mq5" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq6} alt="mq6" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq7} alt="mq7" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq8} alt="mq8" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq9} alt="mq9" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq10} alt="mq10" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq11} alt="mq11" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq12} alt="mq12" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq13} alt="mq13" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq14} alt="mq14" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq15} alt="mq15" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq16} alt="mq16" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq17} alt="mq17" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq18} alt="mq18" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq19} alt="mq19" className='mx-2 mt-4 mb-14 h-10 '/>
                <img src={mq20} alt="mq20" className='mx-2 mt-4 mb-14 h-10 '/>
            </Marquee>
            <button className="h-12 w-52 rounded-lg text-md text-black bg-white hover:border-gray-500 hover:text-gray-500 border border-black mb-20">Read customer stories</button>
        </div>   


        <div className='px-6 md:px-20'>
            {/* First Section */}
            <div className='max-w-4xl h-auto md:h-72 ml-0 md:ml-40 my-12 px-10 rounded-3xl flex flex-col md:flex-row-reverse items-end justify-between bg-[#F0EFEA]'>
                <div className='pt-5 md:pt-0 order-1 md:order-none'>
                    <img src={talk} alt="talk" />
                </div>

                <div className='px-2 py-6 md:py-10 flex flex-col text-left order-2 md:order-none'>
                    <h1 className='text-xl md:text-2xl font-semibold my-1'>Talk to Claude</h1>
                    <p className='my-1 text-base md:text-lg'>Claude is fast, capable, and truly conversational. <br /> Work with Claude to help you do your best work</p>
                    <button className="h-10 md:h-12 w-28 md:w-32 my-4 rounded-xl text-sm md:text-md text-white bg-black hover:bg-gray-600 hover:border-gray-600 border border-black">Try Claude</button>
                </div>
            </div>

            {/* Second Section */}
            <div className='max-w-4xl h-auto md:h-72 ml-0 md:ml-72 mb-20 px-6 md:px-10 rounded-3xl flex flex-col md:flex-row items-end justify-between bg-black text-white'>
                <div className='px-4 py-6 md:py-10 flex flex-col text-left order-1'>
                    <h1 className='text-xl md:text-2xl font-semibold my-1 text-white'>Build with Claude</h1>
                    <p className='my-1 text-base md:text-lg text-white'>Use the API to integrate Claude into your and your <br /> customer workflows to let AI transform your business</p>
                    <button className="h-10 md:h-12 w-28 md:w-32 mt-4 rounded-xl text-sm md:text-md text-black bg-white">Try Claude</button>
                </div>

                <div className='order-2'>
                    <img src={build} alt="build" />
                </div>
            </div>
        </div>


        <div className='py-10 px-10 flex flex-wrap gap-3 items-center justify-evenly bg-white md:py-20'> {/* Adjust padding for mobile */}
            <div>
                <img src={play} alt="play" className='max-w-full h-auto object-contain' /> {/* Responsive image */}
            </div>
            <div>
                <div className='flex flex-col flex-wrap'>
                    <h1 className='text-2xl font-semibold my-1'>Take Claude with you</h1>
                    <p className='my-1 text-lg'>Talk to Claude, anywhere you go. Brainstorm ideas, get answers, and analyze <br /> images on the go. The Claude apps put the power of frontier intelligence in <br /> your back pocket.</p>
                    <div className='flex'>
                        <a href="https://play.google.com/store/apps/details?id=com.anthropic.claude&pli=1">
                            <img src={google} alt="google" className='h-12 mr-4 my-2' />
                        </a>
                        <a href="https://apps.apple.com/us/app/claude-by-anthropic/id6473753684">
                            <img src={apple} alt="apple" className='h-12 mr-4 my-2' />
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className='px-12 py-12 flex flex-col bg-[#F0EFEA]'>
            <div className='flex flex-col md:flex-row items-start justify-between'>
                <div>
                    <h1 className='text-3xl font-semibold'>Company News</h1>
                </div>
                <div className='mt-4 md:mt-0'> {/* Add margin-top for spacing on mobile */}
                    <p className='cursor-pointer hover:text-gray-400'>See All</p>
                </div>
            </div>


            <div className='flex flex-wrap justify-between md:py- py-6'>
                <div className='w-full md:w-1/3 pr-6 md:my-1 my-3'> 
                    <div className='bg-white px-6 py-5 rounded-3xl shadow hover:text-gray-400 transition duration-200 cursor-pointer'> {/* Inner content */}
                        <p className='py-1 text-md'>Products Announcements</p>
                        <h2 className='text-2xl font-semibold'>Introducing Contextual Retrieval</h2>
                        <p className='text-gray-400 mt-20'>Sep 20, 2024</p>
                    </div>
                </div>

                <div className='w-full md:w-1/3 pr-6 md:my-1 my-3'> 
                    <div className='bg-white px-6 py-5 rounded-3xl shadow hover:text-gray-400 transition duration-200 cursor-pointer'> {/* Inner content */}
                        <p className='py-1 text-md'>Announcements</p>
                        <h2 className='text-2xl font-semibold'>Salesforce teams up with Anthropic to enhance Einstein capabilities with Claude</h2>
                        <p className='text-gray-400 mt-4'>Sep 3, 2024</p>
                    </div>
                </div>


                <div className='w-full md:w-1/3 pr-6 md:my-1 my-3'> 
                    <div className='bg-white px-6 py-5 rounded-3xl shadow hover:text-gray-400 transition duration-200 cursor-pointer'> {/* Inner content */}
                        <p className='py-1 text-md'>Announcements</p>
                        <h2 className='text-2xl font-semibold'>Artifacts are now generally available</h2>
                        <p className='text-gray-400 mt-20'>Aug 27, 2024</p>
                    </div>
                </div>
            </div>
        </div>

        <footer className='bg-black px-8 md:px-16 py-10 md:pb-20 flex flex-col md:flex-row items-start justify-between gap-10'>
            {/* Logo Section */}
            <div className='flex-shrink-0'>
                <img src={whiteLogo} alt="logo" className='h-8 mr-24' />
            </div>

            {/* Column 1: Main Links */}
            <div className='flex flex-col items-start justify-end text-white'>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Claude</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>API</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Team</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Pricing</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Research</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Company</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Customers</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>News</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Careers</p>
            </div>

            {/* Horizontal line after each column on mobile */}
            <hr className="border-t border-gray-600 w-full md:hidden" />

            {/* Column 2: Support Links */}
            <div className='flex flex-col items-start justify-end text-white'>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Press Inquiries</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Support</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Status</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Availability</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Twitter</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>LinkedIn</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>YouTube</p>
            </div>

            {/* Horizontal line after each column on mobile */}
            <hr className="border-t border-gray-600 w-full md:hidden" />

            {/* Column 3: Legal Links */}
            <div className='flex flex-col items-start justify-end text-white'>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Terms of Service – <br /> Consumer</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Terms of Service – <br /> Commercial</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Privacy Policy</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Usage Policy</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Responsible Disclosure <br /> Policy</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Compliance</p>
                <p className='pb-2 md:pb-4 text-sm md:text-lg text-[#ada489]'>Privacy Choices</p>
            </div>

            {/* Column 4: Copyright */}
            <div className='flex-shrink-0'>
                <p className='pb-4 text-sm md:text-lg text-[#ada489]'>&copy; 2024 Anthropic PBC</p>
            </div>
        </footer>
        </div>
    </>
  )
}

export default App
    

