import React from 'react'
import logo from "../assets/Sumz.png"
const Navbar = () => {
  return (
    <div className='bg-lavender w-full'>
        <div className='w-11/12  mx-auto flex px-[290px] py-[12px] items-center justify-between'>
            {/* logo image */}
            <div className='flex  px-[10px] w-[160px] py-[7px] justify-center items-center gap-[10px]'>
                <img src={logo} className=' w-[140px]' alt="This is our Logo named Sumz"></img>
            </div>
            <a href="http://www.facebook.com" target="_blank" > 
            <button className=' px-[28px] h-[55px] text-[20px] hover:scale-95 transition-all duration-200 font-semibold text-white text-center font-poppins py-[7px] rounded-[30px] flex items-center justify-center gap-[10px] buttonBg'>
                    GitHub
            </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar