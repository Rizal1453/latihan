import React from 'react'

const Card = ({img,nama,deskripsi,style}) => {
  return (
    <div className={`border w-[348px] rounded-xl shadow-lg  ${style}`} >
                <img src={img} alt="" />
                <div className='mx-4 my-2'>
                    <h2>by <strong>{nama}</strong> | 03march 2019</h2>
                    <h2 className=' my-10 font-medium text-xl'>{deskripsi}</h2>
                </div>  
            </div>
  )
}

export default Card