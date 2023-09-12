import React, { useEffect, useState } from 'react'
import linkImg from "../assets/link2.png";
import {BsArrowReturnLeft} from "react-icons/bs" 
import { useDispatch, useSelector } from 'react-redux';
import  axios  from "axios";
import {AiFillCopy} from "react-icons/ai";
import { addArticle } from '../services/slices/articleSlice';
import Fields from "./Fields";

const Urlfield = ({setSummary,setLoading,setShowSummary}) => {
  const [url,setUrl]=useState("");
  const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url:`${url}`,
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': 'f033a6210dmsh9c29db1f2fdd923p10c559jsn22e3c5c6c467',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
    const dispatch=useDispatch();
    const getUrls=useSelector((state)=>(state.articleUrls));
    
    // console.log(getUrls.article.length);
    let arr=getUrls.article;
    // console.log(arr);
    if(arr.length>3){
      arr=arr.slice(0,3);
    }
    const fetchData=async()=>{
      try{
        setShowSummary(true);
        setLoading(true);
        let response;
        try{
          response = await axios.request(options);
        }catch(e){
          console.log(e);
          setLoading(false);
          setSummary("");
        }
        // console.log(response.data.summary);
        setLoading(false);
          setSummary(response.data.summary);
        
      }catch(e){
        console.log(e);
      }
    }
    
    const callHandler=(e)=>{
      e.preventDefault();
      dispatch(addArticle(url));
      
      fetchData();
    }
    const goTolink=()=>{
      if(url!==""){
        window.open(url);
      }
    }
    
  return (
    <div className='w-[990px] flex flex-col justify-center items-center gap-[17px]'>
        {/* input field lala */}
        <form onSubmit={(e)=>callHandler(e)} className='justify-center items-center bg-[#FEFEFE] gap-[22px] shadow-md shadow-lightblack flex px-[15px] py-[12px] rounded-[10px]'>
        
            <button type="button" onClick={goTolink} className='w-[34px] h-[34px]'>
                <img src={linkImg} alt="This is link"></img>
            </button>
        
            <input onChange={(e)=>{setUrl(e.target.value)}} required className='text-black text-[18px] font-medium outline-none w-[829px]' placeholder='Enter URL to Summarize'></input>
            <button type='submit'  className='flex px-[15px] py-[10px] flex-col items-start gap-[10px] rounded-[7px] border-[1px] border-solid border-[#666]'><BsArrowReturnLeft/></button>
        </form>
        <div className='flex w-full items-start px-2'>
          {
            getUrls.article.length>0 && 
              <div className=' text-[27px] font-semibold text-black'>
                  Search <span className='text-[#007494] '>History</span>
              </div>
            
          }
        </div>
        {/* urls if exist */}
        <div className='mb-[24px] flex flex-col justify-center items-center gap-[17px]'>
          {
            arr?.length>0 && arr.map((data,index)=>{
              return <Fields data={data} key={index}></Fields>
            })
          }
        </div>
    </div>
  )
}

export default Urlfield;