import React from 'react'
import amico from "../assets/amico.svg";
import triangle from "../assets/triangle.svg";
import Button from './Button';

const Hero = () => {
  return (
    <div className=' md:flex mt-[25px] justify-between '>
        <div>
            <h1 className='mt-28 font-bold text-5xl '> work at the speed </h1>
            <h1 className='font-bold text-5xl'>of thought</h1>
            <p className='mt-4 w-96'>  Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
               </p>
               <div className=' mt-10 flex'>
                    <Button text='Get Started' />
                <img className='' src={triangle} alt="" />
                <a className='ml-2 mt-1 text-[#02897A] hover:font-medium' href="#">Watch the Video</a>
               </div>
        </div>
        <div className='md:ml-32 md:mt-0 mt-20'>
            <img  src={amico} alt="" />
        </div>
       
    </div>
  )
}

export default Hero