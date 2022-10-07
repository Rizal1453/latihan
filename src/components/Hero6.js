import React from 'react'
import bgup from "../assets/Bgup.svg";
import avator from "../assets/Avator1.svg";
import avator2 from "../assets/Avator2.svg";
import avator3 from "../assets/Avator3.svg";
import avator4 from "../assets/Avator4.svg";
import textField from "../assets/Textican.svg";
import field from "../assets/Rectangle1.png";
const Hero6 = () => {
  return (
    <div>
        <p className='-z-50 absolute'><img className='ml-3 w-[1500px]' src={bgup} alt=""  /></p>
    
        <h1 className='font-medium text-4xl text-center my-4'><br/> Quick & Easy Proses</h1>
        <p className=' text-center'> Do you require some help for your project: Conception workshop, <br/>
        prototyping, marketing strategy, landing page, Ux/UI?</p>
        <div className=' mt-6 flex justify-center'>
            <div className=''>
                <div className=' flex'>
                    <img src={avator} alt="" />
                      <img className='' src={textField} alt="" />
                </div>
                <div className='flex'>
                  <img src={textField} alt="" />
                  <img src={avator2} alt="" />
                </div>
            </div>
            <div className='ml-36'>
                <div className='flex'>
                  <img src={textField} alt="" />
                  <img src={avator3} alt="" />
                </div>
                <div className=' flex'>
                    <img src={avator4} alt="" />
                      <img className='' src={textField} alt="" />
                </div>
                
            </div>
        </div>
        <div className='mt-10 text-center mb-24'>
          <a className='text-white py-3 px-6 bg-[#02897A] rounded-md' href="">Contact our export</a>
        </div>
        
    </div>
  )
}

export default Hero6