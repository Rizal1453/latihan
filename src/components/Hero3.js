import React from 'react'
import amico3 from "../assets/amico-2.svg";

const Hero3 = () => {
  return (
    <div className='flex justify-between'>
        <div className='mt-20'>
            <h2 className='font-medium text-xl' >Effortless Validation for</h2>
            <h1 className='font-medium text-4xl mb-2'>Management</h1>
            <p>The Myspace page defines the individual, his or her <br/>
            characteristics, traits, personal choices and the overall <br/> 
             personality of the person. </p>
            <h2 className='font-medium my-2'>Accessory makers </h2>
            <p>While most people enjoy casino gambling, sports betting, <br/>
           lottery and bingo playing for the fun</p>
            <h2 className='font-medium my-2'>Alterationists</h2>
            <p>If you are looking for a new way to promote your business <br/> that won’t cost you more money, </p>
        </div>
        <div className='mt-14'>
            <img src={amico3} alt=""  />
        </div>

    </div>
  )
}

export default Hero3