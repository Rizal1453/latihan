import React from 'react'
import hero21 from "../assets/iconhero21.svg";
import hero22 from "../assets/iconhero22.svg";
import hero23 from "../assets/iconhero23.svg";
import hero24 from "../assets/iconhero24.svg";
import bg from "../assets/Bgbgaja.svg";

const Hero2 = () => {
  return (
    <div className='relative mt-28'>
        <h1 className='text-[50px] font-bold text-center'>Product was Built Specifically</h1>
        <span className='-z-50 absolute'><img className='ml-3 w-[1500px]' src={bg} alt=""  /></span>
        <h1 className='text-[50px] font-bold text-center'>for You</h1>
        <div className='flex justify-center mt-10'>
            <div className='ml-28'>
                <img src={hero21} alt="" />
                <p>First click</p>
                <p>While most people enjoy</p>
                <p>casino gaming</p>
            </div>
            <div className='ml-28'>
                <img src={hero22} alt="" />
                <p>Design survey</p>
                <p>While most people enjoy</p>
                <p>casino gaming</p>
            </div>
            <div className='ml-28'>
                <img src={hero23} alt="" />
                <p>Prefence tests</p>
                <p>While most people enjoy</p>
                <p>casino gaming</p>
            </div>
            <div className='ml-28'>
                <img src={hero24} alt="" />
                <p>five second tests</p>
                <p>While most people enjoy</p>
                <p>casino gaming</p>
            </div>
        </div>
        <div className=' mb-24 text-center mt-[50px]'>
        <a className=' text-white py-3 px-5 rounded-md bg-[#02897A]' href="">SIGN UP NOW</a>
        </div>
    </div>
  )
}

export default Hero2