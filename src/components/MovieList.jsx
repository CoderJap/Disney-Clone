import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import {IoChevronBackOutline,IoChevronForwardOutline} from "react-icons/io5"
import HrMovieCard from './HrMovieCard'

const MovieList = ({genreId,index_}) => {

  const [movieList , setMovieList] = useState([])
  const elementRef = useRef();

  useEffect(()=>{
    getMovieByGenreId();
  },[])

  const getMovieByGenreId = () =>{
    GlobalApi.getMovieByGenreId(genreId).then(resp=>{
      // console.log(resp.data.results)
      setMovieList(resp.data.results)
    })

  }

  const slideRight=(element)=>{
    element.scrollLeft+=500;
  }
  const slideLeft=(element)=>{
    element.scrollLeft-=500;
  }

  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0?'mt-[80px]':' mt-[150px]'}`}/>
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth '>
      {
        movieList.map((item,index)=>(
          <>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item}/>}
          </>
          
        ))
      }
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block top-0 right-0 absolute ${index_%3==0?'mt-[80px]':' mt-[150px]'}`}/>
    </div>
  )
}

export default MovieList