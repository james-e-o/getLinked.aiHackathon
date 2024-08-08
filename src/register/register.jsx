/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './register.css'
import { 
    Form , 
    useActionData,
} from 'react-router-dom'

let sizeValue = "";
let categoryValue ="";

const Register = () => {
    const [congratPop, setCongratPop] = useState(false)
    const [categories, setCategories] = useState([])
    const [size, setSize] = useState('')
    const [checked, setChecked] = useState(false)
    const [category, setCategory] = useState('')

    const baseUrl = "https://backend.getlinked.ai"
    let data = useActionData()
    useEffect(()=>{
        sizeValue = size
        categoryValue= category
    },[size,category])
    useEffect(()=>{
        const fetchOptions = async () => {

            try {
                const response = await fetch(`${baseUrl}/hackathon/categories-list`)
                const list = await response.json()
                //!API IS DOWN
                setCategories(list)
                console.log(list)
            } catch (error) {
                console.log(error)
            } finally {
                 //!API IS DOWN
                setCategories([{id:1, name:'frontend'},{id:2, name:'backend'}, {id:3, name:'UI/UX'}])
            }

        }
        fetchOptions()
        data && data.values? setCongratPop(true):""
    },[data])

    return (
              <div className='py-6 px-6 h-screen bg-getlink z-0 overflow-y-scroll w-screen overflow-x-hidden relative'> 
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
                    <Form method='post' action='/register' className='mt-5 w-full flex flex-col items-center justify-start'>
                        <Input label={`Team's name`} name={'team-name'} placeholder={`Enter your group's name`} type={'text'} errormessage={data && data.nameError} greystar={true} mt={0} w={'90%'} />
        
                        <Input label={`Phone`} name={'telephone'} placeholder={`Enter your phone number`}   type={'text'} errormessage={data && data.telephoneError} mt={4} w={'90%'} />

                        <Input label={`Email`} name={'email'} placeholder={`Enter your email address`}  type={'email'} errormessage={data && data.emailError} mt={4} w={'90%'} />

                        <Input label={`Project Topic`} name={'topic'} placeholder={`What is your group project topic`}  type={'text'} errormessage={data && data.topicError} img={false} mt={4} w={'90%'} slatestar={true} />
                        
                       
                        <div className='flex justify-between w-[90%]'>
                            <p className='relative mt-4 w-[58%]'>
                                <label className='font-normal pl-1 text-sm'>{`Category`}</label>
                                <select className='outline-none py-1 bg-transparent px-3 text-base h-fit border  border-white rounded-[0.25rem] w-full' onChange={({target})=>setCategory(target.value)} defaultValue={`--Select your category`} name='category' id='category' >                           
                                    {categories && categories.map((category)=>(
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}                                  
                                </select>
                                {data && data.categoryError?<p className='text-red-500 absolute -bottom-6 h-fit p-2 font-Inter italic text-xs'>{data.categoryError}</p>:""}
                            </p>
                            {/* <Input label={`Group Size`} name={'size'} placeholder={`--size`}  type={'number'} errormessage={data && data.sizeError} mt={4} w={'5.5rem'} /> */}
                            <p className=' relative mt-4 w-[5.5rem]'>
                                <label className='font-normal pl-1 text-sm'>{`Group Size`}</label>
                                <input type="text" onChange={({target})=>setSize(target.value)} className='w-full py-4 h-[1.1rem] bg-transparent border outline-none px-3 border-white rounded-[0.25rem]' name="size" id="size" placeholder='--size' />
                                {data && data.sizeError?<p className='text-red-500 absolute -bottom-6 h-fit p-2 font-Inter italic text-xs'>{data.sizeError}</p>:""}
                            </p>
                        </div>
                        <p className='text-gradient1 w-[16.85rem] font-Inter italic mt-6 text-center font-medium text-[0.565rem]'> Please review  your  registration  details  before  submitting</p>
                        <p className=' flex w-[85%] text-white items-start gap-4 justify-start mt-3 text-center font-normal text-[0.665rem]'> 
                            <input type="checkbox" onChange={()=>setChecked(!checked)} className='bg-transparent w-5 h-5 checked:bg-white border border-white appearance-none rounded relative top-1' name="" id="" />
                            <p className='text-start'>I agreed with the event terms and conditions
                            and privacy policy</p>
                        </p>
                        <button className={checked?"rounded-md mx-auto mt-4 px-14 py-[1.11rem] h-10 box-border leading-[50%] bg-gradient-to-r from-gradient1 text-base font-normal to-gradient2 pointer-events-auto":"rounded-md mx-auto mt-4 px-14 py-[1.11rem] h-10 box-border leading-[50%] bg-gradient-to-r from-gradient1 text-base font-normal to-gradient2 opacity-50 pointer-events-none"}>Submit</button>
                    </Form>
                </div>
            </div> 
    )
}

export default Register

const Input = ({label, mt, w, type,placeholder, greystar, slatestar, errormessage, name}) => {
    const [error, setError] = useState(false)
    useEffect(()=>{
        errormessage?setError(true):setError(false)
    },[errormessage])
    return (
        <p className={` mt-${mt} mx-[0.7rem] w-[${w}] relative`}>
            <label className='font-normal pl-1 text-sm'>{label}</label>
            <input onInput={()=>setError(false)} style={error? {border:"1px solid rgb(239, 68,68)"}:{border:"1px solid white"}} className='outline-none text-base bg-transparent h-[1.1rem] py-[1.2rem] px-4 rounded-[0.25rem] mt-[0.28rem] w-full' placeholder={placeholder} name={name} type={type} />
            {error?<p className='text-red-500 absolute -bottom-6 h-fit p-2 font-Inter italic text-xs'>{errormessage}</p>:""}

            {greystar? <img className="absolute w-[0.88rem] h-[1.13rem] top-[0.88rem] -left-[1.5rem]" src="/gray-mini-star.png" alt="grey-mini-star"/>:""}

            {slatestar? <img className=" w-[0.565rem] top-[0.94rem] -right-[0.94rem] absolute h-[0.63rem]" src="/slatestar.png"  />:"" }
        </p>
    )
}


const Popbox = ({back}) => {
    return (
        <div className='w-[20rem] scale-[0.98] relative text-white h-[30rem] rounded-md flex justify-start items-center flex-col border-getlink3 border '>
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




export const registerAction = async ({request}) => {
    const data = await request.formData()
    console.log('fired')
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const values = {
        name:data.get("team-name"),
        email: data.get('email'),
        telephone : data.get("telephone"),
        topic: data.get("topic"),
        size:sizeValue,
        category:categoryValue
    }

    if (values.name === "")
    return {nameError:"name is required"}

    if (values.telephone.length  <= 0 )
    return {telephoneError:"phone number is required"}
    // else if(values.telephone.)

    if (!values.email.match(validEmail)){
        return {emailError : "enter a valid email address"}
    }

    if (values.topic === "")
    return {topicError:"field cannot be empty"}

    if (values.category === "")
    return {categoryError:"pick a category"}

    if (values.size === "" )
    return {sizeError:"required"}
    else if (values.size > 10)
    return {categoryError:'size must be less than 10'}

    console.log(values)
    
    return {values}

}