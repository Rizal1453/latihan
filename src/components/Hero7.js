import React from 'react'
import image from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import carosolt from '../assets/carosolt1.svg'
import Card from './Card'


const Hero7 = () => {
  return (
    <div>
        <h1 className='font-medium text-2xl'>Contents Strategis</h1>
        <p className='my-5'>We focus on ergonomics and meeting you where you work.it's only a key troke away</p>
        <div className='flex justify-between '>
            <div className='border w-[348px] rounded-xl shadow-lg '>
                <img src={image} alt="" />
                <div className='mx-4 my-2'>
                    <h2>by <strong>Wahid Ari</strong> | 03march 2019</h2>
                    <h2 className=' my-10 font-medium text-xl'>Increasing Prosperity <br/>With Positive Thinking</h2>
                </div>  
            </div>
            <div className='border w-[348px] rounded-xl shadow-lg'>
                <img src={image2} alt="" />
                <div className='mx-4 my-2'>
                    <h2>by <strong>Wahid Ari</strong> | 03march 2019</h2>
                    <h2 className='my-10 font-medium text-xl text-[#02897A]'>Motivation Is The First <br/> Step To Success</h2>
                </div>  
            </div>
            <div className='border w-[348px] rounded-xl shadow-lg'>
                <img src={image3} alt="" />
                <div className='mx-4 my-4'>
                    <h2>by <strong>Wahid Ari</strong> | 03march 2019</h2>
                    <h2 className='my-10 font-medium text-xl'>Succes Steps Four Your <br/> Personal Or Bussines</h2>
                </div>  
            </div>
        </div>
       
    </div>
  )
}

export default Hero7