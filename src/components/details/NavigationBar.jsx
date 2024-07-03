import React from 'react'
import logo from '../../assets/app-logo.png'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const navigation = useNavigate();
  return (
    <div className='fixed w-full top-0 left-0 px-5 py-1 z-50 flex justify-between items-center backdrop-blur-sm'>
        <img className='w-28' src={logo} alt="" />
        <button onClick={() => {navigation('/')}} className='flex items-center gap-x-1'>
          <i className="fa-solid fa-angles-left text-white text-3xl"/>
          <span className='text-white font-oswald'>Go Back</span>
        </button>
    </div>
  )
}

export default NavigationBar