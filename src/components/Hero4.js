import React from 'react'
import laptop from "../assets/laptop.svg";
import cekbir from "../assets/cekbir.svg";
import cekmer from "../assets/cekmer.svg";
import cekkun from "../assets/cekkun.svg";

const Hero4 = () => {
  return (
    <div className='mt-24 flex justify-between'>
        <div>
            <img src={laptop} alt="" />
        </div>
        <div className=''>
            <h1 className='font-medium'>Easier decision making for</h1>
            <h1 className='font-medium text-4xl my-2'>Customer Suport</h1>
            <h1> The Myspace page defines the individual, his or her <br/> characteristics, traits, personal choices and the overall <br/> personality of the person. </h1>
            <div className='flex'>
                <div className='my-4'>
                <img src={cekkun} alt="" />
                <img className='my-10' src={cekmer} alt="" />
                <img src={cekbir} alt="" />
                </div>
                <div className='mx-6 my-4'>
                <h1>Never worry about overpaying for your <br/> energy again</h1>
                <h1 className='my-6'>We will only switch you to energy companies<br/> that we trust and will treat you right</h1>
                <h1>We track the markets daily and know where the<br/>saving are</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero4