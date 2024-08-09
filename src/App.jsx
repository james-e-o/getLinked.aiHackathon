import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  const [dropState, setDropState] = useState(false)

  useEffect(() => {
      // const dropBox = document.getElementById("drop-box")
      // dropBox.onclick = () => {
      //     dropBox.classList.togg("drop-open")
      // }
  })
  return (
    
      <div className="font-Clash z-0 relative h-screen overflow-y-scroll overflow-x-clip bg-getlinklight w-screen">
       <div className="hidden md:block absolute w-[34.6rem] h-[26.6rem] bg-mobilepurpleLens bg-origin-border bg-blend-hard-light z-[-1] bg-getlinklight bg-no-repeat top-0 bg-contain left-0 "></div>
       <div className="hidden md:block rotateY  absolute w-[30.3rem] h-[31.7rem] bg-mobilepurpleLens bg-origin-border bg-blend-hard-light z-[-1] bg-getlinklight bg-no-repeat top-0 bg-contain right-0"></div>
       <div className="absolute md:hidden bg-mobilepurpleLens w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlinklight z-[-1] bg-blend-hard-light bg-no-repeat "></div>
        <header className="flex w-full items-center sticky md:relative z-50 bg-getlinklight top-0 left-0 right-0 md:justify-around pt-3 md:pt-8 md:pb-4 md:h-fit h-[4.3rem] px-[3rem] md:gap-[10.95rem] md:px-11 justify-between border-b border-gray-800">        
          <h1 className="text-white text-[0.93rem] md:text-[1.14rem] z-10 font-bold ">get<span className=" text-getlink3">linked</span></h1>
          <div className='md:hidden text-white z-10'>
              <p onClick={()=>setDropState(!dropState)} className='p-1 w-fit h-fit'>{menu}</p>
              <div id='drop-box' className={dropState?'absolute bg-getlink border-b border-gray-600 font-Inter font-medium text-lg p-16  w-full top-0 z-30 pointer-events-auto right-0 h-[27rem] transition-[_opacity_150ms_ease-in-out_,_top_150ms_ease-in_]':"absolute font-Inter font-medium text-lg p-16 bg-getlink opacity-0 left-0 -top-1/2 w-full pointer-events-none -z-50 transition-[_opacity_100ms_ease-in-out_,_top_150ms_ease-in_]"}>
                    <p className='flex justify-end'><figure className='flex scale-105 justify-center items-center p-3 -top-6 -right-6 w-fit h-fit relative' onClick={()=>setDropState(false)} >
                        <svg className='relative' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_181_74)"/><defs><linearGradient id="paint0_linear_181_74" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#903AFF"/><stop offset="1" stopColor="#FF26B9"/></linearGradient></defs></svg>
                        <svg className='absolute' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.2201 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.7799C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765766 10.8871 0.502344 10.6924 0.307616C10.4977 0.112887 10.2342 0.00243265 9.95886 3.96967e-05C9.68348 -0.00235326 9.41818 0.103507 9.2201 0.294822L5.50634 4.00858L1.79259 0.294822C1.5945 0.103507 1.3292 -0.00235326 1.05383 3.96967e-05C0.778448 0.00243265 0.515027 0.112887 0.320299 0.307616C0.12557 0.502344 0.0151142 0.765766 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.7799L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z" fill="#F8F8F8"/></svg>
                    </figure></p>
                    <Link to={'/#'}><p className='mb-2 mt-6'>Timeline</p></Link>
                    <Link to={'/#'}><p className='mb-3 p-1'>Overview</p></Link>
                    <Link to={'/#'}><p className='mb-3 p-1'>FAQs</p></Link>
                    <Link to={'/contact'}><p className='mb-3 p-1'>Contact</p></Link>
                    <Link to={'/register'}><button className="rounded-lg font-Montserrat relative flex justify-center items-center mt-5 px-[3.3rem] py-4 text-base bg-gradient-to-r from-gradient1 to-gradient2"><span>Register</span>
                    </button></Link>
              </div>
          </div>
          <nav className="hidden md:flex justify-center gap-[3.5rem] text-white font-Montserrat h-fit w-fit">
            <ul className="inline-flex justify-center gap-7 w-fit font-normal text-[0.53rem] list-none items-center">
              <Link to={'/#'}><li className="">Timeline</li></Link>
              <Link to={'/#'}><li className="">Overview</li></Link>
              <Link to={'/#'}><li className="">FAQs</li></Link>
              <Link to={'/contact'}><li className="">Contact</li></Link>
            </ul>
            <button className="rounded px-6 py-[0.53rem] flex items-center justify-center box-border bg-gradient-to-r from-gradient1 h-fit text-[0.53rem] to-gradient2"><span>Register</span></button>
          </nav>
        </header>
        <main className="text-white box-border overflow-x-hidden -z-[2] w-screen ">
          <div id='block1' className="flex items-center justify-start md:justify-around md:gap-[20.4rem] relative md:flex-row md:items-start overflow-hidden w-full flex-col border-b border-b-[#ffffff2f] ">
              <div className='text-center md:hidden relative text-sm font-Montserrat italic mt-[1.94rem] font-semibold'>
                <p className='text-center w-full '>Igniting a Revolution in HR Innovation</p>
                <p className='text-end flex justify-end w-full pr-4'>{pinkbowsm}</p>
              </div>
              <div className='mt-10 flex md:justify-center md:pl-11 md:mt-[6.5rem] md:w-fit justify-start flex-col w-screen md:items-start items-center leading-[1.2]'>
                <p className='relative font-bold text-[2rem] md:text-4xl' >
                  getlinked Tech
                  <img className="absolute w-[1.125rem] h-[1.44rem] bottom-[1.86rem] right-[1.063rem]" src="/lightbulb.png"/>
                  <img className="absolute  w-[0.625rem] h-[0.75rem]  bottom-[3.125rem] left-[2.875rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                  <img className="absolute w-[0.375rem] h-[0.5rem] bottom-[3.125rem] -right-[0.812rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                  </p>
                    <p className='font-bold text-[2rem] md:text-[2.5rem] md:w-max' >
                      <span className="md:text-4xl">Hackathon <span className="text-getlink3">1.0</span></span>
                        <img className="md:w-10 aspect-square w-[2rem] inline-block" src="/chain.png" alt="chain.png" />
                        <img className="md:w-[1.8rem] aspect-square w-[1.37rem] inline-block" src="/blaze.png" alt="chain.png" />
                    </p>
                    <p className="md:text-[0.68rem] md:mt-[0.69rem] text-[0.813rem] font-Montserrat md:leading-[1.7] leading-[1.8] font-[300] mt-[1.5rem]">Participate in getlinked tech Hackathon <br /> 2023 stand a chance to win a Big prize</p>
                    <Link to={'/register'}><button className="md:mt-5 font-normal font-Montserrat md:text-xs text-sm md:text-[0.87rem] md:py-3 mt-6 rounded px-7 py-[0.6rem] flex items-center justify-center box-border bg-gradient-to-r from-gradient1 h-fit  to-gradient2"><span>Register</span>
                    <img className=' absolute w-[0.375rem] h-[0.5rem] top-[1.125rem] -right-[1.313rem]' src="/gray-mini-star.png" alt="gray-mini-star" /></button></Link>
                    <div className="md:my-9 leading-[1.33] font-Unica gap-[1.5rem] my-[1.43rem] flex justify-center">
                      <p className="md:text-[2.2rem] h-9 text-[3rem]">00<span className="md:text-[0.5rem] font-Montserrat text-sm">H</span></p>
                      <p className="md:text-[2.2rem] h-9 text-[3rem]">00<span className="md:text-[0.5rem] font-Montserrat text-sm">M</span></p>
                      <p className="md:text-[2.2rem] h-9 text-[3rem]">00<span className="md:text-[0.5rem] font-Montserrat text-sm">S</span></p>
                    </div>
                </div>
                <div>
                  <div className='text-center hidden md:block text-lg font-Montserrat italic absolute right-6 top-5 font-semibold'>
                    <p className='text-center w-full '>Igniting a Revolution in HR Innovation</p>
                    <p className='text-end flex justify-end w-full pr-1'>{pinkbowsm}</p>
                  </div>
                  <div className='md:absolute md:top-0 md:-right-3 md:w-fit md:mt-16 z-10 items-center flex justify-center relative box-border mt-6 pt-2 overflow-hidden-x w-full md:h-fit h-fit'>
                  
                    <img className=" w-full md:w-[25rem]  -hue-rotate-180" src="/dazed.png" alt="dazed.png"/>
                    <img className="absolute w-full  " src="/waterbubble.png" alt="waterbubble.png"/>
                  </div>
                </div>
          </div>


          <div id='block2' className="flex flex-col md:flex-row md:gap-[3rem] md:justify-between md:px-[4.5rem] md:pb-10 pb-[4.3rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-8 border-b-[#ffffff2f] ">
            <div id='b2-left/top' className="md:mb-0 w-fit relative mb-[3.83rem]">
              <figure className="md:w-64 md:h-60 w-[16.5rem] h-[16.06rem] flex items-center justify-center relative">
                  <span className="absolute font-Montserrat font-bold text-center text-base md:text-lg top-[7.662rem]">The Big <br /> Idea!</span>
                  <img className="w-full h-full" src="/bigidea.png"  />
                  <img className="md:-left-4 md:w-[0.63rem] md:h-3 w-[0.69rem] top-[5.187rem] -left-[0.38rem] absolute h-[0.81rem]" src="/violetstar.png"  />
                  <img className="md:-bottom-2 md:left-full md:w-6 md:h-7 w-[1.22rem] -bottom-[1.9rem] left-[7.38rem] absolute -rotate-90 h-[1.43rem]" src="/gradientsqiggle.png"  />
              </figure>
            </div>

            <div id='b2-right/bottom' className="md:items-start  top-2 flex justify-start items-center flex-col">
              <p className="md:text-base md:text-start text-xl text-center relative leading-[1.33] p-0 inline-block font-bold">
                <span className=''>Introduction to getlinked</span><br />
                <span className="text-getlink3">tech Hackathon 1.0</span>
                <img className="md:-right-14 md:w-[0.94rem] md:h-[1.13rem] w-[0.5rem] top-[1.4rem] -right-[1.13rem] absolute h-[0.63rem]" src="/slatestar.png"  />
              </p>
              <p className=" md:text-[0.5rem] md:text-start md:px-0 md:leading-4 md:mt-2 md:max-w-[16.7rem] text-[0.82rem] px-10 text-center font-Montserrat font-light leading-[1.72rem] mt-3">
                {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
            </div>
          </div>
        

          <div id='block3' className="flex md:flex-row-reverse flex-col md:gap-7 md:justify-around md:pl-20 md:max-h-[19.3rem] md:items-start pb-[3rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full border-b-[#ffffff2f] ">

          {/* <div className="absolute md:hidden bg-rightMobilepurpleLens w-[12.8rem] bottom-[8rem] -right-4 h-[23.33rem] bg-origin-border bg-getlink z-[-1] bg-blend-hard-light bg-no-repeat "></div>
          <div className="absolute md:hidden bg-mobilepurpleLens top-[45.25rem] -translate-y-14 w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlink z-[-2] bg-blend-hard-light bg-no-repeat "></div>
           */}
            <div id='b3-right' className="w-fit relative md:mr-[0.31rem] mb-2">
              <img className="absolute  w-[0.625rem] h-[0.75rem] top-[11.56rem] -left-[0.31rem]" src="/white-mini-star.png" alt="white-mini-star"/>
              <figure className="relative md:w-[21rem] md:h-[21rem] md:-top-4 w-[18.38rem] h-[23.88rem]">
                  <img className=" hidden md:inline-block w-full h-full" src="/tablady.png"  />
                  <img className=" md:hidden w-full h-full" src="/m-tablady.png"  />
              </figure>
            </div>
          
            <div id='b3-left' className="relative md:items-start flex pt-2 flex-col items-center">
              <p className="text-[1.25rem] text-start md:mt-14 relative leading-[133%] p-0 inline-block font-[700]">
                <span className=''>Rules and
                </span><br />
                <span className="text-getlink3">Guidelines</span>
                <img className="absolute w-[0.75rem] h-[0.88rem] top-[3.125rem] -right-[5.44rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              </p>
              <p className=" md:text-[0.5rem] md:text-start md:px-0 px-8 md:leading-4 md:mt-2 md:max-w-[16.7rem] text-[0.82rem] text-center relative font-Montserrat font-light leading-[1.72rem] mt-3">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
              <img className="absolute w-[0.625rem] h-[0.75rem] -bottom-[1.44rem] left-[3.94rem]" src="/white-mini-star.png" alt="white-mini-star"/>
              </p>
            </div>

          </div>


          <div id='block4' className="flex flex-col md:px-8 md:gap-6 md:flex-row md:justify-around md:items-start md:pb-20 justify-start pb-[2.88rem] relative overflow-hidden items-center w-screen border-b border-b-[#ffffff2f] ">
          
          <div className="absolute md:hidden bg-rightMobilepurpleLens w-[12.8rem] bottom-[1.6rem] -right-4 h-[23.33rem] bg-origin-border bg-getlinklight z-[-1] bg-blend-hard-light bg-no-repeat "></div>
          <div className="absolute md:hidden bg-mobilepurpleLens top-[9.5rem] -translate-y-14 w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlinklight z-[-2] bg-blend-hard-light bg-no-repeat "></div>

            <div id='b4-left' className="w-fit relative">
              <img className=" w-[0.81rem] top-[2.63rem] left-36 absolute h-[1.1rem]" src="/violetstar.png"  />
              <img className="absolute w-[0.75rem] h-[0.88rem] bottom-[7.125rem] right-[8.6rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              <figure className="md:w-[19rem] md:mt-32 mt-[4.625rem]  w-[20.7rem] h-[17.188rem] relative">
                  <img className="w-full h-full" src="/statisticians.png"  />
              </figure>
              
            </div>
            <div id='b4-right' className="relative md:items-start flex flex-col items-center justify-start ">
              <p className="md:text-start md:mt-10 md:text-[1.13rem] text-2xl text-center leading-[133%] p-0 inline-block font-[700]">
                <span className=''>Judging Criteria</span><br />        
                <span className="text-getlink3"> Key attributes</span>
              </p>
                  <div className='flex md:items-start justify-start items-center flex-col'>
                    <p className="text-[0.81rem] md:text-start md:text-[0.5rem] text-center font-Montserrat font-[300] max-w-[18rem] md:max-w-[24.625rem] mb-2 mt-4">
                      <span className=" text-gradient1 font-semibold">Innovation and Creativity: </span> 
                      <span className=''>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span>  
                    </p>
                    <p className="text-[0.81rem] md:text-start md:text-[0.5rem] text-center font-Montserrat font-[300] max-w-[18rem] md:max-w-[24.625rem] mb-2 mt-4">
                      <span className=" text-gradient1 font-semibold">Functionality: </span> 
                      <span className=''> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span>  
                    </p>
                    <p className="text-[0.81rem] md:text-start md:text-[0.5rem] text-center font-Montserrat font-[300] max-w-[18rem] md:max-w-[24.625rem] mb-2 mt-4">
                      <span className=" text-gradient1 font-semibold">Impact and Relevance: </span> 
                      <span className=''> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span>  
                    </p>
                    <p className="text-[0.81rem] md:text-start md:text-[0.5rem] text-center font-Montserrat font-[300] max-w-[18rem] md:max-w-[24.625rem] mb-2 mt-4">
                      <span className=" text-gradient1 font-semibold">Technical Complexity:  </span> 
                      <span className=''>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span>  
                    </p>
                    <p className="text-[0.81rem] md:text-start md:text-[0.5rem] text-center font-Montserrat font-[300] max-w-[18rem] md:max-w-[24.625rem] mb-2 mt-4">
                      <span className=" text-gradient1 font-semibold">Adherence to Hackathon Rules: </span> 
                      <span className=''> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span>  
                    </p>
                    <button className="rounded-sm relative flex justify-center items-center mt-7 text-xs px-4 py-2 bg-gradient-to-r from-gradient1 to-gradient2"><span>Read more</span>
                    <img className="absolute w-[0.625rem] h-[0.75rem] bottom-[1.1rem] -right-[5.42rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                    </button>
                </div>
            </div>

          </div>


          <div id='block5' className="flex flex-col md:flex-row md:gap-3 md:items-start md:pb-6 justify-start p pt-[3.125rem]  px-10 pb-[2.75rem] relative overflow-hidden items-center w-full border-b border-b-[#ffffff2f] ">
            <div id='b5-left' className="md:items-start md:scale-95 flex flex-col items-center relative ">
              <p className="md:text-base md:text-start text-[1.25rem] relative text-center leading-[133%] p-0 inline-block font-[700]">
                <span className=''>Frequently asked 
                </span><br />
                <span className="text-getlink3">Questions</span>
                <img className=" w-[0.81rem] bottom-[2.81rem] -left-[2.44rem] absolute h-[1.1rem]" src="/violetstar.png"  />
              </p>
              <p className="md:text-[0.5rem] md:text-start md:leading-[1.2rem] text-xs font-Montserrat leading-[1.7rem] text-center font-[400] mt-2">We got answers to the questions that you might want to ask about <span className='font-semibold'>getlinked Hackathon 1.0</span></p>
              <div className='md:text-[0.5rem] md:w-60 md:mt-3 md text-xs font-Montserrat mt-11'>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I work on a project I started before the hackathon?</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens if I need help during the hackathon?</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens if I dont have an idea for a project?</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I join a team or do I have to come with one?</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens after the hackathon ends</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='md:mx-0 leading-[1.125rem] md:mb-1 items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I work on a project I started before the hackathon?</span>
                  <button className='md:text-lg border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>

              </div>
            </div>
            <div id='b5-right' className="w-fit relative">
              <figure className="md:mt-1 md:w-[23rem] mt-[5.3rem] w-[20.44rem] scale-90 md:scale-105 aspect-square relative">
                  <img className="w-full h-full" src="/cloudthinker.png"  />

                  <p className='font-Madetommy text-4xl text-getlink2 absolute -top-[0.44rem] left-11'>?</p>
                  <p className='font-Madetommy text-[4rem] text-getlink3 absolute -top-14 left-[6.75rem]'>?</p>
                  <p className='font-Madetommy text-4xl text-getlink2 absolute -top-[0.44rem] left-[11.69rem]'>?</p>
                  <img className="absolute w-[1rem] h-5 -bottom-[0.31rem] right-[3.81rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                  <img className=" w-[0.63rem] bottom-full right-[10.19rem] absolute h-[0.63rem]" src="/violetstar.png"  />
                  <img className=" w-[0.44rem] top-[6.25rem] left-[4.125rem] absolute h-[0.56rem]" src="/violetstar.png"  />
                  <img className="absolute w-[0.63rem] h-[0.75rem] bottom-[9.87rem] left-[1.18rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              </figure>
            </div> 
          </div> 


          <div id='block6' className="flex flex-col gap-[3.83rem] px-10 md:pb-14 pb-20 border-b border-gray-500 box-border justify-start items-center relative overflow-hidden w-full pt-8 border-b-[#ffffff2f] ">
            <div id='b6-right/bottom' className="relative md:pt-0 flex justify-start items-center flex-col  pt-20">
              <p className="text-xl text-center leading-[1.33] p-0 inline-block font-bold">
                <span className=''>Timeline</span>
              </p>
              <p className="text-xs md:text-[0.565rem] font-Montserrat relative leading-[1.72rem] text-center font-[400] mt-2">Here is the breakdown of the time we <br />anticipate using for the upcoming event.
              <img className=" w-[0.88rem] -bottom-6 left-[2.1rem] absolute h-[1rem]" src="/violetstar.png"  />
              </p>
              {/* MOBILE TIMELINE LIST */}
              <div className='md:hidden text-xs font-Montserrat mt-12'>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Hackathon Announcement</p>
                  <p className='font-normal'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>1</span></figure>
                </div>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Teams Registration begins</p>
                  <p className='font-normal'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>2</span></figure>
                </div>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Teams Registration ends</p>
                  <p className='font-normal'>Interested Participants are no longer Allowed to register</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>3</span></figure>
                  <img className="absolute w-[0.625rem] h-3 bottom-0 left-[14.4rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                </div>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Announcement of the accepted teams and ideas</p>
                  <p className='font-normal'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced.</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>4</span></figure>
                </div>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Getlinked Hackathon 1.0 Offically Begins</p>
                  <p className='font-normal'>Accepted teams can now proceed to build their ground breaking skill driven solutions.</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>5</span></figure>
                </div>
                <div className='leading-[1.125rem] relative items-start gap-1 text-start flex flex-col mb-8 mx-2 border-l-2 pl-4 border-getlink3' >
                  <p className=' text-getlink3 font-bold text-xs'>Demo Day</p>
                  <p className='font-normal'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                  <p className=' text-getlink3 font-bold text-xs'>November 18, 2023</p>
                  <figure className='absolute flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-2 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem]  -left-[0.08rem] -translate-x-1/2 bg-getlink3 font-semibold text-[0.58rem]'><span>6</span></figure>
                  <img className="absolute w-[0.63rem] h-3 -bottom-[2.125rem] -left-[1.36rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                </div>
              </div>
               
              {/* DESKTOP TIMELINE LIST */}
              <div className='hidden md:block mt-24 font-Montserrat'>
                  <div className='flex justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.52rem]">
                    <p className='text-end text-xs text-getlink3 font-bold'>Hackathon Announcement</p>
                    <p className='text-end font-normal leading-3 mt-[0.28rem]'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-14 before:-top-16 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>1</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.5rem]">
                    <p className=' text-getlink3 text-xs font-bold'>November 18, 2023</p>
                    </div>
                  </div>
                  {/* #2 */}
                  <div className='flex mt-10 justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.5rem]">
                      <p className=' text-getlink3 text-end text-xs font-bold'>November 18, 2023</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-9 before:-top-11 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>2</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.52rem]">
                      <p className='text-start text-xs text-getlink3 font-bold'>Teams Registration begins</p>
                      <p className='text-start font-normal leading-3 mt-[0.28rem]'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register.</p>
                    </div>
                  </div>
                   {/* #3 */}
                  <div className='flex mt-10 justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.52rem]">
                    <p className='text-end text-xs text-getlink3 font-bold'>Teams Registration ends</p>
                    <p className='text-end font-normal leading-3 mt-[0.28rem]'>Interested Participants are no longer Allowed to register.</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-9 before:-top-11 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>3</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.5rem]">
                    <p className=' text-getlink3 text-xs font-bold'>November 18, 2023</p>
                    </div>
                  </div>
                   {/* #4 */}
                  <div className='flex mt-10 justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.5rem]">
                      <p className=' text-getlink3 text-end text-xs font-bold'>November 18, 2023</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-9 before:-top-11 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>4</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.52rem]">
                      <p className='text-start text-xs text-getlink3 font-bold'>Announcement of the accepted teams and ideas</p>
                      <p className='text-start font-normal leading-3 mt-[0.28rem]'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced.</p>
                    </div>
                  </div>
                  {/* #5 */}
                  <div className='flex mt-10 justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.52rem]">
                    <p className='text-end text-xs text-getlink3 font-bold'>Getlinked Hackathon 1.0 Offically Begins</p>
                    <p className='text-end font-normal leading-3 mt-[0.28rem]'>Accepted teams can now proceed to build their ground breaking skill driven solutions.</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-9 before:-top-11 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>5</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.5rem]">
                    <p className=' text-getlink3 text-xs font-bold'>November 18, 2023</p>
                    </div>
                  </div>
                  {/* #6 */}
                  <div className='flex mt-10 justify-center gap-8 items-center'>
                    <div className="flex-col items-end w-[14.9rem] text-[0.5rem]">
                      <p className=' text-getlink3 text-end text-xs font-bold'>November 18, 2023</p>
                    </div>
                    <figure className='relative flex items-center justify-center text-center w-[1.19rem] h-[1.19rem] p-4 border-[0.63em] border-getlink rounded-full bottom-[-0.35rem] bg-getlink3 font-semibold text-[0.58rem] before:absolute before:w-[0.13rem] before:h-9 before:-top-11 before:bg-getlink3 before:-translate-x-1/2'><span className='text-xs'>6</span></figure>
                    <div className="flex-col items-start w-[14.9rem] text-[0.52rem]">
                      <p className='text-start text-xs text-getlink3 font-bold'>Demo Day</p>
                      <p className='text-start font-normal leading-3 mt-[0.28rem]'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>


          <div id='block7' className="flex flex-col md:flex-row md:gap-10 md:justify-around md:px-20 md:pt-9 md:pb-14 gap-[3.83rem] pb-[5.7rem] border-b bg-getlinklight2 border-gray-500 justify-between items-center relative overflow-hidden w-full pt-[4.5rem] border-b-[#ffffff2f] ">
            
            <div className="absolute md:hidden bg-rightMobilepurpleLens w-[12.8rem] bottom-[1.4rem] -right-4 h-[23.33rem] bg-origin-border bg-getlink z-[-1] bg-blend-hard-light bg-no-repeat "></div>
            <div className="absolute md:hidden bg-mobilepurpleLens top-[7rem] -translate-y-14 w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlink z-[-2] bg-blend-hard-light bg-no-repeat "></div>
            <div className="absolute md:hidden bg-mobilepurpleLens -bottom-[21.3rem] w-[24.75rem] left-[-3.875rem] h-[27.63rem] bg-origin-border bg-getlink z-[-3] bg-blend-hard-light bg-no-repeat "></div>
            
            <div id='b7-right/bottom' className="relative md:hidden flex justify-start items-center flex-col">
              <p className="text-xl relative text-center leading-6 p-0 inline-block font-bold">
                <span className=''>Prizes and</span><br />
                <span className="text-getlink3">Rewards</span>

                <img className=" w-[0.44rem] -top-[1.063rem] -left-[4.8rem] absolute h-[0.56rem]" src="/violetstar.png"/>
                <img className=" w-[0.44rem] top-[1.19rem] -right-[1.45rem] absolute h-[0.56rem]" src="/violetstar.png"/>
              </p>
              <p className="text-[0.82rem] px-10 text-center font-Montserrat font-light leading-[1.72rem] mt-3">
                Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            
            <div id='b7-left/top' className="w-fit relative">
              <figure className="md:w-[12.4rem] md:h-[10.9rem] w-[20.1rem] scale-125 -top-2 h-[17.63rem] flex items-center justify-center relative">
                  <img className="w-full h-full md:hidden" src="/dartncup.png"  />
                  <img className="w-full h-full md:inline-block hidden" src="/dartncup-deskop.png"  />

                  <img className="absolute w-[0.625rem] h-3 bottom-0 left-[3.63rem]" src="/white-mini-star.png"/>
                  <img className="absolute w-[0.625rem] h-3 -bottom-9 right-10" src="/white-mini-star.png"/>
               
              </figure>
            </div>
            <div className='md:flex md:flex-col md:items-center md:gap-10'>
              <div id='b7-right/bottom' className="relative hidden md:flex justify-start items-center flex-col">
                <p className="text-base relative text-start leading-6 p-0 inline-block font-bold">
                  <span className=''>Prizes and</span><br />
                  <span className="text-getlink3">Rewards</span>

                  <img className=" w-[0.44rem] -top-[1.063rem] -left-[4.8rem] absolute h-[0.56rem]" src="/violetstar.png"/>
                  <img className=" w-[0.44rem] top-[1.19rem] -right-[1.45rem] absolute h-[0.56rem]" src="/violetstar.png"/>
                </p>
                <p className="text-[0.52rem] px-0 text-start font-Montserrat font-light leading-[1.72rem] mt-2">
                  Highlight of the prizes or rewards for winners and for participants.</p>
              </div>
              <div className='flex items-center md:w-fit font-Montserrat mt-[3.2rem] relative justify-center gap-4'>
                  <div className='w-[5.65rem] bg-[#D434FE1F] rounded-md border border-getlink3 flex flex-col gap-1 items-center justify-center h-[7.8rem] relative'>
                    <img className="absolute w-[4.75rem] h-[4.78rem] -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/silvermedal.png"/>
                    <p className='text-xs text-center relative top-3 font-semibold'>2nd <br />Runner</p>
                    <p className='text-sm text-getlink3 font-bold relative top-3'>N300,000</p>
                  </div>
                  <div className='w-[5.65rem] bg-[#903AFF1F] rounded-md border border-getlink2 flex flex-col gap-1 items-center justify-center h-[9.21rem] relative'>
                    <img className="absolute w-[5.65rem] scale-[1.4] aspect-square -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/goldmedal.png"/>
                    <p className='text-xs text-center relative top-6 font-semibold'>1st <br />Runner</p>
                    <p className='text-sm text-getlink2 font-bold relative top-6'>N400,000</p>
                  </div>
                  <div className='w-[5.65rem] bg-[#D434FE1F] rounded-md border border-getlink3 flex flex-col gap-1 items-center justify-center h-[7.8rem] relative'>
                    <img className="absolute w-[4.75rem] h-[4.78rem] -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/bronzemedal.png"/>
                    <p className='text-xs text-center relative top-3 font-semibold'>3rd <br />Runner</p>
                    <p className='text-sm text-getlink3 font-bold relative top-3'>N150,000</p>

                    <img className="absolute w-[0.63rem] h-3 -bottom-12 right-[1.19rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                  </div>
              </div>
            </div>
           </div>


           <div id='block8' className="flex flex-col before:w-full before:absolute before:bg-getlinklight before:inset-0 before:-z-10 gap-[3.83rem] pb-[5.7rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-[2.7rem] border-b-[#ffffff2f] ">
           
              <div className="absolute md:hidden rotateY bg-mobilepurpleLens bg-[60%_50%] w-[14.5rem] -bottom-[10rem] translate-y-1/3 -right-4 h-[23.33rem] bg-origin-border bg-getlinklight z-[-1] bg-blend-hard-light bg-no-repeat "></div>
              <div className="absolute md:hidden bg-mobilepurpleLens -top-[6rem] w-[24.75rem] left-[-4rem] h-[27.63rem] bg-origin-border bg-getlinklight z-[-2] bg-blend-hard-light bg-no-repeat "></div>  
             
              <div id='b7-left/top' className="relative flex justify-start items-center flex-col">
                  <p className="md:text-base text-xl relative text-center leading-6 p-0 inline-block font-bold">
                      <span className=''>Partners and Sponsors</span>
                  </p>
                  <p className="md:text-[0.53rem] text-[0.82rem] px-10 text-center font-Montserrat font-light mt-2 leading-[1.67rem]">
                  Getlinked Hackathon 1.0 is honored to have the following major <br className='hidden md:block' /> companies as its partners and sponsors
                  </p>
              </div>
              <div className='md:px-12 md:py-16 md:rounded-md py-5 px-7 border relative border-getlink3 rounded-lg'>
                  <table id='right/bottom' className="relative">
                      <tr>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] border-getlink3 p-2 border-b-2 '>
                            <img src="/liberassured.png" className='align-middle mx-auto md:w-16 md:py-1 md:h-14 w-8 h-8' />
                        </td>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] border-getlink3 border-l-2 p-2 border-b-2'>
                            <img src="/liberpay.png" className='align-middle mx-auto md:w-28 md:py-1 md:h-6 w-[3.54rem] h-[0.65rem]' />
                        </td>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] border-getlink3 border-l-2 p-2 border-b-2'>
                            <img src="/winwise.png" className='align-middle mx-auto md:w-16 md:py-1 md:h-14 w-[2.13rem] h-7' />
                        </td>
                      </tr>
                      <tr>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] p-2'>
                            <img src="/whisperms.png" className='md:w-16 md:h-14 md:py-1 w-[2.44rem] mx-auto align-middle h-[1.81] ' />
                        </td>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] text-center border-l-2 border-getlink3 p-2'>
                            <span className='font-Typohoop md:text-xl text-xs align-middle  text-center'>Pay<span className='text-blue-400'>box</span></span>
                        </td>
                        <td className='md:min-w-[8.3rem] md:aspect-square min-w-[4.65rem] text-center border-l-2 border-getlink3 p-2'>
                            <span className='font-Voces md:text-xl text-xs align-middle text-center relative'>Vuzual <span className='text-red-500'>Plus<span className='md:text-[0.65rem] md:-bottom-4 md:-right-7 text-[0.27rem] absolute text-white -bottom-2 -left-2'>design studios</span></span></span>
                            
                        </td>
                      </tr>
                  </table>
                      <img className="absolute w-[0.63rem] h-3 bottom-[0.2rem] right-11" src="/white-mini-star.png" alt="white-mini-star"/>
                      <img className=" w-[0.5rem] top-0 left-6 absolute h-[0.63rem]" src="/violetstar.png"  />
                </div>
            </div>

            
            <div id='block9' className="flex backdrop-opacity-50 bg-getlinklight flex-col md:flex-row md:mt-0 md:gap-12  md:justify-around md:pl-9 md:pr-8 md:pb-16 md:pt-11 md:items-start gap-[3.83rem] pb-[5.7rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-[4.44rem] border-b-[#ffffff2f] ">
                <div className="absolute md:hidden bg-leftMobilepurpleLens w-[17.85rem] top-[35rem] left-0 h-[22.93rem] bg-origin-border bg-getlinklight z-[-1] bg-blend-hard-light bg-no-repeat "></div>
                <div className="absolute md:hidden rotateY bg-mobilepurpleLens bg-[60%_50%] w-[14.5rem] -top-[13rem] -translate-y-2/3 -right-4 h-[23.33rem] bg-origin-border bg-getlinklight z-[-1] bg-blend-hard-light bg-no-repeat "></div>
            
            
                <div id='b9-left/top' className="relative flex md:items-start justify-start items-center flex-col">
                    <p className="md:text-base md:max-w-[45vw] md:text-start md:leading-6 text-xl relative text-center leading-7 p-0 inline-block font-bold">
                        <span className=''>Privacy Policy and <br />
                      <span className="text-getlink3">Terms</span></span>
                      <img className=" w-[0.5rem] -top-11 -right-1 absolute h-[0.5rem]" src="/gray-mini-star.png"  />
                  </p>
                  <p className="md:text-[0.5rem] md:max-w-[45vw] md:text-start md:px-0 md:mt-1 text-[0.82rem] px-10 text-center font-Montserrat font-normal mt-2 leading-[1.67rem]">
                  Last updated on September 12, 2023
                  </p>
                  <p className="md:text-[0.5rem] md:max-w-[45vw] md:text-start md:px-0 md:mt-3 text-[0.82rem] md:leading-5 px-12 text-center relative font-Montserrat font-normal mt-7 leading-[1.67rem]">
                  Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant.
                  <img className=" w-[1.065rem] -bottom-[0.48rem] right-7 absolute h-[1.25rem]" src="/slatestar.png"  />
                  </p>

                  <div className='mt-[1.875rem] md:max-w-[45vw] justify-start flex flex-col items-center py-11 px-5 bg-[#D9D9D908] md:mx-0 mx-11 md:py-6 min-w-[18.44] relative rounded-lg border border-getlink3'>
                      <img className=" w-[1.065rem] bottom-[10.315rem] -left-6 absolute h-[1.25rem]" src="/slatestar.png"  />

                      <p className='md:text-[0.5rem] md:text-start md:leading-5 text-xs text-center font-Montserrat font-normal leading-[1.63rem]'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect,use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                      <p className=' md:text-[0.63] text-getlink3 text-start w-full font-Montserrat font-semibold mt-5 ml-1 text-[0.81rem]'>Licensing Policy</p>
                      <p className='mt-2 ml-1 text-start w-full font-Montserrat font-semibold text-xs'>Here are terms of our Standard License:</p>
                      <div className='flex gap-[1.33rem] mt-6'>
                        <figure className='rounded-full relative md:top-2 top-1 bg-[#2DE100] h-[1.1rem] p-[0.13rem] box-border fill-white flex justify-center items-center w-[1.1rem]'><svg className='relative top-[0.05rem]' width="8rem" height="4rem" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3L3 5.5L9.5 1" stroke="white" strokeWidth="2"/></svg></figure>
                        <p className='md:text-[0.53rem] text-xs text-start font-Montserrat font-normal leading-[1.32rem]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                      </div>
                      <div className='flex gap-[1.33rem] mt-6'>
                        <figure className='rounded-full relative md:top-2 top-1 bg-[#2DE100] h-[1.1rem] p-[0.13rem] box-border fill-white flex justify-center items-center w-[1.1rem]'><svg className='relative top-[0.05rem]' width="8rem" height="4rem" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3L3 5.5L9.5 1" stroke="white" strokeWidth="2"/></svg></figure>
                        <p className='md:text-[0.53rem] text-xs text-start font-Montserrat font-normal leading-[1.32rem]'>You are licensed to use the item available at any free source sites, for your project developement</p>
                      </div>
                      <button className="rounded-sm relative flex justify-center items-center mt-7 text-xs px-4 py-2 bg-gradient-to-r from-gradient1 to-gradient2"><span>Read more</span>
                      </button>
                  </div>
              </div>
              <div className='md:px-0 md:pb-0 px-5 flex flex-col items-center pb-40 relative justify-center'>
                <figure className=' md:w-[15rem] md:h-[20rem] md:mt-8  h-[19.44rem] w-[15.7rem] relative'>
                   
                <svg className='w-full h-full' viewBox="0 0 249 311" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M249 141.364C249 219.82 195.88 293.188 124.5 311C53.12 293.188 0 219.82 0 141.364V56.5455L124.5 0L249 56.5455V141.364ZM124.5 282.727C176.375 268.591 221.333 205.543 221.333 144.474V74.9227L124.5 30.8173L27.6667 74.9227V144.474C27.6667 205.543 72.625 268.591 124.5 282.727ZM163.233 141.364V120.159C163.233 100.368 143.867 84.8182 124.5 84.8182C105.133 84.8182 85.7667 100.368 85.7667 120.159V141.364C77.4667 141.364 69.1667 149.845 69.1667 158.327V207.805C69.1667 217.7 77.4667 226.182 85.7667 226.182H161.85C171.533 226.182 179.833 217.7 179.833 209.218V159.741C179.833 149.845 171.533 141.364 163.233 141.364ZM145.25 141.364H103.75V120.159C103.75 108.85 113.433 101.782 124.5 101.782C135.567 101.782 145.25 108.85 145.25 120.159V141.364Z" fill="url(#paint0_linear_114_900)" fillOpacity="0.14"/><defs><linearGradient id="paint0_linear_114_900" x1="124.5" y1="0" x2="124.5" y2="311" gradientUnits="userSpaceOnUse"><stop stopColor="#903AFF"/><stop offset="1" stopColor="#FF26B9"/></linearGradient></defs></svg>


                    <figure className='w-[28.38rem] h-[21.95rem] absolute top-24 -right-24'>
                      <img src="/padlockman.png" className='w-full h-full'/>
                    </figure>

                    <img className="absolute w-[0.44rem] h-3 top-[5.75rem] right-14" src="/white-mini-star.png" alt="white-mini-star"/>
                    <img className="absolute w-[0.56rem] h-3 -bottom-[3.88rem] left-[1.21rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                    <img className=" w-[1.065rem] top-[4.5rem] -left-[2.1rem] absolute h-[1.25rem]" src="/slatestar.png"  />
                    <img className="absolute w-[0.5rem] h-[0.6rem] -bottom-[4.5rem] right-[0.6rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                </figure>
              </div>
            </div>


            <div id='block10' className="flex bg-getlinklight2 flex-col md:gap-7 gap-[3.83rem] pb-[3.314rem] md:px-8 border-b border-gray-500 justify-stary items-center relative overflow-hidden w-full pt-[3.188rem] border-b-[#ffffff2f] px-16  ">
              
              <div id='b7-left/top' className="relative flex justify-start md:justify-between md:gap-16 items-start md:flex-row flex-col">
                  <div className='md:max-w-[28vw]' >
                        <p className="md:text-base text-xl relative text-center leading-7 p-0 inline-block font-bold">
                            <span className=''>get<span className="text-getlink3">linked</span></span>
                        </p>
                        <p className="md:text-07 md:leading-4 text-[0.82rem] relative text-start font-Montserrat font-normal mt-2 leading-[1.67rem]">
                        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                        <img className="absolute w-[0.565rem] h-[0.625rem] top-10 -left-6" src="/white-mini-star.png" alt="white-mini-star"/>
                        </p>
                        <p className="md:text-07 text-xs relative text-start font-Montserrat leading-7 pt-10 p-0 inline-block font-normal">
                            <span className=''>Terms of Use <span className="text-getlink3">  | </span>Privacy Policy</span>
                        </p>
                    </div>

                    <div className='mt-7 md:mt-0 font-Montserrat md:text-07 text-xs'>
                      <p className='my-[0.15rem] md:text-09 text-sm pb-1 font-semibold relative text-getlink3'>Useful Links
                      <img className="absolute w-[0.94rem] h-[1.13rem] -bottom-[5.188rem] -right-[2.815rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                      </p>
                      <p className='mb-[0.68rem]'>Overview</p>
                      <p className='my-[0.68rem]'>Timeline</p>
                      <p className='my-[0.68rem]'>FAQs</p>
                      <p className='my-[0.68rem]'>Register</p>
                      <div className='flex justify-start gap-2'><p className='my-[0.15rem] pb-1 font-normal text-getlink3'>Follow us</p>
                        <p>{social_media}</p>
                      </div>
                    </div>

                    <div className='mt-[3.813rem] md:mt-0 md:text-07 font-Montserrat text-xs relative'>
                      <p className='my-[0.15rem] md:text-09 text-sm pb-1 font-semibold text-getlink3'>Contact Us</p>
                      <div className='flex items-start mb-4 justify-start gap-2'>
                          <p className='relative top-1 text-xs'>{telephone}</p>
                          <p>+234  6707653444</p>
                      </div>
                      <div className='flex mb-6 items-start justify-start gap-2'>
                          <p className='relative top-1 text-xs'>{location}</p>
                          <p className='leading-[1.55]'>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
                      </div>
                       <img className="absolute w-[0.44rem] h-[0.5rem] top-[3.5rem] -right-[6.189rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                    </div>
              </div>
              <p className='font-normal text-sm md:text-xs text-center font-Montserrat mb-3 relative '>All rights reserved. © getlinked Ltd.
              <img className=" w-[0.44rem] -top-[1.625rem] left-12 absolute h-[0.5rem]" src="/violetstar.png"  />
              </p>
            </div>
        </main>
  
        
      </div>
  )
}

