import { useState } from 'react'
import './App.css'

function App() {

  return (
      <div className="font-Clash h-[9046px] w-[1512px] relative">
       <div className="absolute h-[836px] w-[1086px] bg-purpleLens  bg-origin-border bg-transparent bg-blend-soft-light z-[-1] bg-no-repeat bg-[length:114.411%_118.9%] bg-[-155px_-155px] left-0 "></div>
       <div className="absolute h-[994px] w-[951px] bg-purpleLens bg-origin-border bg-transparent bg-blend-soft-light z-[-1]  bg-no-repeat bg-[length:130.652%_100%] bg-[0.25px_0px] right-0"></div>
        <header className="flex justify-between h-[141px] border-b border-gray-800">        
          <h1 className="text-white text-[36px] font-bold mt-[67px] ml-[128px]">get<span className=" text-getlink3">linked</span></h1>
          <nav className="text-white text-base mt-[63px] font-Montserrat ">
            <ul className="flex justify-around gap-4 items-center">
              <li className="ml-[56px]">Timeline</li>
              <li className="ml-[56px]">Overview</li>
              <li className="ml-[56px]">FAQs</li>
              <li className="ml-[56px]">Contacts</li>
              <button className="rounded-md px-[52px] mr-[128px] pt-4 pb-[17px] ml-[121px] bg-gradient-to-r from-gradient1 to-gradient2">Register</button>
            </ul>
          </nav>
        </header>
        <main className="text-white">
          <div id='block1' className="flex h-[813px] ">
            <div id='b1-left' className="relative">
              <img className="absolute left-[706px] top-[299px]" src="src\assets\images\chain.png" alt="chain.png" width="86px" height="86px"/>
              <img className="absolute left-[792px] top-[313px]" src="src\assets\images\blaze.png" alt="chain.png" width="58px" height="58px"/>
              <p id='hackathon' className="text-[80px] leading-[1.15] inline-block font-[700] ml-[128px] mt-[199px]">
                <span>getlinked Tech</span><br />
                <span className="ml-[3px]">Hackathon <span className="text-getlink2">1.0</span></span>
              </p>
              <p className="text-[20px] font-Montserrat font-[400] w-[522px] ml-[131px] mt-2">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <button className="rounded-md px-[52px] mt-[57px] ml-[132px] mr-[128px] pt-4 pb-[17px] bg-gradient-to-r from-gradient1 to-gradient2">Register</button>
              <div className="font-Unica mt-[77px] w-[285px] flex justify-between ml-[131px]">
                <p className=" text-[64px]">00<span className="text-sm">H</span></p>
                <p className=" text-[64px]">00<span className="text-sm">M</span></p>
                <p className=" text-[64px]">00<span className="text-sm">S</span></p>
              </div>
            </div>
            <div id='b1-right'></div>
          </div>
          
        </main>
  
        
      </div>
  )
}

export default App
