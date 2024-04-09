import React from "react"
import HeroLinks from "../components/HeroLinks"

const Hero = () => {
  const imgText = [
    { img: 1, text: "Setting up your first event" },
    { img: 2, text: "Troubleshooting availability" },
    { img: 3, text: "Scheduling with video conferencing" },
    { img: 4, text: "Embed options overview" },
    { img: 5, text: "Automate tasks with Workflows" },
    { img: 6, text: "Use Calendly for Chrome" },
  ]

  return (
    <div className="Hero md:mt-48 mt-32 w-full h-fit relative select-none px-4">
      <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
        <h1 className=" leading-none text-center md:text-6xl text-4xl tracking-tight select-none font-bold text-gray-800 mb-6 lg:mb-24">
          What can we help you with?
        </h1>
        <div className="relative select-none rounded-full border-2 border-gray-300 w-3/4 lg:w-[60%] px-5 py-2 sm:py-3 lg:py-4 shadow-md">
          <svg
            className="absolute select-none left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m4.25-1A8.5 8.5 0 1110 3.5 8.5 8.5 0 0118.5 12c0 1.85-.62 3.56-1.66 4.94L21 21z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search our articles"
            className="w-full pl-10 text-lg outline-none"
          />
        </div>
      </div>
      <div className="flex mt-5 flex-col justify-center items-center md:text-center md:mt-8 sm:px-5 lg:mt-10 lg:flex-row lg:justify-center">
        <div className="flex  flex-col gap-3 justify-center items-center">
          {imgText.slice(0, 3).map((item, index) => (
            <HeroLinks key={index} imgNumber={item.img} text={item.text} />
          ))}
        </div>
        <div className="flex flex-col gap-3 justify-center mt-4 md:mt-0 lg:mt-0 lg:ml-4">
          {imgText.slice(3, 6).map((item, index) => (
            <HeroLinks key={index + 3} imgNumber={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
