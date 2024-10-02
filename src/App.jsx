import React from 'react'
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
import blackLogo from './assets/black-logo.png'
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
      <nav className="w-full h-5 my-0 p-4 ml-2 px-10 flex justify-between">
        <img src={blackLogo} alt="logo" class="h-6 w-auto mt-2 ml-2"/>
        <div className="hidden md:flex space-x-5 mr-10 font-sans">
        <div className="pop-up relative pt-2 text-gray-800 hover:text-black text-md font-medium group"> 
            <a href="#" class="px-2 py-">Claude</a>
            <ul className="absolute left-0 hidden mt-0 w-30 bg-white rounded-md shadow-2xl border border-gray-100 text-gray-400 group-hover:block hover:text-black cursor-pointer">
                <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Overview</li>
                <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Team</li>
                <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Entreprise</li>
                <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Team</li>
                <li className="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">API</li>
            </ul>
        </div>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Researchers</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Company</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Careers</a>
                <a href="#" className="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">News</a>
        </div>        
        </nav>

        <div className="w-full flex flex-wrap justify-center items-center gap-10">
            <div className="h-auto w-[500px] ml-14">
                <h1 className="text-7xl">Meet Claude</h1>
                <p className="text-2xl my-4">
                    Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, claude is here to help.
                </p>
                <button className="h-14 w-36 rounded-lg text-white bg-black text-lg hover:border-gray-700 hover:bg-gray-700">Try Claude</button>
                <button className="mx-3 h-14 w-48 rounded-lg border border-black hover:border-gray-400 hover:text-gray-400  text-lg ">Get API access</button>
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
                <p className="text-2xl mb-6"> Raising the industry bar for intelligence with the speed and price required for high-volume use cases at scale. </p>
                <button className="h-12 w-44 rounded-2xl text-white bg-black text-md hover:border-gray-700 hover:bg-gray-700">Read the blog post</button>
            </div>
            <div>
                <img src={cost} alt="cost" class="w-[500px] h-auto flex-shrink-0 p-5"/>
            </div>
        </div>
        
        <div className="flex flex-col gap-6 items-center justify-center text-center font-sans mt-20">
            <h1 className="text-5xl font-semibold">The Claude model <br/>family</h1>
            <p className="w-[600px] text-2xl ">Right-sized for any task, the Claude family of models offers the best combination of speed and performance</p>
            <img src={cost2} alt="cost2" class="px-32 py-10"/>
        </div>

        <div className="flex flex-col gap-6 font-sans items-center justify-center mt-16">
            <h1 className="text-4xl font-semibold">Why Claude?</h1>
            <p className="text-2xl">Anthropic builds frontier AI models backed by uncompromising integrity</p>
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
            <h1 className='text-4xl font-bold text-center my-20'>Leading companies build <br />with Claude</h1>
            <Marquee autoFill className='mt-6'>
                <img src={mq1} alt="mq1" className='mx-2 my-12 h-10 '/>
                <img src={mq2} alt="mq2" className='mx-2 my-12 h-10 '/>
                <img src={mq3} alt="mq3" className='mx-2 my-12 h-10 '/>
                <img src={mq4} alt="mq4" className='mx-2 my-12 h-10 '/>
                <img src={mq5} alt="mq5" className='mx-2 my-12 h-10 '/>
                <img src={mq6} alt="mq6" className='mx-2 my-12 h-10 '/>
                <img src={mq7} alt="mq7" className='mx-2 my-12 h-10 '/>
                <img src={mq8} alt="mq8" className='mx-2 my-12 h-10 '/>
                <img src={mq9} alt="mq9" className='mx-2 my-12 h-10 '/>
                <img src={mq10} alt="mq10" className='mx-2 my-12 h-10 '/>
                <img src={mq11} alt="mq11" className='mx-2 my-12 h-10 '/>
                <img src={mq12} alt="mq12" className='mx-2 my-12 h-10 '/>
                <img src={mq13} alt="mq13" className='mx-2 my-12 h-10 '/>
                <img src={mq14} alt="mq14" className='mx-2 my-12 h-10 '/>
                <img src={mq15} alt="mq15" className='mx-2 my-12 h-10 '/>
                <img src={mq16} alt="mq16" className='mx-2 my-12 h-10 '/>
                <img src={mq17} alt="mq17" className='mx-2 my-12 h-10 '/>
                <img src={mq18} alt="mq18" className='mx-2 my-12 h-10 '/>
                <img src={mq19} alt="mq19" className='mx-2 my-12 h-10 '/>
                <img src={mq20} alt="mq20" className='mx-2 my-12 h-10 '/>
            </Marquee>
            <button className="h-12 w-52 rounded-lg text-md text-black bg-white hover:border-gray-500 hover:text-gray-500 border border-black mb-20">Read customer stories</button>
        </div>   


        <div className='px-6 md:px-20'>
            {/* First Section */}
            <div className='max-w-4xl h-auto md:h-72 ml-0 md:ml-40 my-12 px-6 rounded-3xl flex flex-col md:flex-row-reverse items-end justify-between bg-[#F0EFEA]'>
                <div className='pt-5 md:pt-0 order-1 md:order-none'>
                    <img src={talk} alt="talk" className='h-96 w-auto' />
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


        <div className='py-20 px-10 flex flex-wrap gap-12 items-center justify-around bg-white'>
            <div>
                <img src={play} alt="play" />
            </div>
            <div>
                <div>
                    <h1 className='text-2xl font-semibold my-1'>Take Claude with you</h1>
                    <p className='my-1 text-lg'>Talk to Claude, anywhere you go. Brainstorm ideas, get answers, and analyze <br /> images on the go. The Claude apps put the power of frontier intelligence in <br /> your back pocket.</p>
                    <div className='flex'>
                        <a href="">
                            <img src={google} alt="google" className='h-12 mr-4 my-2' />
                        </a>
                        <a href="">
                            <img src={apple} alt="apple" className='h-12 mr-4 my-2' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default App
    

