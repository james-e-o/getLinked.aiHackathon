/* eslint-disable react/prop-types */
import { useState } from 'react'
import './register.css'
import { Form } from 'react-router-dom'
const Register = () => {
    const [congratPop, setCongratPop] = useState(true)
    return (
              <div className='p-6 h-screen bg-getlink z-0 overflow-y-scroll w-screen overflow-x-hidden relative'> 
              { congratPop?
                <div className='fixed inset-0 bg-[#1a1233ec] flex justify-center items-center z-50'>
                    <Popbox back={()=>setCongratPop(false)}/>
                </div>
                :
                ""
              }
            
              <div className="absolute md:hidden bg-mobilepurpleLens w-[24.75rem] left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlink -z-[1] bg-blend-hard-light bg-no-repeat "></div>
                <div className=" text-white bg-transparent z-10 flex flex-col items-center justify-start">
                    
                    <h1 className='pt-2 font-Clash font-bold text-base px-7 w-full text-getlink3 '>Register</h1>
                    <figure className='w-[12.187rem] scale-105 sm:scale-100 relative mt-8 h-[9.687rem] sm:w-[44.81rem] sm:h-[44.81rem]'>
                        <img src="/devman-mobile.png" className='w-full h-full sm:hidden'/>
                        <img src="/devman.png" className='w-full h-full hidden sm:inline-block'/>
                        <img className=" w-[0.88rem] top-[5.5rem] -right-7 absolute h-[0.815rem]" src="/violetstar.png"/>
                    </figure>
                    <div className='mt-6 font-Montserrat'>
                        <div className='flex justify-center items-end'>
                            <p className='inline-block mr-1 font-normal text-xs'>Be part of this movement!</p>
                            <div className='inline-flex flex-col items-center justify-center text-getlink3'>
                                <p className='flex items-end'>
                                    <img src="followgirl.png" className='w-[1.53rem] h-[1.53rem] rotateY ' />
                                    <img src="walkboy.png" className='w-[1.85rem] relative right-1 h-[1.85rem] rotateY ' />
                                </p>
                                <svg width="90" height="2" viewBox="0 0 90 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.411865" y1="0.852966" x2="89.5295" y2="0.852966" stroke="#D434FE" strokeDasharray="2 2"/></svg></div>
                        </div>
                        <p className='p-[0.44rem] font-normal text-xl'>CREATE YOUR ACCOUNT</p>
                    </div>
                    <Form className='mt-5 w-full flex flex-col items-center justify-start'>
                        <p className=' w-[16.85rem] relative'>
                            <label className='font-normal pl-1 text-[0.815rem]' htmlFor="TeamName">{`Team's Name`}</label>
                            <input className='outline-none text-xs border bg-transparent h-[1.1rem] py-4 px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' placeholder='Enter the name of your group' type="text" />

                            <img className="absolute w-[0.88rem] h-[1.13rem] top-[0.88rem] -left-[1.5rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
                        </p>
                        <p className=' mt-4 w-[16.85rem]'>
                            <label className='font-normal pl-1 text-[0.815rem]' htmlFor="TeamName">{`Phone`}</label>
                            <input className='outline-none text-xs border bg-transparent h-[1.1rem] py-4 px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' placeholder='Enter your phone number' type="text" />
                        </p>
                        <p className=' mt-4 w-[16.85rem]'>
                            <label className='font-normal pl-1 text-[0.815rem]' htmlFor="TeamName">{`Email`}</label>
                            <input placeholder='Enter your email address' className='outline-none text-xs border bg-transparent h-[1.1rem] py-4 px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' type="text" />
                        </p>
                        <p className=' mt-4 w-[16.85rem] relative'>
                            <label className='font-normal pl-1 text-[0.815rem]' htmlFor="TeamName">{`Project Topic`}</label>
                            <input className='outline-none text-xs border bg-transparent h-[1.1rem] py-4 px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' placeholder='What is your group project topic' type="text" />

                            <img className=" w-[0.565rem] top-[0.94rem] -right-[0.94rem] absolute h-[0.63rem]" src="/slatestar.png"  />
                        
                        </p>
                        <div className='flex justify-between w-[16.85rem]'>
                            <p className=' mt-4 w-[9.69rem]'>
                                <label className='font-normal pl-1 text-[0.815rem]' htmlFor="category">{`Category`}</label>
                                <select className='outline-none text-xs border bg-transparent h-[1.1rem] py-4 px-3 border-white rounded-[0.25rem] mt-[0.28rem] w-full' name='category' id='category' >
                                    <option disabled selected value="">--Select your category</option>                                    
                                    <option value="group">group</option>                                    
                                    <option value="mini">mini</option>                                    
                                    <option value="single">single</option>                                    
                                </select>
                            </p>
                            <p className=' mt-4 w-[5.5rem]'>
                                <label className='font-normal pl-1 text-[0.815rem]' htmlFor="size">{`Group Size`}</label>
                                <select className='outline-none text-xs text-white bg-transparent border h-[1.1rem] py-4 px-2 border-white rounded-[0.25rem] mt-[0.28rem] w-full' name='size' id='size'>
                                    {/* <option disabled selected value="">--Select</option> */}
                                    <option className='text-black' value="group">group</option>
                                    <option value="mini">mini</option>
                                    <option value="single">single</option>
                                </select>
                            </p>
                        </div>
                        <p className='text-gradient1 w-[16.85rem] font-Inter italic mt-4 text-center font-medium text-[0.565rem]'> Please review  your  registration  details  before  submitting</p>
                        <p className=' flex w-[16.85rem] items-start gap-4 justify-start mt-3 text-center font-normal text-[0.665rem]'> 
                            <input type="checkbox" className='bg-transparent rounded relative top-1' name="" id="" />
                            <p className='text-start'>I agreed with the event terms and conditions
                            and privacy policy</p>
                        </p>
                        <button className="rounded-md mx-auto mt-4 px-14 py-[1.11rem] h-10 box-border leading-[50%] bg-gradient-to-r from-gradient1 text-base font-normal to-gradient2">Submit</button>
                    </Form>
                </div>
            </div> 
    )
}

export default Register
const Popbox = ({back}) => {
    return (
        <div className='w-[20rem] relative text-white h-[30rem] rounded-md flex justify-start items-center flex-col border-getlink3 border '>
        <img className=" w-[0.63rem] -top-[1.75rem] -right-[0.24rem] absolute h-[0.75rem]" src="/slatestar.png"  />

            <figure className='mt-4 relative mb-[0.13rem]'>
                <img src="/congratulation.png" className='' />
                <img className="absolute w-[0.88rem] h-[1.13rem] bottom-[0.88rem] sleft-[0.57rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>
            </figure>
            <p className='font-Montserrat font-semibold text-base px-10 leading-6 text-center mt-6'>Congratulations <br /> you have successfully <br /> Registered!</p>
            <p className='font-Montserrat font-normal text-xs leading-4 px-8 text-center relative mt-[1.815rem]'>Yes, it was easy and you did it! <br /> check your mail box for next step <img src="/wink-woman-.png" className='inline-block w-[0.88rem] h-[0.88rem]' /></p>
            <button onClick={back} className="rounded-md font-Montserrat mx-auto mt-6 mb-7 px-[6.625rem] py-[1.11rem] h-10 box-border leading-[50%] bg-gradient-to-r from-gradient1 text-base font-normal to-gradient2">Back</button>
            <img className=" w-[0.69rem] -bottom-[1.565rem] right-[2.065rem] absolute h-[0.815rem]" src="/violetstar.png"/>
        </div>
    )
}