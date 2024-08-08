import './contact.css'
import { Form } from 'react-router-dom'
const Contact = () => {
    return (
        <div className="px-11 pt-8 h-screen bg-getlink text-white flex flex-col items-center z-0 overflow-y-scroll w-screen overflow-x-clip relative">
            <p className='sent absolute bg-lime-500 text-gray-800 font-semibold font-Inter text-xs rounded px-3 py-1 w-fit mx-auto'>message sent</p>
            <div className="absolute md:hidden bg-mobilepurpleLens w-[24.75rem] -top-4 left-[-0.875rem] h-[27.63rem] bg-origin-border bg-getlink z-[-1] bg-blend-hard-light bg-no-repeat "></div>
            <p className='flex justify-start w-full px-1'><figure className='flex scale-105 justify-center items-center p-3 w-fit h-fit relative' >
                        <svg className='relative' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_181_74)"/><defs><linearGradient id="paint0_linear_181_74" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#903AFF"/><stop offset="1" stopColor="#FF26B9"/></linearGradient></defs></svg>
                        <svg className='-mt-[0.1rem] -ml-[0.1rem] absolute' width="6" height="8" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.26662 1.20001L1.19995 4.26668L4.26662 6.56668" stroke="white"/></svg>
                    </figure></p>
            <p className='w-full'><p className='font-Clash w-fit relative px-1 font-semibold mt-10 text-lg leading-snug text-getlink3'>Questions or need <br /> assistance?<br /> Let us know about it
            <img className="absolute w-[0.69rem] h-[0.81rem] -top-[1.95rem] right-12" src="/violetstar.png"/>
            <img className="absolute w-[1rem] h-[1.25rem] top-7 -right-20" src="/gray-mini-star.png"/>
            </p></p>
            <p className='mt-6 font-normal font-Montserrat w-full px-1 text-xs'>Email us below to any question related <br /> to our event</p>

            <Form className='mt-7 w-full flex flex-col items-center justify-start'>
                        <p className=' w-full relative'>
                            <input className='outline-none text-base border bg-transparent h-[1.1rem] py-[1.15rem] px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' placeholder={"Team's name"}  name='name' type="text" />

                            
                        </p>
                        <p className=' mt-4 w-full'>
                            <input className='outline-none text-base border bg-transparent h-[1.1rem] py-[1.15rem] px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full' placeholder={"Topic"}  name='topic' type="text" />
                        </p>
                        <p className=' mt-4 w-full'>
                            <input placeholder='Email' className='outline-none text-base border bg-transparent h-[1.1rem] py-[1.15rem] px-4 border-white rounded-[0.25rem] mt-[0.28rem] w-full'  name='email' type="text" />
                        </p>
                        <p className=' mt-4 w-full relative'>
                            <textarea name="message" id="message" rows={4} className='outline-none text-base border bg-transparent py-[1.15rem] px-4 border-white rounded-[0.25rem] mt-[0.28rem] relative w-full' placeholder='Message'></textarea>

                            <img className=" w-3 bottom-[0.94rem] -right-[1.34rem] absolute h-[0.88rem]" src="/white-mini-star.png"  />
                            <img className=" w-3 -left-3 -bottom-[3rem] absolute h-[0.88rem]" src="/slatestar.png" />
                        
                        </p>
                        <button className="rounded-md mx-auto mt-4 px-14 py-[1.15rem] flex items-center justify-center h-10 box-border leading-[50%] bg-gradient-to-r from-gradient1 text-base font-normal to-gradient2"><span>Submit</span></button>
                        <div className='flex flex-col items-center gap-2 mt-6'>
                            <p className='font-Montserrat font-normal text-xs text-getlink3'>Share on</p>
                            <p>{social_media}</p>
                        </div>
                    </Form>
        </div>
    )
}

export default Contact



const social_media = <svg xmlns="http://www.w3.org/2000/svg" width="129" height="22" viewBox="0 0 129 24" fill="none">
<path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
<path d="M49.0455 4H43L50.1336 13.3619L43.3886 21H45.6773L51.1942 14.7533L55.9545 21H62L54.5658 11.2437L60.9636 4H58.675L53.5053 9.8531L49.0455 4ZM56.8182 19.3L46.4545 5.7H48.1818L58.5455 19.3H56.8182Z" fill="white"/>
<path d="M85 14.5H87.5L88.5 10.5H85V8.5C85 7.47 85 6.5 87 6.5H88.5V3.14C88.174 3.097 86.943 3 85.643 3C82.928 3 81 4.657 81 7.7V10.5H78V14.5H81V23H85V14.5Z" fill="#F8F8F8"/>
<path d="M111.94 5.00002C111.94 5.53046 111.729 6.03906 111.354 6.41394C110.978 6.78883 110.469 6.99929 109.939 6.99902C109.409 6.99876 108.9 6.78779 108.525 6.41253C108.15 6.03727 107.94 5.52846 107.94 4.99802C107.94 4.46759 108.151 3.95899 108.526 3.5841C108.902 3.20922 109.411 2.99876 109.941 2.99902C110.471 2.99929 110.98 3.21026 111.355 3.58552C111.73 3.96078 111.94 4.46959 111.94 5.00002ZM112 8.48002H108V21H112V8.48002ZM118.32 8.48002H114.34V21H118.28V14.43C118.28 10.77 123.05 10.43 123.05 14.43V21H127V13.07C127 6.90002 119.94 7.13002 118.28 10.16L118.32 8.48002Z" fill="#F8F8F8"/>
</svg>