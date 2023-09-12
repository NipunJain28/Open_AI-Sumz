import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

import Urlfield from "./components/Urlfield";
import Summary from "./components/Summary";

function App() {
  const [summary,setSummary]=useState("");
  const [loading,setLoading]=useState(false);
  const [showSummary,setShowSummary]=useState(false);
  // console.log(showSummary);
  return (
   <div className=" font-poppins flex flex-col w-screen min-h-screen  items-center gap-[20px] topBg">
    <Navbar/>
    {/* section 1 */}
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
      {/* heading 1 */}
      <div className="text-center text-[72px] font-extrabold text-black">
        Summarize articles with
      </div>
      {/* heading 2 */}
      <div className="text-center text-[82px] font-bold AItext">
        OpenAI GPT-4
      </div>
      {/* text */}
      <div className="text-center text-lightblack text-[20px] font-bold w-[843px]">
        Simplify your reading with Sumz, an open-source article summarizer that transform lengthy articles into clear and concise summaries.
      </div>
    </div>
    {/* section 2 */}
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
        <Urlfield setShowSummary={setShowSummary} setLoading={setLoading} setSummary={setSummary}/>
    </div>
    {/* section 3 */}
    { showSummary && 
    <div className="w-11/12 mb-[65px] mx-auto flex flex-col justify-center items-center">
      
        
      
        {loading?(<div className="custom-loader">

        </div>):(summary.length!==0?(<Summary summary={summary}/>):(<div className="flex lg:w-[990px] flex-col items-start gap-[17px] flex-shrink-0">
        <div className='flex-1 self-stretch text-center text-lightblack text-[24px] font-normal -tracking-[0.6px] leading-normal'>Oops! Something went wrong. Summary cannot be fetched! Try another Link</div>
        </div>))}
        
    </div>
    }
   </div>
  );
}

export default App;
