import React from 'react'
import NavigationBar from './NavigationBar'
import { useLocation } from 'react-router-dom'

const MovieDetails = () => {
    const location = useLocation();

    const { id,
        name,
        thumbnail,
        rating,
        description,
        type,
        poster,
        sort_info,
        info,
        scenes,
        famouse_casts,
        casts
    } = location.state.details;

    return (
        <div className='bg-black min-h-screen relative flex flex-col gap-y-10'>
            <NavigationBar />
            <Thumbnail thumbnail={thumbnail} />
            <div className='px-5 sm:px-10 w-full h-auto -translate-y-40 -mb-40'>
                <div className=' grid grid-cols-1 gap-y-10'>
                    <Title name={name} sort_info={sort_info} />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10'>
                        <AboutSection poster={poster} description={description} rating={rating} type={type} />
                        <MoreInfo info={info} />
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 px-5 sm:px-10 lg:px-0 lg:grid-cols-2 gap-x-5 mt-5 md:mt-10'>
                <div className='space-y-5'>
                    <h1 className='text-white font-oswald text-3xl md:ml-5'>Watch Trailer</h1>
                    <div className='p-1 bg-red-800'>
                        <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/MZ--qG3zsqA?si=k0Fn2Q7Soybej8CV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='space-y-10 py-10'>
                    <div className='space-y-5'>
                        <h1 className='text-white font-oswald'>Movie Scenes</h1>
                        <div className='flex overflow-auto gap-x-3'>
                            {
                                scenes.map((item, index) => {
                                    return (
                                        <img className='w-[200px] rounded-sm' src={item} alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-white font-oswald'>All Casts</h1>
                        <div className='flex overflow-auto gap-x-3'>
                            {
                                casts.map((item, index) => {
                                    return (
                                        <img className='w-[100px] aspect-square object-cover rounded-full' src={item.img} alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pb-5 px-5 space-y-10'>
                <h1 className='text-white font-oswald text-xl'>Famouse Faces</h1>
                <div className='flex gap-x-5 overflow-auto'>
                    {
                        famouse_casts.map((item, index) => {
                            return (
                                <div className='min-w-[250px] p-4 bg-gradient-to-b from-black to-red-800 flex flex-col gap-y-5 justify-center items-center rounded-md rounded-ee-[2rem]'>
                                    <img className='w-[35%] aspect-square object-cover rounded-full' src={item.img} alt="" />
                                    <div  className='flex justify-center items-center flex-col'>
                                        <h1 className='font-oswald text-xl text-white'>{item.name}</h1>
                                        <p className='text-[0.75rem] font-oswald text-white'>{item.known}</p>
                                    </div>
                                    <button className='bg-white px-5 font-oswald py-1 rounded-md shadow-md text-red-800'>Know More</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDetails


const Thumbnail = ({ thumbnail }) => {
    return (
        <div className='w-full aspect-square sm:aspect-[1/0.35] relative'>
            <img className='w-full h-full object-cover absolute brightness-[0.8]' src={thumbnail} alt="" />
            <div className='absolute w-full h-full bg-gradient-to-b from-black/[0.9] via-black/[0.3] to-black' />
        </div>
    )
}

const Title = ({ name, sort_info }) => {
    return (
        <div className='text-white'>
            <div className='space-y-1 sm:space-y-3 flex flex-col items-start'>
                <h1 className='text-white font-oswald text-5xl md:text-6xl '>{name}</h1>
                <div className='font-oswald text-slate-600 flex gap-x-2 md:gap-x-5'>
                    <span>{sort_info.year}</span>
                    <span>•</span>
                    <span>{sort_info.sensitivity}</span>
                    <span>•</span>
                    <span>{sort_info.duration}</span>
                </div>
            </div>
        </div>
    )
}

const AboutSection = ({ poster, type, description, rating }) => {
    return (
        <div className='flex gap-x-3 sm:gap-x-10'>
            <img className='w-[30%] object-cover' src={poster} alt="" />
            <div className='space-y-1 sm:space-y-10 md:space-y-5'>
                <p className='text-white/[0.7] flex gap-x-3  font-oswald text-sm'>{type.map((item, index) => index !== type.length - 1 ? <div className='flex gap-x-3'><p>{item}</p><p>•</p></div> : <p>{item}</p>)}</p>
                <p className='text-white font-oswald tracking-wide flex flex-col'><span className='text-xl text-red-800'>Story:</span> <span className='text-sm justify-center'>{description}</span></p>
                <p className='text-white font-oswald'><span className='font-extrabold bg-yellow-500 px-2 py-1 rounded-sm'>IMDB</span> Rating : {rating}/10</p>
            </div>
        </div>
    )
}

const MoreInfo = ({ info }) => {
    return (
        <div className='text-white font-oswald space-y-0'>
            <p className='space-x-10 border-t-[1.5px] border-slate-700 py-5 '><span className='text-red-800'>Director</span><span>{info.director}</span></p>
            <p className='space-x-10 border-t-[1.5px] border-slate-700 py-5'><span className='text-red-800'>Writter</span><span>{info.writter}</span></p>
            <p className='space-x-10 border-t-[1.5px] border-slate-700 py-5 border-b-[1.5px] flex items-start sm:items-center'><span className='text-red-800'>Stars</span><span className='flex flex-wrap flex-row gap-x-3'>{info.stars.map((item, index) => {
                return (
                    <span>{"0" + (index + 1)} {"."} {item}</span>
                )
            }
            )}</span></p>
        </div>
    )
}