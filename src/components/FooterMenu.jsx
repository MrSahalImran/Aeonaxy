import React from 'react'

const FooterMenu = ({title,bullets}) => {
  return (
    <div className='h-fit'>
        <div className='flex flex-col w-fit'>
            <h1 className='text-gray-600 w-full mb-3 font-bold text-3xl'>{title}</h1>
            {bullets.map((bullet, index)=><p key={index} className="text-gray-500 hover:cursor-pointer hover:text-gray-800 hover:underline mb-5 transition-colors duration-300 ease-in-out">{bullet}</p>)}
        </div>

    </div>
  )
}

export default FooterMenu