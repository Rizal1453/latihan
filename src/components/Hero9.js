import React from 'react'
import star from "../assets/star.svg";
import avatar1 from "../assets/Ellipse1.svg";
import avatar2 from "../assets/Ellipse2.svg";
import avatar3 from "../assets/Ellipse3.svg";

const Hero9 = () => {
  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-2xl mt-32 '>What Clients say</h1>
            <p>Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='mt-12 flex justify-between'>
        <div className='border w-[348px] shadow-xl rounded-lg'>
            <div className='mx-8 mt-8'>
            <img className='my-4' src={star} alt="" />
            <p>Product helps you see how many <br/> more days you need to <br/> work to reach your financial goal.</p>
            <div className='flex my-6'>
                <img src={avatar1} alt="" />
                <div className='mx-4' >
                    <h1>Wahid Ari</h1>
                    <p>Designer</p>
                </div>
            </div>
            </div>
        </div>
        <div className='border w-[348px] shadow-xl rounded-lg'>
            <div className='mx-8 mt-8'>
            <img className='my-4' src={star} alt="" />
            <p>Product helps you see how many <br/> more days you need to <br/> work to reach your financial goal.</p>
            <div className='flex my-6'>
                <img src={avatar2} alt="" />
                <div className='mx-4' >
                    <h1>Wahid Ari</h1>
                    <p>Designer</p>
                </div>
            </div>
            </div>
        </div>
        <div className='border w-[348px] shadow-xl rounded-lg'>
            <div className='mx-8 mt-8'>
            <img className='my-4' src={star} alt="" />
            <p>Product helps you see how many <br/> more days you need to <br/> work to reach your financial goal.</p>
            <div className='flex my-6'>
                <img src={avatar3} alt="" />
                <div className='mx-4' >
                    <h1>Wahid Ari</h1>
                    <p>Designer</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero9