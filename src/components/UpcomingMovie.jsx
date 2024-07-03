import React from 'react'
import {TrendingMovies} from '../data/MovieDetails'

const UpcomingMovie = () => {
  return (
    <div id='Upcoming' className='bg-black w-full text-white px-10 py-10'>
    <h1 className='font-oswald text-3xl pb-5 flex gap-x-5 items-baseline'><span>Upcoming</span><div className='w-full h-1 bg-gradient-to-r from-red-800 to-transparent'/></h1>
    <div className='flex gap-x-3 overflow-x-auto'>
        {
            TrendingMovies.map((item, index) => {
                return(
                    <div className='min-w-[150px] p-[3px] bg-gradient-to-b from-transparent via-transparent to-red-800 rounded-sm'>
                        <img className='w-full rounded-sm aspect-[1/1.5] object-cover shadow-md' src={item.src} alt="" />
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default UpcomingMovie