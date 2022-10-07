import React from 'react'
import screen from "../assets/screen1.svg";

const Section10 = () => {
  return (
    <div className='my-24 flex justify-center'>
        <div className='mt-20 border bg-[#02897A] flex rounded-3xl '>
            <div>
                <h1 className='text-3xl font-bold text-white w-[510px] ml-[51px] my-12'> Join 100 Compannies who <br/>boost their business with <br/>Product</h1>
                <div className='my-10'>
                    <a className='bg-white text-[#02897A] px-8 py-3 rounded-md ml-[51px] font-bold' href=""> Get This </a>
                </div>
            </div>
            <div >
                <img src={screen} alt=""  width="351px" height="331px"/>

            </div>
        </div>
    </div>
  )
}

export default Section10