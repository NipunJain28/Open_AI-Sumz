import React from 'react'

const Summary = ({summary}) => {
  return (
    <div className='flex lg:w-[990px] flex-col items-start gap-[17px] flex-shrink-0'>
    
    {/* article summary */}
    <div className=' text-[27px] font-semibold text-black'>
                  Article <span className='text-[#007494] '>Summary</span>
    </div>
    
    
    {/* real game  */}
    <div className='flex rounded-[10px] border-[1px] border-[#999] bg-white w-full p-[15px] flex-col items-start gap-[10px] flex-shrink-0 min-h-max'>
          
        
            <div className='flex-1 self-stretch text-lightblack text-[24px] font-normal -tracking-[0.6px] leading-normal'>
                {summary}
            </div>
    </div>
    </div>
  )
}

export default Summary