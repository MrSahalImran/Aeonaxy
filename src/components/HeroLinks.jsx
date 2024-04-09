import React from 'react';

const HeroLinks = ({ imgNumber, text }) => {
  return (
    <div className="flex items-center gap-2 sm:w-60 min-w-fit md:w-96 lg:w-96 ">
      <div className="flex w-fit items-center gap-2">
        <img
          className="object-cover h-8 w-8 "
          src={`/assets/images/Screenshot${imgNumber}.png`}
          alt=""
        />
        <a href="#" className="text-blue-500 leading-none sm:text-md md:text-lg capitalize">
          {text}
        </a>
      </div>
    </div>
  );
};

export default HeroLinks;
