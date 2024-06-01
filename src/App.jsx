// import { useState } from 'react'
import './App.css'

function App() {

  return (
      <div className="font-Clash relative bg-[#150E28] w-screen">
       <div className="absolute h-[627px] w-[814px] bg-purpleLens bg-origin-border bg-transparent bg-blend-soft-light z-[0] bg-no-repeat bg-[length:114.411%_118.9%] bg-[-155px_-155px] left-0 "></div>
       <div className="absolute h-[994px] w-3/5 bg-purpleLens bg-origin-border bg-transparent bg-blend-soft-light z-[-1]  bg-no-repeat bg-[length:130.652%_100%] bg-[0.25px_0px] right-0"></div>
        <header className="flex w-full justify-between h-[106px] z-10 border-b border-gray-800">        
          <h1 className="text-white text-[27px] font-bold mt-[51px] ml-[97px]">get<span className=" text-getlink3">linked</span></h1>
          <nav className="text-white text-[13px] mt-[47px] font-Montserrat mr-[96px] h-fit w-[547px] ">
            <ul className="inline-flex justify-between w-[315px] list-none items-center">
              <li className="">Timeline</li>
              <li className="ml-[44px]">Overview</li>
              <li className="ml-[44px]">FAQs</li>
              <li className="ml-[44px]">Contacts</li>
            </ul>
            <button className="rounded-md px-[40px] py-[14px] h-10 box-border leading-none ml-[92px] bg-gradient-to-r from-gradient1 text-[13px] to-gradient2">Register</button>
          </nav>
        </header>
        <main className="text-white z-10">
          <div id='block1' className="flex justify-start relative overflow-hidden w-full  min-h-[610px] border-b border-b-[#ffffff2f] ">
            <div id='b1-left' className="relative">
              <img className="absolute left-[530px] top-[224px]" src="src\assets\images\chain.png" alt="chain.png" width="62px" height="64px"/>
              <img className="absolute left-[594px] top-[234px]" src="src\assets\images\blaze.png" alt="chain.png" width="40px" height="43px"/>
              <img className="absolute left-[483px] top-[113px]" src="src\assets\images\lightbulb.png" alt="lightbulb.png" width="40px" height="43px"/>
              <p id='hackathon' className="text-[60px] text-start leading-[70px] p-0 inline-block font-[700] ml-[96px] mt-[154px]">
                <span className='w-[597px]'>getlinked Tech</span><br />
                <span className="ml-[3px] w-[569px]">Hackathon <span className="text-getlink3">1.0</span></span>
              </p>
              <p className="text-sm font-Montserrat font-[300] w-[383px] ml-[99px] mt-4">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <button className="rounded-md px-[40px] mt-[34px] ml-[99px] mr-[128px] py-[14px] text-[13px] bg-gradient-to-r from-gradient1 to-gradient2">Register</button>
              <div className="font-Unica mt-[74px] mb-[86px] w-[213px] flex justify-between ml-[102px]">
                <p className="h-9 text-[48px]">00<span className="text-sm">H</span></p>
                <p className="h-9 text-[48px]">00<span className="text-sm">M</span></p>
                <p className="h-9 text-[48px]">00<span className="text-sm">S</span></p>
              </div>
            </div>
            <p className=' absolute text-[26px] font-Montserrat italic top-7 right-14 font-semibold'>Igniting a Revolution in HR Innovation</p>
            <img className="absolute mt-[6.2rem] right-0 -mr-6 w-[621px] h-[537px] " src="src\assets\images\dazed.png" alt="dazed.png"/>
            <img className="absolute top-[86px] right-[38px] opacity-90 " src="src\assets\images\waterbubble.png" alt="waterbubble.png" width="500px" height="481px"/>
            {/* <svg width="200" height="12" className='absolute right-[60px] top-14 ' viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke-width="5" stroke="#FF26B9"/></svg> */}

          </div>

          <div id='block2' className="flex justify-between relative overflow-hidden w-full  min-h-[463px] border-b border-b-[#ffffff2f] ">
            <div id='b2-left' className="w-fit relative">
              <img className=" w-4 top-[167px] left-[152px] absolute h-[18px]" src="src\assets\images\violetstar.png"  />
              <img className="w-[37px] top-[367px] left-[536px] absolute -rotate-90 h-[43px]" src="src\assets\images\gradientsqiggle.png"  />
              <figure className="mt-10 ml-[172px] w-[367px] h-[358px] mb-[59px] relative">
                  <span className="absolute font-Montserrat font-bold text-lg top-[174px] left-36 w-[72px] text-center ">The Big Idea!</span>
                  <img className="w-full h-full" src="src\assets\images\bigidea.png"  />
              </figure>
              
            </div>
            <div id='b2-right' className="relative ">
              <p className="text-[24px] text-start leading-[40px] p-0 inline-block font-[700] mr-[218px] mt-[152px]">
                <span className='w-[597px]'>Introduction to getlinked</span><br />
                <span className="text-getlink3">tech Hackathon 1.0</span>
              </p>
              <p className="text-[13px] font-Montserrat font-[300] w-[394px] mr-[118px] mt-3">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
            </div>

          </div>


          <div id='block3' className="flex justify-between relative overflow-hidden w-full  min-h-[453px] border-b border-b-[#ffffff2f] ">
            <div id='b3-left' className="relative ">
              <p className="text-[24px] text-start leading-[40px] p-0 inline-block font-[700] mr-[218px] mt-[152px]">
                <span className='w-[597px]'>Introduction to getlinked</span><br />
                <span className="text-getlink3">tech Hackathon 1.0</span>
              </p>
              <p className="text-[13px] font-Montserrat font-[300] w-[394px] mr-[118px] mt-3">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
            </div>
            <div id='b3-right' className="w-fit relative">
              <img className=" w-4 top-[167px] left-[152px] absolute h-[18px]" src="src\assets\images\violetstar.png"  />
              <img className="w-[37px] top-[367px] left-[536px] absolute -rotate-90 h-[43px]" src="src\assets\images\gradientsqiggle.png"  />
              <figure className="mt-10 ml-[172px] w-[367px] h-[358px] mb-[59px] relative">
                  <span className="absolute font-Montserrat font-bold text-lg top-[174px] left-36 w-[72px] text-center ">The Big Idea!</span>
                  <img className="w-full h-full" src="src\assets\images\bigidea.png"  />
              </figure>
            </div>

          </div>



          {/* <svg width="530" height="648" viewBox="0 0 530 648" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z" fill="url(#paint0_linear_110_134)" fill-opacity="0.14"/>
<defs>
<linearGradient id="paint0_linear_110_134" x1="265" y1="0" x2="265" y2="648" gradientUnits="userSpaceOnUse">
<stop stop-color="#903AFF"/>
<stop offset="1" stop-color="#FF26B9"/>
</linearGradient>
</defs>
</svg> */}

        </main>
  
        
      </div>
  )
}

export default App
