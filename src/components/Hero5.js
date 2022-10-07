import React from 'react'
import amico5 from "../assets/amicoamico5.svg";

const Hero5 = () => {
  return (
    <div className='mt-24 flex justify-between'>
        <div>
            <h1 className='font-medium'> Optimisation for</h1>
            <h1 className='font-medium text-4xl my-4'>Collaborative</h1>
            <h1>Few would argue that, despite the advancements of <br/> feminism over the past three decades, women still face a <br/> double standard when it comes to their behavior. </h1>
            <h1 className='font-medium my-2'>Accesory makers</h1>
            <h1>While most people enjoy casino gambling, sports betting,<br/> lottery and bingo playing for the fun</h1>
            <h1 className='font-medium my-2'>Alterationists</h1>
            <h1>If you are looking for a new way to promote your business <br/> that won’t cost you more money, </h1>
        </div>
        <div className='ml-36 mb-24'>
            <img src={amico5} alt="" />
        </div>
    </div>
  )
}

export default Hero5