import React from 'react'
import { FaApple } from "react-icons/fa6";
const DownloadSelect = ({text,label,imgUrl}) => {
  return (
    <div >
        <div className='grid grid-cols-3 w-fit p-1 rounded-lg bg-black'>
            <div className='h-fit col-span-1 text-center'>
                {imgUrl?<img src={imgUrl} className='w-[38px] h-[38px]' alt="logo" />:<FaApple className='text-white text-4xl'/>}
            </div>
            <div className='h-fit text-white flex flex-col col-span-2'>
                <p className='text-[8px] text-center mb-1 leading-none'>{text}</p>
                <h2 className='leading-none font-semibold'>{label}</h2>
            </div>
        </div>
    </div>
  )
}

export default DownloadSelect