export default App






// const tick = <svg width="9px" height="5px" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3L3 5.5L9.5 1" stroke="white" strokeWidth="2"/></svg>

// const pinkbow =  <svg width="200" height="12" className='absolute right-[60px] top-14 ' viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke-width="5" stroke="#FF26B9"/></svg>
const pinkbowsm = <svg xmlns="http://www.w3.org/2000/svg" width="117" height="11" viewBox="0 0 117 11" fill="none">
<path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" strokeWidth="3"/>
</svg>
const menu = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
<path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
</svg>


const social_media = <svg xmlns="http://www.w3.org/2000/svg" className='md:w-16 md:h-3 w-32 h-5' width="129" height="22" viewBox="0 0 129 24" fill="none">
<path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/><path d="M49.0455 4H43L50.1336 13.3619L43.3886 21H45.6773L51.1942 14.7533L55.9545 21H62L54.5658 11.2437L60.9636 4H58.675L53.5053 9.8531L49.0455 4ZM56.8182 19.3L46.4545 5.7H48.1818L58.5455 19.3H56.8182Z" fill="white"/><path d="M85 14.5H87.5L88.5 10.5H85V8.5C85 7.47 85 6.5 87 6.5H88.5V3.14C88.174 3.097 86.943 3 85.643 3C82.928 3 81 4.657 81 7.7V10.5H78V14.5H81V23H85V14.5Z" fill="#F8F8F8"/><path d="M111.94 5.00002C111.94 5.53046 111.729 6.03906 111.354 6.41394C110.978 6.78883 110.469 6.99929 109.939 6.99902C109.409 6.99876 108.9 6.78779 108.525 6.41253C108.15 6.03727 107.94 5.52846 107.94 4.99802C107.94 4.46759 108.151 3.95899 108.526 3.5841C108.902 3.20922 109.411 2.99876 109.941 2.99902C110.471 2.99929 110.98 3.21026 111.355 3.58552C111.73 3.96078 111.94 4.46959 111.94 5.00002ZM112 8.48002H108V21H112V8.48002ZM118.32 8.48002H114.34V21H118.28V14.43C118.28 10.77 123.05 10.43 123.05 14.43V21H127V13.07C127 6.90002 119.94 7.13002 118.28 10.16L118.32 8.48002Z" fill="#F8F8F8"/>
</svg>

const telephone = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z" fill="#F8F8F8"/>
<path d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z" fill="#F8F8F8"/>
</svg>

const location = <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z" fill="#F8F8F8"/>
</svg>
