import React from 'react'
import logo4 from "../assets/logo4.svg";
import  ig from  '../assets/ig.svg' ;
import fb   from  '../assets/fb.svg' ;
import tw   from  '../assets/tw.svg' ;

const Section11 = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div className=''>
                <img src={logo4} alt="" />
                <div className='flex mt-6 '>
                    <i><img src={ig} alt="" /></i>
                    <i className='mx-4'> <img src={fb} alt="" /> </i>
                    <i><img src={tw} alt="" /></i>
                </div>
            </div>
            <div>
            <ul>
                <li className='font-bold mb-2'>Resource</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
            </div>
            <div>
            <ul>
                <li className='font-bold mb-2'>Legal Stuff</li>
                <li>Disclaimer</li>
                <li>Financing</li>
                <li>Provacy Policy</li>
                <li>Term of Service</li>
            </ul>
            </div>
            <div>
                <h1>Knowing you're always on <br/> the best energy deal</h1>
                <input className='border shadow-md my-5 py-1' type="text"/>
                <div>
                <a className='bg-[#02897A] text-white px-4 py-2 rounded-md'>Sign Up Now</a>
                </div>
            </div>
        </div>
        <div className='text-center my-8'>
            <h1>Made With Love By Figmaland All Right Reserved</h1>
        </div>
    </div>
    
  )
}

export default Section11