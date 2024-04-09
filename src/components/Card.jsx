import React from 'react';

const Card = ({ imgSrc, title, description, index }) => {
  return (
    <div className={`flex ${index === 0 ? 'border-2 border-blue-600' : 'border'} flex-shrink-0 w-full select-none rounded-xl p-5 flex-col items-center relative overflow-hidden sm:flex hover:cursor-pointer hover:shadow-md`}>
      {index === 0 && <div className="absolute right-0 top-0 w-20 text-center bg-blue-600 text-white px-2 py-1 rounded-bl-xl font-semibold">New</div>}
      <img className='w-20 mb-5 sm:mb-0 sm:mr-5' src={imgSrc} alt="" />
      <div className='text-center'>
        <h1 className='text-2xl mb-2 font-bold text-gray-800'>{title}</h1>
        <p className='text-center w-[90%]'>{description}</p>
      </div>
    </div>
  );
}

export default Card;
