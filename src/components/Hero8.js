import React from 'react'

const Hero8 = () => {
  return (
    <div className='mt-36' >
        <div className='text-center my-10'>
        <h1 className='text-3xl font-bold'> Price Table</h1>
        <p>We offer competitive price</p>
        </div>
        <div className='flex justify-between'>
        <div className='border text-center w-[348px] rounded-xl shadow-lg'>
            <h1 className='mt-10 mb-3 font-bold text-xl'>free</h1>
            <p>brief price sezcription</p>
            <div className='flex justify-center'>
                <h1 className='text-[#02897A] font-bold text-[80px]' >0</h1>
                <div>
                    <h1 className='text-[#02897A] font-bold mt-8 text-left'>$</h1>
                    <h1>Per   / month</h1>
                </div>
            </div>
            <h1>Only 2 Operators<br/>
            Notifications<br/>
            Landing Pages</h1>
            <div className='my-10'>
            <a className='bg-[#02897A] text-white px-4 py-2 rounded-md ' href=""> Order Now </a>
            </div>
        </div>
        <div className='border text-center w-[348px] text-white bg-[#02897A] rounded-xl shadow-lg'>
            <h1 className='mt-10 mb-3 font-bold text-xl'>Standard</h1>
            <p>brief price description</p>
            <div className='flex justify-center'>
                <h1 className='font-bold text-[80px]' >5</h1>
                <div>
                    <h1 className=' font-bold mt-8 text-left'>$</h1>
                    <h1>Per   / month</h1>
                </div>
            </div>
            <h1>5+ Operators<br/>
            Notifications<br/>
            Landing Pages</h1>
            <div className='my-10'>
            <a className='bg-white text-[#02897A] px-4 py-2 rounded-md ' href=""> Order Now </a>
            </div>
        </div>
        <div className='border text-center w-[348px] rounded-xl shadow-lg '>
            <h1 className='mt-10 mb-3 font-bold text-xl'>Premium</h1>
            <p>brief price description</p>
            <div className='flex justify-center'>
                <h1 className='text-[#02897A] font-bold text-[80px]' >10</h1>
                <div>
                    <h1 className='text-[#02897A] font-bold mt-8 text-left'>$</h1>
                    <h1>Per   / month</h1>
                </div>
            </div>
            <h1>10+ Operators<br/>
            Notifications<br/>
            Landing Pages</h1>
            <div className='my-10'>
            <a className='bg-[#02897A] text-white px-4 py-2 rounded-md ' href=""> Order Now </a>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero8