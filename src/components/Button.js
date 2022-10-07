import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-7 text-white py-1 rounded-md bg-[#02897A] mr-7 hover:bg-[rgb(9,193,171)]' type='button' >{text}</button>
  )
}

export default Button