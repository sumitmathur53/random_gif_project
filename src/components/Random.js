import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spiner from './Spiner';
import useGif from '../hooks/useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  // const[gif,setGif] = useState('');
  // const[loading , setLoading] = useState(false);
  

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( ()=>{
  //    fetchData();
  // },[])


  // using 
  const{gif,loading,fetchData} = useGif();



  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

      {
        loading ? (<Spiner></Spiner>) : (<img src={gif} width="450"></img>)
      }

      <button onClick={()=>fetchData()}
      className='bg-yellow-200 mb-[20px] w-10/12 text-lg py-2 rounded-lg'>
        Generate
      </button>


    </div>
  )
}
