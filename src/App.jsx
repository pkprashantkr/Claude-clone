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


const App = () => {
  return (
    <>
    <div class="bg-[#FAFAF8] h-full">
      <nav class="w-full h-8 my-5 ml-2 px-10 flex justify-between ">
        <img src={blackLogo} alt="logo" class="h-6 w-auto mt-2 ml-2"/>
        <div class="hidden md:flex space-x-5 mr-10 font-sans">
        <div class="pop-up relative pt-2 text-gray-800 hover:text-black text-md font-medium group"> 
            <a href="#" class="px-2 py-">Claude</a>
            <ul class="absolute left-0 hidden mt-0 w-30 bg-white rounded-md shadow-2xl border border-gray-100 text-gray-400 group-hover:block hover:text-black cursor-pointer">
                <li class="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Overview</li>
                <li class="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Team</li>
                <li class="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Entreprise</li>
                <li class="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">Team</li>
                <li class="px-4 py-1 text-gray-400 hover:text-black cursor-pointer">API</li>
            </ul>
        </div>
                <a href="#" class="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Researchers</a>
                <a href="#" class="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Company</a>
                <a href="#" class="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">Careers</a>
                <a href="#" class="px-2 py-2 text-gray-800 hover:text-black text-md font-medium">News</a>
        </div>        
      </nav>

      <div class="w-full flex flex-wrap justify-center items-center gap-10">
          <div class="h-auto w-[500px] ml-14">
              <h1 class="text-7xl">Meet Claude</h1>
              <p class="text-2xl my-4">
                  Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, claude is here to help.
              </p>
              <button class="h-14 w-36 rounded-lg text-white bg-black text-lg hover:border-gray-700 hover:bg-gray-700">Try Claude</button>
              <button class="mx-3 h-14 w-48 rounded-lg border border-black hover:border-gray-400 hover:text-gray-400  text-lg ">Get API access</button>
          </div>
          <div>
              <img src={header} alt="header" class="w-[600px] h-auto flex-shrink-0 "/>
          </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-10">
          <h1 class="text-5xl p-1">Claude's Capabilities</h1>
          <div class="flex flex-wrap w-full mt-16 items-center justify-center">
              <div class="m-8 flex flex-col items-center justify-center w-72">
                  <img src={cap1} alt="cap1" class="h-24 w-auto"/>
                  <h1 class="mt-8 text-xl font-bold font">Advanced Reasoning</h1>
                  <p class="text-xl m-8 text-center">Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation</p>
              </div>
              <div class="m-4 flex flex-col items-center justify-center w-72">
                  <img src={cap2} alt="cap1" class="h-24 w-auto"/>
                  <h1 class="mt-8 text-xl font-bold">Vision analysis</h1>
                  <p class="text-xl m-8 text-center">Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs</p>
              </div>
              <div class="m-4 flex flex-col items-center justify-center w-72">
                  <img src={cap3} alt="cap1" class="h-24 w-auto"/>
                  <h1 class="mt-8 text-xl font-bold">Code generation</h1>
                  <p class="text-xl m-8 text-center">Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases</p>
              </div>
              <div class="m-4 flex flex-col items-center justify-center w-72">
                  <img src={cap4} alt="cap1" class="h-24 w-auto"/>
                  <h1 class="mt-8 text-xl font-bold">Multilingual processing</h1>
                  <p class="text-xl m-8 text-center">Translate between various languages in real-time, practice grammar, or create multi-lingual content</p>
              </div>
          </div>
          </div>

      <div class="flex flex-wrap items-center justify-around mt-32 bg-white">
          <div class="w-[550px] m-10 font-sans">
              <h2 class="bg-orange-500 rounded-full inline px-4 py-1 text-white text-md">NEW</h2>
              <h1 class="text-3xl font-semibold mb-3 mt-3"> Introducing Claude 3.5 Sonnet </h1>
              <p class="text-2xl mb-6"> Raising the industry bar for intelligence with the speed and price required for high-volume use cases at scale. </p>
              <button class="h-12 w-44 rounded-2xl text-white bg-black text-md hover:border-gray-700 hover:bg-gray-700">Read the blog post</button>
          </div>
          <div class="">
              <img src={cost} alt="cost" class="w-[500px] h-auto flex-shrink-0 p-5"/>
          </div>
      </div>
    
      <div class="flex flex-col gap-6 items-center justify-center text-center font-sans mt-20">
          <h1 class="text-5xl font-semibold">The Claude model <br/>family</h1>
          <p class="w-[600px] text-2xl ">Right-sized for any task, the Claude family of models offers the best combination of speed and performance</p>
          <img src={cost2} alt="cost2" class="px-32 py-10"/>
      </div>

      <div class="flex flex-col gap-6 font-sans items-center justify-center mt-16">
          <h1 class="text-4xl font-semibold">Why Claude?</h1>
          <p class="text-2xl">Anthropic builds frontier AI models backed by uncompromising integrity</p>
          <div class="flex items-start justify-around gap-10 flex-wrap mt-16">
              <div class="flex flex-col w-[450px]">
                  <h1 class="text-2xl font-semibold">Secure</h1>
                  <p class="text-xl">With accessibility via AWS and GCP, SOC 2 Type II certification, and HIPAA compliance options, Claude adheres to the security practices your enterprise demands.</p>
              </div>
              <div class="flex flex-col bg-[#EBDBBC] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                  <img src={why1} alt="why1" class="h-40 w-40 mb-12 mt-10 place-self-center  group-hover:scale-110 duration-200"/>
                  <h3>Featured paper</h3>
                  <h1 class="text-2xl">Many-shot jailbreaking</h1>
              </div>
              <div class="flex flex-col bg-[#F0EFEA] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                  <img src={why2} alt="why1" class="h-40 w-32 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                  <h3>Featured post</h3>
                  <h1 class="text-2xl">Challenges in red teaming AI systems</h1>
              </div>
          </div>
      </div>

      

      <div class="flex flex-col gap-6 font-sans items-center justify-center mt-16">
        <div class="flex items-start justify-around gap-10 flex-wrap mt-16">
            <div class="flex flex-col w-[450px]">
                <h1 class="text-2xl font-semibold">Trustworthy</h1>
                <p class="text-xl">Claude combines best-in-class jailbreak resistance and misuse prevention to mitigate brand risk for our customers.</p>
            </div>
            <div class="flex flex-col bg-[#E6E4DD] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                <img src={why3} alt="why1" class="h-36 w-32 mb-12 mt-10 place-self-center  group-hover:scale-110 duration-200"/>
                <h3 class= "absolute" >Featured paper</h3>
                <h1 class="text-2xl">Red Teaming Language Models to reduce Harms: Methods, Scaling Behaviors, and Lessons Learned.</h1>
            </div>
            <div class="flex flex-col bg-[#EBDBBC] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                <img src={why4} alt="why1" class="h-40 w-32 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                <h3>Featured paper</h3>
                <h1 class="text-2xl">Evaluating and Mitigating Discrimination in Language Model Decisions.</h1>
            </div>
        </div>
      </div>     
    
      <hr/>

      <div class="flex flex-col gap-6 font-sans items-center justify-center mt-16">
        <div class="flex items-start justify-around gap-10 flex-wrap mt-16">
            <div class="flex flex-col w-[450px]">
                <h1 class="text-2xl font-semibold">Reliable</h1>
                <p class="text-xl">Claude empowers you to deploy AI to business critical use cases, with very low hallucination rates and very high accuracy over a long documents.</p>
            </div>
            <div class="flex flex-col bg-[#CC785C] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                <img src={why5} alt="why1" class="h-40 w-40 mb-12 mt-10 place-self-center  group-hover:scale-110 duration-200"/>
                <h3>Featured post</h3>
                <h1 class="text-2xl">Claude's Character</h1>
            </div>
            <div class="flex flex-col bg-[#F0EFEA] p-6 rounded-3xl w-[400px] h-[350px] group cursor-pointer">
                <img src={why6} alt="why1" class="h-36 w-28 mb-8 mt-10 place-self-center group-hover:scale-110 duration-200"/>
                <h3>Featured paper</h3>
                <h1 class="text-2xl">Questions Decomposition improves the Faithfulness of Model-Generated Reasoning</h1>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
    

