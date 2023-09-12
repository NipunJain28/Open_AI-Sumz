import React from 'react'
import {AiFillCopy} from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const Fields = ({data}) => {
 
 
  const copyBtnHandler=()=>{
    navigator.clipboard.writeText(data.newUrl);
    toast.success("Copied to ClipBoard");
  }
  return (
   
    <div className=' max-h-[60px] flex px-[20px] py-[22px] items-center gap-[17px] rounded-[10px] border-[1px] border-solid border-[#999] bg-white'>
        <button onClick={copyBtnHandler} className='w-[34px] h-[34px]   flex justify-center items-center'><AiFillCopy/>
        <Toaster/></button>
                      <div className='overflow-x-hidden overflow-y-hidden h-[27px]  text-blue w-[885px] text-[18px] font-medium '>{data.newUrl}</div>
    </div>
    
  )
}

export default Fields