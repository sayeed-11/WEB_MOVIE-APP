import React, { useState } from 'react'
import logo from '../assets/app-logo.png'

const NavList = ["Home", "Trending", "Upcoming", "News"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isBar, setBar] = useState(false);
  return (
    <div className='w-full max-w-[1300px] fixed bg-black/[0] z-50 px-3 md:px-10 flex justify-between py-2 items-center backdrop-blur-[0]'>
      <div>
        <img className='w-28 z-50' src={logo} alt="" />
      </div>
      <ul className={`flex flex-col md:flex-row px-10 md:px-0 gap-y-10 text-[1.5rem] md:text-[1rem] text-white font-oswald gap-x-10 w-full md:w-auto h-screen md:h-auto bg-black md:bg-transparent top-0 transition-all ${isBar ? "right-0" : "right-[-100%]"} md:right-0 absolute md:relative -z-10 pt-20 md:pt-0`}>
        {
          NavList.map((item, index) => {

            return (
              <li><a onClick={() => { setActive(item); setBar(!isBar) }} className={`${item === active ? "text-white brightness-200 border-b-2 border-white" : "text-white/[0.5]"} pb-1`} href={`#${item}`}>0{index + 1} {item}</a></li>
            )
          })
        }
      </ul>

      <div className='flex items-center gap-x-5'>
        <button className='bg-white/[0.3] grid place-items-center p-1.5 rounded-full'><i className="fa-solid fa-magnifying-glass bg-red-800 w-8 h-8 text-white rounded-full grid place-items-center" /></button>
        {!isBar ? <button onClick={() => {setBar(!isBar)}} className='bg-white/[0.3] grid place-items-center p-1 rounded-sm md:hidden'><i className="fa-solid fa-bars bg-red-800 w-8 h-8 text-white rounded-sm grid place-items-center" /></button> :
        <button onClick={() => {setBar(!isBar)}} className='bg-white/[0.3] grid place-items-center p-1 rounded-sm md:hidden'><i className="fa-solid fa-xmark bg-red-800 w-8 h-8 text-white rounded-sm grid place-items-center" /></button>}
      </div>
      {/* <button><i class="fa-solid fa-bars"></i></button> */}
    </div>
  )
}

export default Navbar