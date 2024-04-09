import React from "react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import Menu from "../components/Menu";
import SignLogButton from "../components/SignLogButton";
const Navbar = () => {
  return (
    <nav className="w-screen shadow-sm bg-white top-0 py-8 fixed container z-10 pl-2">
      <div className="w-full flex  items-center justify-between">
        <div className="flex select-none">
          <img
            className="lg:w-[8vw] w-32  mr-2"
            src="/assets/calendly4848.jpg"
            alt=""
          />
          <h1 className="border-l-2 select-none px-2 font-medium lg:text-[1.5vw] border-gray-400 text-gray-800">
            Help Center
          </h1>
        </div>

        <div className="nav-links hidden lg:flex lg:items-center lg:justify-between">
          
          {["developers", "report abuse", "Contact us"].map((item, index) => {
            return index === 0 || index === 1 ? (
              <a
                href="#"
                key={index}
                className="group select-none relative flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 text-md capitalize mr-10"
                style={{ textDecoration: "none" }}
              >
                {item}
                <FaArrowUpRightFromSquare/>
                <span className="group-hover:w-full absolute bottom-0 left-1/2 w-0 h-px bg-gray-700 transition-all duration-300 transform -translate-x-1/2 after:content-['']"></span>
              </a>
            ) : (
              <a
                href="#"
                key={index}
                className="text-gray-700 select-none hover:text-gray-900 text-md capitalize mr-10"
              >
                {item}
              </a>
            )
          })}

          <div className="sign-buttons flex gap-2">
           <SignLogButton label={"Login"}/>
           <SignLogButton label={"Sign Up"}/>
          </div>
        </div>
        <div className="lg:hidden">
          <Menu/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

