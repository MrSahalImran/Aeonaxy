import React from 'react'

const SignLogButton = ({label}) => {
  return (
    <div className="sign-buttons flex gap-2">
    <button
      onClick={() => {}}
      className="px-3 select-none transition-all duration-200 ease-linear py-1 text-gray-700 capitalize text-md font-normal    hover:bg-black hover:text-white rounded-full hover:cursor-pointer"
    >
      {label}
    </button>
  </div>
  )
}

export default SignLogButton