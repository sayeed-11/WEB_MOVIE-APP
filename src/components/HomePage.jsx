import React, { useState } from 'react'
import { LandingPageMovies } from '../data/LandingPageMovies'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const [activeNumber, setNumber] = useState(0);

    const { id,
        name,
        thumbnail,
        rating,
        description,
        type,
        sort_info,
    } = LandingPageMovies[activeNumber];
    return (
        <div id='Home' className='w-full max-w-[1300px] min-h-screen relative mx-auto'>
            <img className='absolute w-full h-full  object-cover brightness-[0.5] -z-20' src={thumbnail} alt="" />
            <div className='absolute w-full h-full bg-gradient-to-b from-black/[0] via-transparent to-black/[1] -z-10' />
            <ThumbnailInfo data={{id, name, rating, description, type, sort_info, setNumber, activeNumber }} />
        </div>
    )
}

export default HomePage

const ThumbnailInfo = ({ data }) => {
    const {id, name, rating, description, type, sort_info, setNumber, activeNumber } = data;
    const navigate = useNavigate();
    const goToDetailsPage = () => {
        navigate('/MovieDetails', { state: { details: LandingPageMovies[activeNumber] } })
    }
    return (
        <div key={id} className='z-40 w-full grid grid-cols-1 lg:grid-cols-2 top-0 bottom-0'>
            <LeftContent data={{sort_info, name, type, description, rating, goToDetailsPage}}/>
            <RightContent data={{activeNumber, setNumber}}/>
        </div>
    )
}

const LeftContent = ({data}) => {

    const {sort_info, name, type, description, rating, goToDetailsPage} = data;
    return (
        <div className='flex flex-col  justify-end items-start pt-28  lg:min-h-screen  md:py-28 px-5 sm:px-10 gap-y-5 box-border'>
            <div className='space-y-1 sm:space-y-3'>
                <span className='text-white font-header bg-red-800 px-2 py-1 rounded-sm'>{sort_info.year}</span>
                <h1 className='text-white font-oswald text-5xl md:text-6xl font-bold'>{name}</h1>
                <p className='text-white/[0.7] flex gap-x-3  font-oswald text-sm'>{type.map((item, index) => index !== type.length - 1 ? <div className='flex gap-x-3'><p>{item}</p><p>•</p></div> : <p>{item}</p>)}</p>
            </div>
            <p className='text-white font-oswald tracking-wide'>{description}</p>
            <div className='flex gap-x-10 text-xs items-baseline'>
                <span className='text-white space-x-1 font-oswald'><i className="fa-solid fa-clock font-extrabold text-xl bg-white text-black px-1 rounded-sm" /><span>{sort_info.duration}</span></span>
                <span className='text-white font-oswald'>{sort_info.sensitivity}</span>
                <span className='text-white font-oswald'><span className='font-extrabold bg-yellow-500 px-2 py-1 rounded-sm'>IMDB</span> Rating : {rating}/10</span>
            </div>
            <button onClick={goToDetailsPage} className='bg-red-800 text-white py-1 rounded-sm px-1 font-oswald md:mt-10 space-x-2 flex items-center'>
                <span className='pl-3'>Explore Now</span>
                <i className="fa-solid fa-angles-right text-white px-2 rounded-sm text-3xl animate-pulse" />
            </button>
        </div>
    )
}


const RightContent = ({data}) => {
    const {activeNumber, setNumber} = data;
    return (
        <div className='flex flex-col sm:flex-row  md:flex-col justify-end  sm:justify-between md:justify-end items-end md:items-end lg:items-center py-20  md:py-20 px-10 gap-y-5 md:gap-y-20 box-border'>
            <div className='space-x-3'>
                <button className='bg-white/[0.25] p-1.5 rounded-full animate-pulse'>
                    <span className='bg-white w-14 h-14 grid place-items-center rounded-full'>
                        <span className='text-red-800'><i className="fa-solid fa-play text-xl" /></span>
                    </span>
                </button>
                <button className='text-white font-oswald text-sm'>Watch Trailer</button>
            </div>
            <div className='flex gap-x-5 items-baseline'>
                <button onClick={() => { activeNumber === 0 ? setNumber(3) : setNumber(activeNumber - 1) }} className='text-white text-2xl font-extralight'><i className="fa-solid fa-chevron-left" /></button>
                <div className='flex gap-x-5 items-baseline'>
                    {
                        [1, 2, 3, 4].map((item, index) => {
                            return (
                                <button onClick={() => { setNumber(index) }} className={`${index === activeNumber ? "text-red-800 text-[3rem]" : "text-white"} font-oswald`}>0{item}</button>
                            )
                        })
                    }
                </div>
                <button onClick={() => { activeNumber === 3 ? setNumber(0) : setNumber(activeNumber + 1) }} className='text-white text-2xl font-extralight hover:scale-[1.15] transition-all'><i className="fa-solid fa-chevron-right" /></button>
            </div>
        </div>
    )
}