import React from 'react'
import {TrendingMovies} from '../data/MovieDetails'
const TrendingMovie = () => {
  return (
    <div id='Trending' className='bg-black w-full text-white px-5 py-16'>
        <h1 className='font-oswald text-3xl pb-5 flex gap-x-5 items-baseline'><span>Trending</span><div className='w-full h-1 bg-gradient-to-r from-red-800 to-transparent'/></h1>
        <div className='flex gap-x-3 overflow-x-auto pb-5 px-5'>
            {
                TrendingMovies.map((item, index) => {
                    return(
                        <div className='min-w-[150px] p-[3px] bg-gradient-to-b from-transparent via-transparent to-red-800 rounded-sm duration-[0.3s] hover:scale-[1.05] hover:blur-[1px]'>
                            <img className='w-full rounded-sm aspect-[1/1.5] object-cover shadow-md' src={item.src} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TrendingMovie