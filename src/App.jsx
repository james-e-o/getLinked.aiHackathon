// import { useEffect } from 'react'
// import { screenWidth } from './main'


import './App.css'

function App() {
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   window.onresize = () => {
  //     window.HTMLElement.prototype.style.setProperty('--uni-font',`${(window.innerWidth/1512)*100}%`)
  //   }

  //   // document.body.style.setProperty('--uni-font',`${innerWidth}%`)
  // })
  return (
    
      <div className="font-Clash overflow-x-hidden z-0 relative bg-[#150E28] w-screen">
       <div className="hidden md:block absolute h-[994px] w-3/5 bg-purpleLens bg-origin-border bg-transparent bg-blend-soft-light z-[-1]  bg-no-repeat bg-[length:130.652%_100%] bg-[0.25px_0px] right-0"></div>
       <div className="hidden md:block absolute h-[627px] bg-purpleLens bg-origin-border bg-transparent bg-blend-soft-light z-[1000] bg-no-repeat bg-[length:114.411%_118.9%] bg-[-155px_-155px] left-0 "></div>
       <div className="absolute md:hidden bg-mobilepurpleLens w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlink z-[-1] bg-blend-hard-light bg-no-repeat "></div>
        <header className="flex w-full items-center justify-between pt-3 h-[4.3rem] px-[3rem] md:h-[106px] border-b border-gray-800">        
          <h1 className="text-white text-[0.93rem] md:text-[2rem] z-10 font-bold ">get<span className=" text-getlink3">linked</span></h1>
          <p className='md:hidden z-10'>{menu}</p>
          <nav className="hidden md:block text-white text-[13px] mt-[47px] font-Montserrat mr-[96px] h-fit w-[547px] ">
            <ul className="inline-flex justify-between w-[315px] list-none items-center">
              <li className="">Timeline</li>
              <li className="ml-[44px]">Overview</li>
              <li className="ml-[44px]">FAQs</li>
              <li className="ml-[44px]">Contacts</li>
            </ul>
            <button className="rounded-md px-[40px] py-[14px] h-10 box-border leading-none ml-[92px] bg-gradient-to-r from-gradient1 text-[13px] to-gradient2">Register</button>
          </nav>
        </header>
        <main className="text-white box-border overflow-x-hidden -z-[2] w-screen ">
          <div id='block1' className="flex items-center justify-start relative md:flex-row md:items-start overflow-y-hidden w-full flex-col border-b border-b-[#ffffff2f] ">
              <div className='text-center md:hidden relative text-sm font-Montserrat italic mt-[1.94rem] font-semibold'>
                <p className='text-center w-full '>Igniting a Revolution in HR Innovation</p>
                <p className='text-end flex justify-end w-full pr-4'>{pinkbowsm}</p>
              </div>
              <div className='mt-10 flex md:justify-center justify-start flex-col w-screen md:items-start items-center leading-[1.2]'>
                <p className='relative font-bold text-[2rem]' >
                  getlinked Tech
                  <img className="absolute w-[1.125rem] h-[1.44rem] bottom-[1.86rem] right-[1.063rem]" src="/lightbulb.png"/>
                  <img className="absolute  w-[0.625rem] h-[0.75rem]  bottom-[3.125rem] left-[2.875rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                  <img className="absolute w-[0.375rem] h-[0.5rem] bottom-[3.125rem] -right-[0.812rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                  </p>
                    <p className='font-bold text-[2rem]' >
                      <span className="">Hackathon <span className="text-getlink3">1.0</span></span>
                        <img className=" w-[2rem] inline-block" src="/chain.png" alt="chain.png" />
                        <img className=" w-[1.37rem] inline-block" src="/blaze.png" alt="chain.png" />
                    </p>
                    <p className="text-[0.813rem] font-Montserrat leading-[1.8] font-[300] mt-[1.7rem]">Participate in getlinked tech Hackathon <br /> 2023 stand a chance to win a Big prize</p>
                    <button className="rounded-md px-[2.88rem] mt-[1.8rem] pt-[0.876rem] pb-[0.937rem] text-[0.875rem] bg-gradient-to-r from-gradient1 to-gradient2 relative">Register 
                    <img className='absolute w-[0.375rem] h-[0.5rem] top-[1.125rem] -right-[1.313rem]' src="/gray-mini-star.png" alt="gray-mini-star" /> </button>
                    <div className="leading-[1.33] font-Unica gap-[1.5rem] my-[1.43rem] flex justify-center">
                      <p className=" h-9 text-[3rem]">00<span className=" font-Montserrat text-sm">H</span></p>
                      <p className=" h-9 text-[3rem]">00<span className=" font-Montserrat text-sm">M</span></p>
                      <p className=" h-9 text-[3rem]">00<span className=" font-Montserrat text-sm">S</span></p>
                    </div>
                </div>
              <div className=' z-10 items-center flex justify-center relative box-border md:scale-100 md:mt-0 mt-6 pt-2 overflow-hidden-x w-full md:h-fit h-fit'>
                <img className=" w-full -hue-rotate-180" src="/dazed.png" alt="dazed.png"/>
                <img className="absolute w-full  " src="/waterbubble.png" alt="waterbubble.png"/>
              </div>
             


            
{/* 

            <div id='b1-left' className="relative hidden md:block">
              <img className="absolute left-[530px] top-[224px]" src="/chain.png" alt="chain.png" width="62px" height="64px"/>
              <img className="absolute left-[594px] top-[234px]" src="/blaze.png" alt="chain.png" width="40px" height="43px"/>
              <img className="absolute left-[483px] top-[113px]" src="/lightbulb.png" alt="lightbulb.png" width="40px" height="43px"/>
              <p id='hackathon' className="text-[60px] text-start leading-[70px] p-0 inline-block font-[700] ml-[96px] mt-[154px]">
                <span className='w-[597px]'>getlinked Tech</span><br />
                <span className="ml-[3px] w-[569px]">Hackathon <span className="text-getlink3">1.0</span></span>
              </p>
              <p className="text-md font-Montserrat font-[300] w-[383px] ml-[99px] mt-4">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <button className="rounded-md px-[40px] mt-[34px] ml-[99px] mr-[128px] py-[14px] text-[13px] bg-gradient-to-r from-gradient1 to-gradient2">Register</button>
              <div className="font-Unica mt-[74px] mb-[86px] w-[213px] flex justify-between ml-[102px]">
                <p className="h-9 text-[48px]">00<span className="text-sm">H</span></p>
                <p className="h-9 text-[48px]">00<span className="text-sm">M</span></p>
                <p className="h-9 text-[48px]">00<span className="text-sm">S</span></p>
              </div>
            </div>  */}
            {/* <p className='hidden md:block absolute text-[26px] font-Montserrat italic top-7 right-14 font-semibold'>Igniting a Revolution in HR Innovation</p> */}
            {/* <img className="absolute mt-[6.2rem] right-0 -mr-6 w-[621px] h-[537px] " src="/dazed.png" alt="dazed.png"/>
            <img className="absolute top-[86px] right-[38px] opacity-90 " src="/waterbubble.png" alt="waterbubble.png" width="500px" height="481px"/> */}
            {/* <svg width="200" height="12" className='absolute right-[60px] top-14 ' viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke-width="5" stroke="#FF26B9"/></svg> */}

          </div>

           <div id='block2' className="flex flex-col md:flex-row gap-[3.83rem] pb-[6rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-8 border-b-[#ffffff2f] ">
            <div id='b2-left/top' className="w-fit relative">
              <figure className="w-[16.5rem] h-[16.06rem] flex items-center justify-center relative">
                  <span className="absolute font-Montserrat font-bold text-center text-base md:text-lg top-[7.662rem]">The Big <br /> Idea!</span>
                  <img className="w-full h-full" src="/bigidea.png"  />
                  <img className=" w-[0.69rem] top-[5.187rem] -left-[0.38rem] absolute h-[0.81rem]" src="/violetstar.png"  />
                  <img className="w-[1.22rem] -bottom-[1.9rem] left-[7.38rem] absolute -rotate-90 h-[1.43rem]" src="/gradientsqiggle.png"  />
              </figure>
            </div>

            <div id='b2-right/bottom' className="relative flex justify-start items-center flex-col  pt-[3.63rem ]">
              <p className="text-xl text-center leading-[1.33] p-0 inline-block font-bold">
                <span className=''>Introduction to getlinked</span><br />
                <span className="text-getlink3">tech Hackathon 1.0</span>
              </p>
              <p className="text-[0.82rem] px-10 text-center font-Montserrat font-light leading-[1.72rem] mt-3">
                {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
            </div>

          </div>


           <div id='block3' className="flex flex-col-reverse md:flex-row justify-between pb-[2.88rem] relative overflow-hidden items-center w-full border-b border-b-[#ffffff2f] ">
            <div id='b3-left' className="relative flex pt-2 flex-col items-center">
              <p className="text-[1.25rem] text-start relative leading-[133%] p-0 inline-block font-[700]">
                <span className=''>Rules and
                </span><br />
                <span className="text-getlink3">Guidelines</span>
                <img className="absolute w-[0.75rem] h-[0.88rem] top-[3.125rem] -right-[5.44rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              </p>
              <p className="text-[0.82rem] px-10 text-center relative font-Montserrat font-light leading-[1.72rem] mt-3">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
              <img className="absolute w-[0.625rem] h-[0.75rem] -bottom-[0.94rem] left-[3.94rem]" src="/white-mini-star.png" alt="white-mini-star"/>
              </p>
            </div>
            <div id='b3-right' className="w-fit relative">
              <img className="absolute  w-[0.625rem] h-[0.75rem] top-[11.56rem] -left-[0.31rem]" src="/white-mini-star.png" alt="white-mini-star"/>
              <figure className="relative w-[19rem] sm:w-[20.38rem] h-[23.88rem]">
                  <img className=" w-full h-full" src="/tablady.png"  />
              </figure>
            </div>

          </div>


          <div id='block4' className="flex flex-col md:flex-row justify-start pb-[2.88rem] relative overflow-hidden items-center w-screen border-b border-b-[#ffffff2f] ">
            <div id='b4-left' className="w-fit relative">
              <img className=" w-[0.81rem] top-[2.63rem] left-36 absolute h-[1.1rem]" src="/violetstar.png"  />
              <img className="absolute w-[0.75rem] h-[0.88rem] bottom-[7.125rem] right-[8.6rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              <figure className="mt-[4.625rem]  w-[20.7rem] h-[17.188rem] relative">
                  <img className="w-full h-full" src="/statisticians.png"  />
              </figure>
              
            </div>
            <div id='b4-right' className="relative flex flex-col items-center justify-start ">
              <p className="text-[24px] text-center leading-[133%] p-0 inline-block font-[700]">
                <span className='w-[597px]'>Judging Criteria</span><br />        
                <span className="text-getlink3"> Key attributes</span>
              </p>
                  <div className='flex justify-start items-center flex-col'>
                    <p className="text-[0.75rem] text-center font-Montserrat font-[300] w-[394px] mb-2 px-7 mt-4">
                      <span className=" text-gradient1">Innovation and Creativity: </span> 
                      <span className=''>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span>  
                    </p>
                    <p className="text-[0.75rem] text-center font-Montserrat font-[300] w-[394px] mb-2 px-7 mt-4">
                      <span className=" text-gradient1">Functionality: </span> 
                      <span className=''> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span>  
                    </p>
                    <p className="text-[0.75rem] text-center font-Montserrat font-[300] w-[394px] mb-2 px-7 mt-4">
                      <span className=" text-gradient1">Impact and Relevance: </span> 
                      <span className=''> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span>  
                    </p>
                    <p className="text-[0.75rem] text-center font-Montserrat font-[300] w-[394px] mb-2 px-7 mt-4">
                      <span className=" text-gradient1">Technical Complexity:  </span> 
                      <span className=''>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span>  
                    </p>
                    <p className="text-[0.75rem] text-center font-Montserrat font-[300] w-[394px] mb-2 px-7 mt-4">
                      <span className=" text-gradient1">Adherence to Hackathon Rules: </span> 
                      <span className=''> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span>  
                    </p>
                    <button className="rounded-md relative flex justify-center items-center mt-5 h-[1.96rem] w-24 text-xs bg-gradient-to-r from-gradient1 to-gradient2"><span>Read more</span>
                    <img className="absolute w-[0.625rem] h-[0.75rem] bottom-[1.1rem] -right-[5.42rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                    </button>
                </div>
            </div>

          </div>


          <div id='block5' className="flex flex-col md:flex-row justify-start pt-[3.125rem] px-10 pb-[2.75rem] relative overflow-hidden items-center w-full border-b border-b-[#ffffff2f] ">
            <div id='b5-left' className=" flex flex-col items-center relative ">
              <p className="text-[1.25rem] relative text-center leading-[133%] p-0 inline-block font-[700]">
                <span className=''>Frequently asked 
                </span><br />
                <span className="text-getlink3">Questions</span>
                <img className=" w-[0.81rem] bottom-[2.81rem] -left-[2.44rem] absolute h-[1.1rem]" src="/violetstar.png"  />
              </p>
              <p className="text-xs font-Montserrat leading-[1.72rem] text-center font-[400] mt-2">{`We got answers to the questions that you might want to ask about getlinked Hackathon 1.0`}</p>
              <div className='text-xs font-Montserrat mt-11'>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I work on a project I started before the hackathon?</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens if I need help during the hackathon?</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens if I dont have an idea for a project?</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I join a team or do I have to come with one?</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>What happens after the hackathon ends</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>
                <p className='leading-[1.125rem] items-end text-start flex pb-3 mx-2 mb-[0.81rem] border-b border-getlink3' >
                  <span className='w-[95%]'>Can I work on a project I started before the hackathon?</span>
                  <button className='border-none relative top-3 text-3xl text-getlink3 '>+</button>
                </p>

              </div>
            </div>
            <div id='b5-right' className="w-fit relative">
              <img className=" w-4 top-[167px] right-[152px] absolute h-[18px]" src="/tablady.png"  />
              <img className="w-[37px] left-[536px] absolute -rotate-90 h-[43px]" src="/gradientsqiggle.png"  />
              <figure className="mt-[5.3rem] w-[20.44rem] aspect-square relative">
                  <img className="w-full h-full" src="/cloudthinker.png"  />

                  <img className="absolute w-[1rem] h-5 -bottom-[0.31rem] right-[3.81rem]" src="/white-mini-star.png" alt="white-mini-star"/>
                  <img className=" w-[0.63rem] bottom-full right-[10.19rem] absolute h-[0.63rem]" src="/violetstar.png"  />
                  <img className=" w-[0.44rem] top-[6.25rem] left-[4.125rem] absolute h-[0.56rem]" src="/violetstar.png"  />
                  <img className="absolute w-[0.63rem] h-[0.75rem] bottom-[9.87rem] left-[1.18rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
              </figure>
            </div> 
          </div> 


          <div id='block6' className="flex flex-col md:flex-row gap-[3.83rem] px-10 pb-20 border-b border-gray-500 box-border justify-between items-center relative overflow-hidden w-full pt-8 border-b-[#ffffff2f] ">
            <div id='b6-right/bottom' className="relative flex justify-start items-center flex-col  pt-20">
              <p className="text-xl text-center leading-[1.33] p-0 inline-block font-bold">
                <span className=''>Timeline</span>
              </p>
              <p className="text-xs font-Montserrat relative leading-[1.72rem] text-center font-[400] mt-2">Here is the breakdown of the time we <br />anticipate using for the upcoming event.
              <img className=" w-[0.88rem] -bottom-6 left-[2.1rem] absolute h-[1rem]" src="/violetstar.png"  />
              </p>
              <div className='text-xs font-Montserrat mt-12'>
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
            </div>

          </div>

          <div id='block7' className="flex flex-col md:flex-row gap-[3.83rem] pb-[5.7rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-[4.5rem] border-b-[#ffffff2f] ">
            
            <div id='b7-right/bottom' className="relative flex justify-start items-center flex-col">
              <p className="text-xl relative text-center leading-6 p-0 inline-block font-bold">
                <span className=''>Prizes and</span><br />
                <span className="text-getlink3">Rewards</span>

                <img className=" w-[0.44rem] -top-[1.063rem] -left-[4.8rem] absolute h-[0.56rem]" src="/violetstar.png"/>
                <img className=" w-[0.44rem] top-[1.19rem] -right-[1.45rem] absolute h-[0.56rem]" src="/violetstar.png"/>
              </p>
              <p className="text-[0.82rem] px-10 text-center font-Montserrat font-light leading-[1.72rem] mt-3">
                Highlight of the prizes or rewards for winners <br />and for participants.</p>
            </div>
            
            <div id='b7-left/top' className="w-fit relative">
              <figure className="w-[20.1rem] scale-125 -top-2 h-[17.63rem] flex items-center justify-center relative">
                  <img className="w-full h-full" src="/dartncup.png"  />

                  <img className="absolute w-[0.625rem] h-3 bottom-0 left-[3.63rem]" src="/white-mini-star.png"/>
                  <img className="absolute w-[0.625rem] h-3 -bottom-9 right-10" src="/white-mini-star.png"/>
               
              </figure>
            </div>
            
            <div className='flex items-center font-Montserrat mt-[3.2rem] relative justify-center gap-4'>
                <div className='w-[5.65rem] bg-[#D434FE1F] rounded-lg border border-getlink3 flex flex-col gap-1 items-center justify-center h-[7.8rem] relative'>
                  <img className="absolute w-[4.75rem] h-[4.78rem] -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/silvermedal.png"/>
                  <p className='text-xs text-center relative top-3 font-semibold'>2nd <br />Runner</p>
                  <p className='text-sm text-getlink3 font-bold relative top-3'>N300,000</p>
                </div>
                <div className='w-[5.65rem] bg-[#903AFF1F] rounded-lg border border-getlink2 flex flex-col gap-1 items-center justify-center h-[9.21rem] relative'>
                  <img className="absolute w-[5.65rem] scale-125 aspect-square -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/goldmedal.png"/>
                  <p className='text-xs text-center relative top-4 font-semibold'>1st <br />Runner</p>
                  <p className='text-sm text-getlink2 font-bold relative top-4'>N400,000</p>
                </div>
                <div className='w-[5.65rem] bg-[#D434FE1F] rounded-lg border border-getlink3 flex flex-col gap-1 items-center justify-center h-[7.8rem] relative'>
                  <img className="absolute w-[4.75rem] h-[4.78rem] -translate-y-1/2 top-0 left-1/2 -translate-x-1/2" src="/bronzemedal.png"/>
                  <p className='text-xs text-center relative top-3 font-semibold'>3rd <br />Runner</p>
                  <p className='text-sm text-getlink3 font-bold relative top-3'>N150,000</p>

                  <img className="absolute w-[0.63rem] h-3 -bottom-12 right-[1.19rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                </div>
            </div>
           </div>

           <div id='block8' className="flex flex-col md:flex-row gap-[3.83rem] pb-[5.7rem] border-b border-gray-500 justify-between items-center relative overflow-hidden w-full pt-[2.7rem] border-b-[#ffffff2f] ">
              
              <div id='b7-left/top' className="relative flex justify-start items-center flex-col">
                  <p className="text-xl relative text-center leading-6 p-0 inline-block font-bold">
                      <span className=''>Partners and Sponsors</span>
                  </p>
                  <p className="text-[0.82rem] px-10 text-center font-Montserrat font-light mt-2 leading-[1.67rem]">
                  Getlinked Hackathon 1.0 is honored to have the <br /> following major companies as its partners and sponsors
                  </p>
              </div>
              <div id='b7-left/top' className="relative ">
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
              </div>
             
           </div>
        </main>
  
        
      </div>
  )
}

export default App







// const pinkbow =  <svg width="200" height="12" className='absolute right-[60px] top-14 ' viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke-width="5" stroke="#FF26B9"/></svg>
const pinkbowsm = <svg xmlns="http://www.w3.org/2000/svg" width="117" height="11" viewBox="0 0 117 11" fill="none">
<path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" strokeWidth="3"/>
</svg>
const menu = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
<path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
</svg>

// const shield = <svg width="530" height="648" viewBox="0 0 530 648" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z" fill="url(#paint0_linear_110_134)" />
// <defs>
// <linearGradient id="paint0_linear_110_134" x1="265" y1="0" x2="265" y2="648" gradientUnits="userSpaceOnUse">
// <stop />
// <stop offset="1" />
// </linearGradient>
// </defs>
// </svg>
